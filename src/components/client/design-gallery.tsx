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

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    setCount(api.scrollSnapList().length);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className=" flex flex-col items-center gap-2">
      <Carousel
        setApi={setApi}
        className=" max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto pt-4"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {designs.map((d) => (
            <CarouselItem
              key={d.folderName}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <DesignCard
                images={d.images}
                header={d.header}
                description={d.description}
                dataUrl={d.images.get(Array.from(d.images.keys())[0])?.dataUrl!}
                thumbnail={d.images.get(Array.from(d.images.keys())[0])?.url!}
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
