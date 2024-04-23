"use client";
import type { CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DesignCard, Designs } from "../design";

export function DesignCarousel({ designs }: { designs: Designs }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  console.log(designs);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    setCount(api.scrollSnapList().length);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className=" flex flex-col items-center gap-4">
      <Carousel
        setApi={setApi}
        className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto h-sm:pt-4 h-md:pt-8 md:pt-[16px!important]"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {designs.map((d, i) => (
            <CarouselItem
              key={d.folderName}
              className="md:basis-1/2 xl:basis-1/3"
            >
              <DesignCard
                images={d.images}
                header={d.header}
                description={d.description}
                dataUrl={
                  d.images.get(Array.from(d.images.keys()).reverse()[0])
                    ?.dataUrl!
                }
                thumbnail={
                  d.images.get(Array.from(d.images.keys()).reverse()[0])?.url!
                }
                loadThumbnailEager={i < 3 ? true : false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" invisible md:visible" />
        <CarouselNext className=" invisible md:visible" />
      </Carousel>
      <div className=" flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i + 1 === current ? "bg-primary" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
