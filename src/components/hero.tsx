import React from "react";
import _ from "lodash";
import { HeroHeader } from "./hero-header";
import { HeroImageGallery } from "./hero-gallery";

export function Hero() {
  return (
    <section className="flex gap-10 items-center justify-around p-4 h-screen overflow-hidden snap-center">
      <HeroHeader />
      <HeroImageGallery />
    </section>
  );
}

export function HeroMobile() {}
