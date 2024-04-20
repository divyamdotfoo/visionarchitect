"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

export function HeroMobileGallery({
  dataUrls,
}: {
  dataUrls: Map<string, { url: string; dataUrl: string }>;
}) {
  const initialImages = () => Array.from(dataUrls.keys());
  const [images, setImages] = useState(initialImages);
  const onSwipeHandler = () => {
    const allImages = [...images];
    if (allImages.length !== 0) {
      const last = allImages.pop() as string;
      setImages(allImages);
    } else {
      setImages((prev) => initialImages());
    }
  };
  useEffect(() => {
    if (images.length === 0) {
      setImages(initialImages());
    }
  }, [images]);
  return (
    <section
      id="hero-mobile-gallery"
      className="md:hidden h-screen relative flex justify-center snap-start pt-8"
    >
      <div className=" relative">
        <div className=" absolute top-4 left-0 right-0 h-8 bg-primary opacity-20 blur-xl"></div>
        <h2 className=" text-3xl font-bold">Architectural Delights</h2>
      </div>
      {images.map((_, i) => (
        <TinderCard
          key={_}
          flickOnSwipe={true}
          swipeRequirementType="position"
          swipeThreshold={80}
          className="absolute top-24"
          onSwipe={(direction) => onSwipeHandler()}
          onCardLeftScreen={(direction) => onSwipeHandler()}
        >
          <div
            className="sm:w-[512px] w-[320px] mx-4  rounded-lg border-2 border-secondary overflow-hidden shadow-md shadow-secondary"
            style={{
              zIndex: images.length - i,
              height: "calc(100vh - 350px)",
            }}
          >
            <Image
              src={dataUrls.get(_)?.url!}
              alt="gallery image"
              width={1500}
              height={1500}
              className=" w-full h-full scale-105 rounded-lg"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={dataUrls.get(_)?.dataUrl!}
              loading="lazy"
            />
          </div>
        </TinderCard>
      ))}
    </section>
  );
}
