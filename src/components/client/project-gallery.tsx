"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
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
        preload="metadata"
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
  const [vids, setVids] = useState(videos.slice(0, 3));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    setCount(api.scrollSnapList().length);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      if (vids.length < videos.length) {
        console.log("hello");

        setVids((prevVids) => {
          const nextVideoIndex = prevVids.length;
          if (nextVideoIndex < videos.length) {
            return [...prevVids, videos[nextVideoIndex]];
          } else {
            return prevVids;
          }
        });
      }
    });
  }, [api]);
  useEffect(() => {
    if (window) {
      if (window.innerWidth < 750) setMobile(true);
    }
  }, []);
  if (!isMobile) return null;
  return (
    <section
      id="projects-mobile"
      className=" md:hidden h-screen w-[350px] flex flex-col items-start  gap-4 h-md:gap-8 h-lg:gap-12 mx-auto snap-start pt-4"
    >
      <div className="pt-4">
        <h2 className=" text-3xl font-bold text-primary">Projects</h2>
        <h3 className=" opacity-80 font-medium pt-1">
          Experience our projects in motion, where every video unveils the
          artistry and innovation behind our creations.
        </h3>
      </div>
      <div className="w-[350px] flex justify-center  relative h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)] h-lg:h-[calc(100vh-380px)]">
        <Carousel
          className=" w-full h-full"
          opts={{
            loop: true,
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {vids.map((v) => (
              <CarouselItem key={v.video}>
                <div className=" bg-slate-600 h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)] h-lg:h-[calc(100vh-380px)] w-[350px] rounded-lg">
                  <VideoMobile path={v.video} poster={v.poster} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className=" flex items-center gap-3 self-center">
        {Array.from({ length: videos.length }).map((_, i) => (
          <div
            key={i}
            className={`w-[10px] h-[10px] rounded-full ${
              i + 1 === current ? "bg-primary" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

function VideoMobile({ path, poster }: { path: string; poster: string }) {
  return (
    <div>
      <video
        loop
        muted
        className=" w-full rounded-lg h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)] h-lg:h-[calc(100vh-380px)] m-0 p-0 flex-shrink-0 object-cover"
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
