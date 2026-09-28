/**
 * Synthesizes realistic physiological cardiac heartbeat sounds (Lub-Dub)
 * using the Web Audio API without needing external MP3 audio files.
 */

class CardiacSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Plays a single lub-dub cardiac acoustic complex
   */
  public playHeartbeatPulse() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // S1 Sound: "LUB" (Closure of Mitral & Tricuspid valves - Lower frequency ~70Hz)
    this.createHeartTone(now, 75, 0.14, 0.35);

    // S2 Sound: "DUB" (Closure of Aortic & Pulmonic valves - Higher frequency ~95Hz, 0.15s later)
    this.createHeartTone(now + 0.16, 95, 0.11, 0.28);
  }

  private createHeartTone(startTime: number, freq: number, duration: number, maxGain: number) {
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sine wave with low-pass filter gives that muffled, warm chest-thump acoustic resonance
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.frequency.exponentialRampToValueAtTime(30, startTime + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(maxGain, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch {
      // Audio playback failsafe
    }
  }

  public setMuted(muted: boolean, bpm: number = 72) {
    this.isMuted = muted;
    if (muted) {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
    } else {
      this.initContext();
      this.startHeartbeatLoop(bpm);
    }
  }

  public updateBpm(bpm: number) {
    if (!this.isMuted) {
      this.startHeartbeatLoop(bpm);
    }
  }

  private startHeartbeatLoop(bpm: number) {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    const intervalMs = (60 / bpm) * 1000;
    this.playHeartbeatPulse();
    this.intervalId = window.setInterval(() => {
      this.playHeartbeatPulse();
    }, intervalMs);
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const cardiacAudio = new CardiacSoundEngine();
