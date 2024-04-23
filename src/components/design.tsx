import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { DesignCarousel } from "./client/design-gallery";

export type Designs = {
  folderName: string;
  header: string;
  description: string;
  images: Map<string, { url: string; dataUrl: string }>;
}[];
export function Design({ designs }: { designs: Designs }) {
  return (
    <section
      id="designs"
      className=" h-screen md:w-full md:pt-20 pt-4 w-[360px] mx-auto snap-start "
    >
      <div className=" flex flex-col gap-2 max-w-xs lg:max-w-5xl xl:max-w-5xl mx-auto">
        <h2 className=" md:text-6xl text-4xl font-medium text-primary">
          Designs
        </h2>
        <h3 className=" opacity-80 font-medium">
          Where Imagination Meets Precision: Explore Our Signature Designs.
        </h3>
      </div>
      <DesignCarousel designs={designs} />
    </section>
  );
}

export function DesignCard({
  thumbnail,
  dataUrl,
  header,
  description,
  images,
  loadThumbnailEager,
}: {
  thumbnail: string;
  dataUrl: string;
  header: string;
  description: string;
  images: Map<
    string,
    {
      url: string;
      dataUrl: string;
    }
  >;
  loadThumbnailEager: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" relative rounded-lg overflow-hidden shadow-md shadow-secondary w-80 h-sm:h-[calc(100vh-310px)] h-md:h-[calc(100vh-360px)] h-lg:h-[calc(100vh-380px)] md:h-[320px!important]">
          <Image
            src={thumbnail}
            width={384}
            height={640}
            alt={header}
            className=" w-full h-full rounded-lg grayscale-[0.2] hover:grayscale-[0] brightness-[0.5] hover:brightness-[0.8] transition-all"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={dataUrl}
            loading={loadThumbnailEager ? "eager" : "lazy"}
            sizes="(max-width: 400px) 100vw, 400px"
          />
          <div className="flex absolute bottom-2 left-2 z-30 flex-col items-start">
            <p className=" text-2xl font-bold text-primary">{header}</p>
            <p className=" font-medium text-sm">{description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className=" border-none flex flex-col gap-2 items-center justify-center py-2">
        <p className=" text-xl font-medium ">{header}</p>
        <Carousel className=" lg:max-w-sm md:max-w-xs max-w-64">
          <CarouselContent className="">
            {Array.from(images.keys()).map((image) => (
              <CarouselItem key={header} className=" overflow-hidden">
                <Image
                  src={images.get(image)?.url!}
                  width={324}
                  height={180}
                  alt={header}
                  className=" w-full h-full scale-105"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={images.get(image)?.dataUrl!}
                  sizes="(max-width: 400px) 100vw, 400px"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
