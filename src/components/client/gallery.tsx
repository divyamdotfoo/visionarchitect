"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { nanoid } from "nanoid";

export function HeroMobileGallery({
  dataUrls,
}: {
  dataUrls: Map<string, { url: string; dataUrl: string }>;
}) {
  const images = Array.from(dataUrls.keys()).map((_) => ({
    image: _,
    id: nanoid(5),
  }));
  const [swipeCards, setSwipeCards] = useState(images.slice(0, 2));
  const [index, setIndex] = useState(3);
  const [current, setCurrent] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const swipeHandler = (id: string, idx: number) => {
    setCurrent((prev) => ((prev + 1) % images.length) - 1);
    const card = swipeCards.find((card) => card?.id === id)!;
    const clonedCard: (typeof images)[number] = {
      image: card.image,
      id: nanoid(5),
    };
    const oldCards = [...swipeCards];
    const newCards = [...oldCards.filter((c) => c.id !== id), clonedCard];
    if (index < images.length) {
      const newCard = images.slice(index, index + 1)[0];
      setIndex((prev) => prev + 1);
      newCards.splice(2, 0, newCard);
    }
    setSwipeCards(newCards);
  };
  useEffect(() => {
    if (window) {
      if (window.innerWidth < 768) setMobile(true);
    }
  }, []);
  if (!isMobile) return null;
  return (
    <section
      id="hero-mobile-gallery"
      className=" md:hidden h-screen w-[360px] flex flex-col items-start  gap-4 h-md:gap-8 h-lg:gap-12 mx-auto snap-start pt-4"
    >
      <div className="relative pt-4">
        <h2 className=" text-3xl font-bold text-primary">
          Architectural Delights
        </h2>
        <h3 className=" opacity-80 font-medium pt-1">
          Explore the beauty of architectural wonders <br /> in every frame.
        </h3>
      </div>
      <div className="w-[360px] flex justify-center  relative h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)] h-lg:h-[calc(100vh-380px)]">
        {swipeCards.map((i, idx) => (
          <div
            key={i.id}
            className=" absolute"
            style={{
              zIndex: images.length * 5 - idx * 5,
            }}
          >
            <TinderCard
              onSwipe={(direction) => {
                swipeHandler(i.id, idx);
              }}
              preventSwipe={["top", "bottom"]}
            >
              <div className=" w-[350px] h-lg:h-[calc(100vh-380px)] h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)]  bg-card rounded-lg flex items-center justify-center cursor-pointer">
                <Image
                  alt="Images of architecture designs"
                  src={dataUrls.get(i.image)?.url!}
                  blurDataURL={dataUrls.get(i.image)?.dataUrl!}
                  placeholder="blur"
                  className=" rounded-lg h-full w-full brightness-110"
                  loading="eager"
                  width={384}
                  height={640}
                  sizes="(max-width: 400px) 100vw, 400px"
                />
              </div>
            </TinderCard>
          </div>
        ))}
        <div className=" flex items-center self-center gap-[6px] absolute -bottom-10 left-1/2 -translate-x-1/2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                current === i ? "bg-primary" : " bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
