"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoHero({ src, poster, className }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's fine
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
      
      {!isLoaded && poster && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />

      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
}
