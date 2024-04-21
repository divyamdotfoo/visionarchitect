"use client";
import Image from "next/image";
import { useState } from "react";
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
  const [swipeCards, setSwipeCards] = useState(images.slice(0, 3));
  const [index, setIndex] = useState(3);
  const [current, setCurrent] = useState(0);
  const swipeHandler = (id: string, idx: number) => {
    setCurrent((prev) => (prev + 1) % 20);
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

  return (
    <section
      id="hero-mobile-gallery"
      className="h-screen w-80 mx-auto items-center snap-start pt-2"
    >
      <div className="relative">
        <div className=" absolute top-4 left-0 right-0 h-8 bg-primary opacity-30 blur-xl"></div>
        <h2 className=" text-3xl font-bold">Architectural Delights</h2>
      </div>
      <div className=" pt-4 relative h-[calc(100vh-300px)]">
        {swipeCards.map((i, idx) => (
          <div
            key={i.id}
            className=" absolute"
            style={{
              zIndex: images.length * 10 - idx * 10,
            }}
          >
            <TinderCard
              onSwipe={(direction) => {
                swipeHandler(i.id, idx);
              }}
              preventSwipe={["top", "bottom"]}
            >
              <div className=" w-80 h-[calc(100vh-300px)] bg-card rounded-lg flex items-center justify-center cursor-pointer">
                <Image
                  fill
                  alt="jkldfjd"
                  src={dataUrls.get(i.image)?.url!}
                  className=" rounded-lg"
                />
              </div>
            </TinderCard>
          </div>
        ))}
        <div className=" flex items-center gap-[6px] absolute -bottom-10 left-1/2 -translate-x-1/2">
          {images.map((_, i) => (
            <div
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
