"use client";

import { useState, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
    setProgress(ratio);
  };

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ background: "#0e0e0e", aspectRatio: "16/9" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
    >
      {/* Native video */}
      <video
        ref={videoRef}
        src={src}
        title={title}
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)",
          opacity: hovered || !playing ? 1 : 0.3,
        }}
      />

      {/* Play / Pause button */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity: !playing || hovered ? 1 : 0 }}
      >
        <div
          style={{
            width: "4.5rem",
            height: "4.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: playing ? "rgba(0,0,0,0.55)" : "#e1ed00",
            backdropFilter: "blur(8px)",
            borderRadius: "0.125rem",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.2s ease, background 0.2s ease",
            boxShadow: playing ? "none" : "0 0 36px rgba(225,237,0,0.4)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "2.25rem",
              color: playing ? "#e1ed00" : "#1b1d00",
              fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 24",
            }}
          >
            {playing ? "pause" : "play_arrow"}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-auto"
        style={{
          padding: "0 0 0 0",
          opacity: hovered || !playing ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full relative cursor-pointer"
          style={{ height: "4px", background: "rgba(255,255,255,0.12)" }}
          onClick={handleSeek}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress * 100}%`,
              background: "#e1ed00",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
