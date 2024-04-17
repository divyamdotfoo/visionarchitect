import React from "react";
import { HeroHeader } from "./hero-header";
import { HeroImageGallery } from "./hero-gallery";
import { HeroMobileGallery } from "./client/gallery";

export function Hero({ dataUrls }: { dataUrls: Map<string, string> }) {
  return (
    <section className="md:flex hidden gap-10 items-center justify-around p-4 h-screen overflow-hidden snap-start">
      <HeroHeader />
      <HeroImageGallery dataUrls={dataUrls} />
    </section>
  );
}

export function HeroMobile({ dataUrls }: { dataUrls: Map<string, string> }) {
  return (
    <>
      <section className="md:hidden h-screen flex justify-center snap-start">
        <div className=" max-w-sm px-2">
          <HeroHeader />
        </div>
      </section>
      <HeroMobileGallery dataUrls={dataUrls} />
    </>
  );
}
