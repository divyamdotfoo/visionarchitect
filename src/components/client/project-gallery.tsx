"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InfiniteMovingCardsHorizontal } from "../ui/InfiniteMovingCard";
export function ProjectGallery({
  videos,
}: {
  videos: { video: string; poster: string }[];
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setMobile] = useState(true);
  useEffect(() => {
    if (window) {
      if (window.innerWidth > 768) setMobile(false);
    }
  }, []);
  if (isMobile) return null;
  return (
    <div
      className=" hidden relative md:flex xl:w-[1100px] lg:w-[800px] bg-card xl:h-[500px] lg:h-[400px] overflow-hidden items-center justify-center"
      onMouseMove={(e) => {
        const newX = e.clientX - e.currentTarget.getBoundingClientRect().left;
        const newY = e.clientY - e.currentTarget.getBoundingClientRect().top;
        setPos({
          x:
            550 - newX < 0
              ? Math.max(550 - newX, -220)
              : Math.min(550 - newX, 220),
          y:
            250 - newY < 0
              ? Math.max(250 - newY, -205)
              : Math.min(250 - newY, 205),
        });
      }}
      onMouseLeave={(e) => {
        setPos({ x: 0, y: 0 });
      }}
    >
      <div
        className=""
        style={{
          transform: `translate(${pos.x}px,${pos.y}px)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
          transitionBehavior: "ease-out",
          transitionDuration: "1s",
        }}
      >
        <div className=" flex gap-1">
          {videos.slice(0, Math.abs(videos.length / 2)).map((v) => (
            <Video path={v.video} key={v.video} poster={v.poster} />
          ))}
        </div>
        <div className=" flex gap-1 mt-2">
          {videos.slice(Math.abs(videos.length / 2)).map((v) => (
            <Video path={v.video} key={v.video} poster={v.poster} />
          ))}
        </div>
      </div>
      <p className=" absolute z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold opacity-50 grayscale-[0.5] hover:grayscale-[0] hover:opacity-80 transition-all">
        Projects
      </p>
    </div>
  );
}

function Video({ path, poster }: { path: string; poster: string }) {
  return (
    <div
      className=" xl:w-[380px] xl:h-[500px] lg:w-[300px] lg:h-[400px] flex-shrink-0"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-full m-0 p-0 flex-shrink-0 object-cover grayscale-[0.5] brightness-50 hover:grayscale-0 hover:brightness-105"
        poster={poster}
      >
        <source src={path} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}

export function ProjectGalleryMobile({
  videos,
}: {
  videos: { video: string; poster: string }[];
}) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window) {
      if (window.innerWidth < 750) setMobile(true);
    }
  }, []);
  if (!isMobile) return null;
  3;
  return null;
}

function VideoMobile({ path, poster }: { path: string; poster: string }) {
  return (
    <div>
      <video
        loop
        muted
        className=" w-[200px] h-[40vh] m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"
        autoPlay
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={path} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}
