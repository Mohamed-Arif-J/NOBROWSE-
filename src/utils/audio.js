// NOBROWSE™ - Web Audio API Synthesizer (No external audio files required)

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const soundEffects = {
  // Click tick
  click(volume = 0.25) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch {
      // Audio not supported or blocked
    }
  },

  // Tab opened - upbeat blip
  tabOpen(volume = 0.3) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);

      gain.gain.setValueAtTime(volume * 0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(now + 0.08);
    } catch {}
  },

  // Tab closed - downward pop
  tabClose(volume = 0.3) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.07);

      gain.gain.setValueAtTime(volume * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(now + 0.07);
    } catch {}
  },

  // Search submit swoosh
  searchSubmit(volume = 0.3) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

      gain.gain.setValueAtTime(volume * 0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(now + 0.15);
    } catch {}
  },

  // Real Search Success (40%): Pleasant futuristic chime
  realSuccess(volume = 0.35) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = ctx.currentTime + idx * 0.06;
        const dur = 0.28;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(volume * 0.3, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch {}
  },

  // Chaos Result (60%): Quirky 8-bit descending bloop / retro buzzer
  chaosError(volume = 0.35) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const notes = [440, 370, 311, 220]; // descending dissonant
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.05;
        const dur = 0.14;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(volume * 0.25, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch {}
  },

  // Star Bookmark twinkle
  bookmark(volume = 0.35) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const freqs = [880, 1318.51, 1760]; // A5, E6, A6
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = ctx.currentTime + idx * 0.05;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(volume * 0.3, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.2);
      });
    } catch {}
  },

  // Duck quack synth!
  duckQuack(volume = 0.4) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.linearRampToValueAtTime(240, now + 0.1);
      osc.frequency.linearRampToValueAtTime(280, now + 0.18);
      osc.frequency.linearRampToValueAtTime(210, now + 0.3);

      gain.gain.setValueAtTime(volume * 0.4, now);
      gain.gain.linearRampToValueAtTime(volume * 0.5, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch {}
  },

  // Bored browser cancel tone
  browserBored(volume = 0.3) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.5);

      gain.gain.setValueAtTime(volume * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {}
  },

  // Pac-Man Game Over / Death Sound Effect
  // Classic 1980 11-step descending pitch sweep + double comical boop
  pacmanDeath(volume = 0.35) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // 11 classic descending "wa-wa" pitches
      const notes = [
        { start: 987.77, end: 780.0 }, // B5 -> G5
        { start: 880.00, end: 698.4 }, // A5 -> F5
        { start: 830.61, end: 659.2 }, // G#5 -> E5
        { start: 739.99, end: 587.3 }, // F#5 -> D5
        { start: 659.25, end: 523.2 }, // E5 -> C5
        { start: 622.25, end: 493.8 }, // D#5 -> B4
        { start: 587.33, end: 466.1 }, // D5 -> A#4
        { start: 554.37, end: 440.0 }, // C#5 -> A4
        { start: 523.25, end: 415.3 }, // C5 -> G#4
        { start: 493.88, end: 392.0 }, // B4 -> G4
        { start: 440.00, end: 349.2 }, // A4 -> F4
      ];

      const stepDuration = 0.082; // ~82ms per descending wa-wa note

      notes.forEach((note, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + idx * stepDuration;
        const noteEnd = noteStart + stepDuration;

        // Triangle waveform replicates vintage 8-bit Namco arcade tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.start, noteStart);
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, note.end), noteEnd);

        // Envelope: swift punchy attack and gentle release per note
        gain.gain.setValueAtTime(0, noteStart);
        gain.gain.linearRampToValueAtTime(volume * 0.45, noteStart + 0.008);
        gain.gain.setValueAtTime(volume * 0.4, noteEnd - 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        osc.stop(noteEnd);
      });

      // Ending: Two comic low pops/thuds (bloop-bloop)
      const afterNotes = now + notes.length * stepDuration + 0.04;

      // Pop 1: ~145Hz -> 80Hz
      const pop1Osc = ctx.createOscillator();
      const pop1Gain = ctx.createGain();
      pop1Osc.type = 'triangle';
      pop1Osc.frequency.setValueAtTime(145, afterNotes);
      pop1Osc.frequency.exponentialRampToValueAtTime(80, afterNotes + 0.11);

      pop1Gain.gain.setValueAtTime(0, afterNotes);
      pop1Gain.gain.linearRampToValueAtTime(volume * 0.5, afterNotes + 0.01);
      pop1Gain.gain.exponentialRampToValueAtTime(0.0001, afterNotes + 0.11);

      pop1Osc.connect(pop1Gain);
      pop1Gain.connect(ctx.destination);
      pop1Osc.start(afterNotes);
      pop1Osc.stop(afterNotes + 0.11);

      // Pop 2: ~95Hz -> 40Hz
      const pop2Start = afterNotes + 0.14;
      const pop2Osc = ctx.createOscillator();
      const pop2Gain = ctx.createGain();
      pop2Osc.type = 'triangle';
      pop2Osc.frequency.setValueAtTime(95, pop2Start);
      pop2Osc.frequency.exponentialRampToValueAtTime(40, pop2Start + 0.16);

      pop2Gain.gain.setValueAtTime(0, pop2Start);
      pop2Gain.gain.linearRampToValueAtTime(volume * 0.5, pop2Start + 0.01);
      pop2Gain.gain.exponentialRampToValueAtTime(0.0001, pop2Start + 0.16);

      pop2Osc.connect(pop2Gain);
      pop2Gain.connect(ctx.destination);
      pop2Osc.start(pop2Start);
      pop2Osc.stop(pop2Start + 0.16);
    } catch {}
  },

  // Easter Egg Chime - sparkling arpeggio
  easterEggChime(volume = 0.35) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = ctx.currentTime + idx * 0.05;
        const dur = 0.25;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(volume * 0.25, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch {}
  },

  // Freeze Tick - clock freeze tick for the 99% freeze
  freezeTick(volume = 0.25) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.02);

      gain.gain.setValueAtTime(volume * 0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.02);
    } catch {}
  }
};
