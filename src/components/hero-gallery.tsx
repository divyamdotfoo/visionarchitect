import Image from "next/image";
import _ from "lodash";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
export function HeroImageGallery({
  dataUrls,
}: {
  dataUrls: Map<string, { url: string; dataUrl: string }>;
}) {
  const images = Array.from(dataUrls.keys());
  return (
    <div className=" lg:max-w-2xl md:max-w-sm grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-6 relative">
      <InfiniteMovingCards direction="right" speed="normal" pauseOnHover={true}>
        {images.slice(0, Math.abs(images.length / 2)).map((_, i) => (
          <li key={_}>
            <HeroImage
              path={dataUrls.get(_)?.url!}
              dataUrl={dataUrls.get(_)?.dataUrl!}
            />
          </li>
        ))}
      </InfiniteMovingCards>
      <InfiniteMovingCards direction="left" speed="normal" pauseOnHover={true}>
        {images.slice(Math.abs(images.length / 2)).map((_, i) => (
          <li key={_}>
            <HeroImage
              path={dataUrls.get(_)?.url!}
              dataUrl={dataUrls.get(_)?.dataUrl!}
            />
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}

export function HeroImage({
  path,
  dataUrl,
}: {
  path: string;
  dataUrl: string;
}) {
  return (
    <div className=" bg-card shadow-sm shadow-secondary border-4 border-secondary rounded-xl overflow-hidden lg:min-w-[324px]">
      <Image
        src={path}
        alt="hero images"
        width={1500}
        height={1500}
        className=" rounded-xl w-full h-full scale-105"
        objectFit="cover"
        blurDataURL={dataUrl}
        placeholder="blur"
        loading="lazy"
      />
    </div>
  );
}
