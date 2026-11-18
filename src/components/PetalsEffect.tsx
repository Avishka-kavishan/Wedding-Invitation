"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export function PetalsEffect() {
  const [enabled, setEnabled] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const petalCount = Math.min(24, Math.floor(width / 50));
    const petals: Array<{
      x: number; y: number; size: number; speedY: number; speedX: number;
      rotation: number; rotationSpeed: number; opacity: number; color: string;
    }> = [];

    const colors = [
      "rgba(255, 255, 255, 0.75)", "rgba(253, 248, 237, 0.7)",
      "rgba(244, 218, 175, 0.55)", "rgba(224, 235, 220, 0.6)",
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width, y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.9 + 0.4, speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * 360, rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;
        if (p.y > height + 20) { p.y = -20; p.x = Math.random() * width; }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size * 1.4);
        ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(212, 163, 75, 0.25)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <>
      {enabled && <canvas ref={canvasRef} className="petals-canvas" />}
      <button
        onClick={() => setEnabled((prev) => !prev)}
        title={enabled ? "Hide Falling Petals" : "Show Falling Petals"}
        className="petals-toggle"
      >
        <Sparkles
          style={{ width: "1rem", height: "1rem" }}
          className={enabled ? "petals-icon-active" : "petals-icon-inactive"}
        />
      </button>
    </>
  );
}
