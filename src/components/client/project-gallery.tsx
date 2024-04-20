"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export function ProjectGallery({ videos }: { videos: string[] }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className=" xl:w-[1100px] bg-card xl:h-[500px] overflow-hidden flex items-center justify-center"
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
          transitionBehavior: "ease-in-out",
          transitionDuration: "1s",
        }}
      >
        <div className=" flex gap-1">
          {videos.slice(0, Math.abs(videos.length / 2)).map((v) => (
            <Video path={v} key={v} />
          ))}
        </div>
        <div className=" flex gap-1 mt-2">
          {videos.slice(Math.abs(videos.length / 2)).map((v) => (
            <Video path={v} key={v} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Temp() {
  return (
    <div className=" w-[380px] h-[500px] bg-primary  flex-shrink-0 brightness-75 hover:brightness-110 grayscale-[0.5] hover:grayscale-0"></div>
  );
}
function Video({ path }: { path: string }) {
  return (
    <div className=" w-[380px] h-[500px] flex-shrink-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-full m-0 p-0 flex-shrink-0 object-cover grayscale-[0.5] brightness-50 hover:grayscale-0 hover:brightness-105"
      >
        <source src={path} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}
export function ProjectGalleryMobile() {}
