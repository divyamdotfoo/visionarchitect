import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

export function Design() {
  const testImages = [
    { url: "/hero1.jpg", dataUrl: "" },
    { url: "/hero2.jpg", dataUrl: "" },
    { url: "/hero3.jpg", dataUrl: "" },
  ];
  return (
    <section
      id="designs"
      className=" h-screen  w-full md:pt-20 pt-4 px-8 snap-start "
    >
      <h2 className=" md:text-6xl text-4xl font-medium text-primary">
        Designs
      </h2>
      <h3 className=" opacity-80 font-bold  pt-2">
        Where Imagination Meets Precision: Explore Our Signature Designs.
      </h3>
      <div className=" md:grid-cols-3 grid-cols-1 gap-4 pt-4 grid xl:gap-20 lg:gap-16 xl:pt-12 lg:pt-8 md:pt-6 md:gap-12">
        {[1, 2, 3].map(() => (
          <DesignCard images={testImages} header="Space Savy" />
        ))}
      </div>
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
  thumbnail?: string;
  dataUrl?: string;
  header?: string;
  description?: string;
  images?: { url: string; dataUrl: string }[];
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className=" w-full opacity-30 xl:h-96 lg:h-80 md:h-64 rounded-lg border-2 border-secondary shadow-lg shadow-secondary"
          style={{
            height: "calc(100vh - 300px)",
          }}
        ></div>
      </DialogTrigger>
      <DialogContent className=" border-none flex flex-col gap-2 items-center justify-center py-2">
        <p className=" text-xl font-medium ">{header}</p>
        <Carousel className=" lg:max-w-sm md:max-w-xs">
          <CarouselContent className="">
            {images?.map((image) => (
              <CarouselItem className=" overflow-hidden">
                <Image
                  src={image.url}
                  width={1500}
                  height={1500}
                  alt="hero image"
                  className=" w-full h-full scale-105"
                  objectFit="cover"
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
