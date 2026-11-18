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

  const playRomanticChords = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) audioContextRef.current = new AudioCtx();
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const notesProgression = [
        [146.83, 293.66, 369.99, 440.0, 587.33],
        [164.81, 329.63, 440.0, 493.88, 659.25],
        [185.0, 369.99, 440.0, 493.88, 739.99],
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
          osc.type = idx % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.18);
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
    } catch { /* Audio autoplay restrictions */ }
  };

  const stopMusic = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (audioContextRef.current && audioContextRef.current.state === "running") audioContextRef.current.suspend();
  };

  const toggleMusic = () => {
    if (isPlaying) { stopMusic(); setIsPlaying(false); }
    else { playRomanticChords(); setIsPlaying(true); }
  };

  useEffect(() => {
    if (autoPlay && !isPlaying) { playRomanticChords(); setIsPlaying(true); }
    return () => { stopMusic(); };
  }, [autoPlay]);

  return (
    <div className="music-player">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Background Music" : "Play Wedding Music"}
        className={`music-btn${isPlaying ? " playing" : ""}`}
      >
        <div className="music-disc-wrap">
          <Disc
            style={{
              width: "1.25rem", height: "1.25rem",
              color: isPlaying ? "#d4a34b" : "#9ca3af",
              animation: isPlaying ? "spin 4s linear infinite" : "none",
            }}
          />
          {isPlaying && <span className="music-ping" />}
        </div>

        <span className="music-label">
          {isPlaying ? "මංගල තනුව Playing" : "Traditional BGM"}
        </span>

        {isPlaying
          ? <Volume2 style={{ width: "1rem", height: "1rem", color: "#f3d085" }} />
          : <VolumeX style={{ width: "1rem", height: "1rem", color: "#9ca3af" }} />
        }

        {isPlaying && (
          <div className="music-notes">
            <Music style={{ width: "0.75rem", height: "0.75rem", color: "#f3d085", opacity: 0.8 }} />
          </div>
        )}
      </button>
    </div>
  );
}
