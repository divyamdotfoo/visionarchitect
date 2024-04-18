"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export function ProjectGallery() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="hidden sm:block overflow-hidden md:w-[750px] lg:w-[900px] mx-2 h-full bg-card mb-10"
      onMouseMove={(e) =>
        setPos({
          x: e.clientX - e.currentTarget.getBoundingClientRect().left,
          y: e.clientY - e.currentTarget.getBoundingClientRect().top,
        })
      }
    >
      <div className="w-full h-full flex flex-col gap-4" style={{}}>
        {Array.from({ length: 3 })
          .map(() =>
            Array.from({ length: 5 }).map((_, i) => `/hero${i + 1}.jpg`)
          )
          .map((images, i) => (
            <div
              className=" flex items-center justify-center gap-4 flex-nowrap"
              style={{
                transform: `translate(${pos.x - 500}px,${pos.y - 500}px)`,
                transition: "ease-in",
                transitionDuration: "500ms",
              }}
            >
              {images.map((image) => (
                <div
                  className=" overflow-hidden h-72"
                  style={{ flex: "0 0 auto" }}
                >
                  <Image
                    src={image}
                    alt="image"
                    width={1500}
                    height={1500}
                    className=" w-full h-full scale-105 brightness-[0.4] hover:brightness-125 transition-all"
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export function ProjectGalleryMobile() {}
