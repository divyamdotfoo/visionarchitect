import React from "react";
import _ from "lodash";
import { HeroImageGallery } from "./hero-img";
export default function Hero() {
  return (
    // todo: gradient for hero page
    // todo: image gallery
    <div className="grid grid-cols-2 p-4">
      <div className=" flex flex-col items-center self-start translate-y-40">
        <Sparkles>
          <h1 className=" text-6xl text-primary font-bold">Vision Architect</h1>
        </Sparkles>
        <h2 className=" text-xl opacity-80 font-bold">
          From concept to creation.
        </h2>
      </div>
      <div className="p-4">
        <HeroImageGallery />
      </div>
    </div>
  );
}

export function Sparkles({ children }: { children: React.ReactNode }) {
  const left = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({ x: _.random(-8, -2) + "%", y: _.random(-20, 120) + "%" }));
  const right = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({ x: _.random(102, 112) + "%", y: _.random(-20, 120) + "%" }));
  const top = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({
      x: _.random(0, 100) + "%",
      y: _.random(-20, -2) + "%",
    }));
  const bottom = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({
      x: _.random(0, 100) + "%",
      y: _.random(102, 122) + "%",
    }));
  const dots = [...left, ...right, ...top, ...bottom].map((d) => ({
    ...d,
    delay: _.random(2.1, 5.2),
  }));
  return (
    <div className=" relative">
      {dots.map((d) => (
        <span
          key={`${d.x}-${d.y}-${d.delay}`}
          className=" w-1 h-1 rounded-full bg-primary absolute animate-sparkle"
          style={{
            top: d.y,
            left: d.x,
            animationDuration: d.delay + "s",
            animationDelay: "0.2s",
          }}
        ></span>
      ))}
      {children}
    </div>
  );
}
