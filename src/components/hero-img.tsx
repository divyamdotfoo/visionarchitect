import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export function HeroImageGallery() {
  return (
    <div className=" grid grid-cols-2 gap-x-2 gap-y-6 ">
      {Array.from({ length: 8 })
        .fill(0)
        .map((_, i) => (
          <HeroImage key={i} path={`/hero${i + 1}.jpg`} />
        ))}
    </div>
  );
}

export function HeroImage({ path }: { path: string }) {
  return (
    <div className=" bg-card shadow-sm shadow-secondary w-64 h-96 rounded-xl overflow-hidden">
      <Image
        src={path}
        alt="hero images"
        width={256}
        height={0}
        className=" rounded-xl w-full h-full scale-105"
        objectFit="cover"
      />
    </div>
  );
}
