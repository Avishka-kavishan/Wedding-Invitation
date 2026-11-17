"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX, Disc } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play gentle romantic acoustic arpeggio using Web Audio API
  const playRomanticChords = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Sri Lankan Traditional Melodic Progression (Jayamangala Flute & Temple Chime scale)
      // D Major / Mohanam Raga (D - E - F# - A - B - D5)
      const notesProgression = [
        // Auspicious Poruwa Opening (D - F# - A - D5)
        [146.83, 293.66, 369.99, 440.0, 587.33],
        // Jayamangala Flow (E - A - B - E5)
        [164.81, 329.63, 440.0, 493.88, 659.25],
        // Traditional Flute Chime (F# - A - B - F#5)
        [185.0, 369.99, 440.0, 493.88, 739.99],
        // Temple Bell Cadence (A - D - F# - A5)
        [110.0, 220.0, 293.66, 369.99, 440.0],
      ];

      let step = 0;

      const triggerChord = () => {
        if (!audioContextRef.current || audioContextRef.current.state === "closed") return;
        const currentChord = notesProgression[step % notesProgression.length];
        const now = ctx.currentTime;

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          // Soft sine / triangle for music box / harp texture
          osc.type = idx % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.18);

          // Envelope: soft attack, sustained ring, gentle decay
          gain.gain.setValueAtTime(0.0001, now + idx * 0.18);
          gain.gain.exponentialRampToValueAtTime(0.045 / (idx + 1), now + idx * 0.18 + 0.12);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.18 + 2.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.18);
          osc.stop(now + idx * 0.18 + 3.0);
        });

        step++;
      };

      triggerChord();
      intervalRef.current = setInterval(triggerChord, 2800);
    } catch {
      // Audio autoplay restrictions or unsupported
    }
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      playRomanticChords();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      playRomanticChords();
      setIsPlaying(true);
    }
    return () => {
      stopMusic();
    };
  }, [autoPlay]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Background Music" : "Play Wedding Music"}
        className={`group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-2xl transition-all duration-300 border ${
          isPlaying
            ? "bg-[#1f272b]/90 border-[#d4a34b] text-[#f3d085] ring-2 ring-[#d4a34b]/30"
            : "bg-[#1f272b]/80 border-white/10 text-white/70 hover:text-[#f3d085] hover:border-[#d4a34b]/50"
        } backdrop-blur-md`}
      >
        {/* Spinning Disc */}
        <div className="relative flex items-center justify-center">
          <Disc
            className={`w-5 h-5 ${
              isPlaying ? "animate-spin text-[#d4a34b]" : "text-gray-400"
            }`}
            style={{ animationDuration: "4s" }}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#f3d085] animate-ping" />
          )}
        </div>

        <span className="text-xs tracking-wider uppercase font-medium hidden sm:inline">
          {isPlaying ? "මංගල තනුව Playing" : "Traditional BGM"}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#f3d085]" />
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400" />
        )}

        {/* Floating notes animation */}
        {isPlaying && (
          <div className="pointer-events-none absolute -top-8 left-2 flex gap-1 animate-bounce">
            <Music className="w-3 h-3 text-[#f3d085] opacity-80" />
          </div>
        )}
      </button>
    </div>
  );
}
