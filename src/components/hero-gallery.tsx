import Image from "next/image";
import _ from "lodash";
export function HeroImageGallery() {
  return (
    <div className=" max-w-2xl grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-6 relative">
      <div className=" flex flex-col gap-2 animate-autoscrollup ">
        {[1, 2, 3, 4].map((_, i) => (
          <HeroImage path={`/hero${_}.jpg`} key={i} />
        ))}
      </div>
      <div className=" flex flex-col gap-2 animate-autoscrolldown ">
        {[5, 6, 7, 8].map((_, i) => (
          <HeroImage path={`/hero${_}.jpg`} key={i} />
        ))}
      </div>
    </div>
  );
}

export function HeroImage({ path }: { path: string }) {
  return (
    <div className=" bg-card shadow-sm shadow-secondary border-4 border-secondary rounded-xl overflow-hidden xl:w-70">
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
