// src/components/ui/YouTubeEmbed.tsx
"use client";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative w-full aspect-video rounded-card overflow-hidden bg-cloud border border-line">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div>
  );
}