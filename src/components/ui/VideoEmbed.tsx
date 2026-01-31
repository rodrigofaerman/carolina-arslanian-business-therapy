"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface VideoEmbedProps {
  url?: string;
  placeholder?: string;
  aspectRatio?: string;
  title?: string;
  className?: string;
}

function getEmbedUrl(url: string): string | null {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return null;
}

export default function VideoEmbed({
  url,
  placeholder = "Vídeo em breve",
  aspectRatio = "16/9",
  title = "Video",
  className = "",
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = url ? getEmbedUrl(url) : null;

  // Placeholder card when no URL
  if (!embedUrl) {
    return (
      <div
        className={`relative glass-card rounded-[var(--radius-card)] overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Play button placeholder */}
          <motion.div
            className="w-20 h-20 rounded-full bg-[var(--color-accent)]/20 border-2 border-[var(--color-accent)] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              className="w-8 h-8 text-[var(--color-accent)] ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>

          <p className="text-[var(--color-text-muted)]">{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-bg-secondary)] ${className}`}
      style={{ aspectRatio }}
    >
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 border-4 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={embedUrl}
        title={title}
        className={`absolute inset-0 w-full h-full ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
