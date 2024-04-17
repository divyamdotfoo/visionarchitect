import Image from "next/image";
import _ from "lodash";
export function HeroImageGallery({
  dataUrls,
}: {
  dataUrls: Map<string, string>;
}) {
  return (
    <div className=" lg:max-w-2xl md:max-w-sm grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-6 relative">
      <div className=" flex flex-col gap-2 animate-autoscrollup ">
        {[1, 2, 3, 4].map((_, i) => (
          <HeroImage
            path={`/hero${_}.jpg`}
            key={i}
            dataUrl={dataUrls.get(`hero${_}`) || ""}
          />
        ))}
      </div>
      <div className=" flex flex-col gap-2 animate-autoscrolldown ">
        {[5, 6, 7, 8].map((_, i) => (
          <HeroImage
            path={`/hero${_}.jpg`}
            key={i}
            dataUrl={dataUrls.get(`hero${_}`) || ""}
          />
        ))}
      </div>
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
      />
    </div>
  );
}
