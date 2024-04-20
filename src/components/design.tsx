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
      className=" h-screen w-full md:pt-20 pt-4 px-8 snap-start "
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
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" relative rounded-lg overflow-hidden shadow-md shadow-secondary w-80 h-[calc(100vh-300px)] md:h-80">
          <Image
            src={thumbnail}
            width={1500}
            height={1500}
            alt={header}
            className=" w-full h-full rounded-lg grayscale-[0.1] brightness-[0.5]"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={dataUrl}
            loading="lazy"
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
                  width={1500}
                  height={1500}
                  alt={header}
                  className=" w-full h-full scale-105"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={images.get(image)?.dataUrl!}
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
