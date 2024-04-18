"use client";
import type { CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DesignCard } from "../design";

export function DesignMobileCarousel() {
  const testImages = [
    { url: "/hero1.jpg", dataUrl: "" },
    { url: "/hero2.jpg", dataUrl: "" },
    { url: "/hero3.jpg", dataUrl: "" },
  ];
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
    <div className=" flex flex-col items-center gap-2 md:hidden">
      <Carousel
        className=" max-w-xs mt-4 flex items-center justify-center"
        setApi={setApi}
      >
        <CarouselContent className="">
          {[1, 2, 3].map((_) => (
            <CarouselItem>
              <DesignCard images={testImages} key={_} header="Space Savy" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            className={`w-2 h-2 rounded-full ${
              current === i + 1 ? "bg-primary" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
