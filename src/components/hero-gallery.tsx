import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
export function HeroImageGallery() {
  const dataUrls = new Map([
    [
      "Copy of 111",
      {
        url: "/hero/Copy of 111.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AIF1Z6STgrmpmZx/XwCpq6L/9uPey7YkAQAAhH9pm4t5bV9NSzokAE5BMGldTkk9MWpdTJpJFkgCf08LAAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of 23-05",
      {
        url: "/hero/Copy of 23-05.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/APXu4v/569zPw+/k0wBsZmCdjX9zUTPUyroAYFtTV01CGQAAYl1RAOXg1tbOxX97dDMtJSWhGvs38p86AAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of akshay bed2",
      {
        url: "/hero/Copy of akshay bed2.r3(1).jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AOvi0P/+7Pfs2vfq2QC0qZTAtqXUy75PPCoAjX9lYlZGDwUANCgWD3oVEQg9Y8AAAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of AKSHAY LIVING ROOM r4",
      {
        url: "/hero/Copy of AKSHAY LIVING ROOM r4.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AP/60vrhv//qyP/72AB6Z0yzmnyqkXbo0LIAs5RvUEErFgAAKBwOAsYU1Itdr00AAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of harmeet ji r6",
      {
        url: "/hero/Copy of harmeet ji r6.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNQ4WCYUpf1/+eLuf3NDI1FyRXZsdG+dkLMDAzPrh48vn3F0imtJanhAEYHEVmQisCPAAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of hema home  kitchen r1",
      {
        url: "/hero/Copy of hema home  kitchen r1.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AO3m4fn39pSSjSoXAAAxKyQoJCApIxyZi30ABgAAPDg1sKqlyMLAS+EPfFvNjboAAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of hema home  kitchen r2(1)",
      {
        url: "/hero/Copy of hema home  kitchen r2(1).jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4//vVm8c3bt68oyotw9Cc6mgozxoaFsPHzMZgrSdvqC5nrqsuwccGAGLIDMeCCg6iAAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of hemaji elevation",
      {
        url: "/hero/Copy of hemaji elevation.r3.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nGM4c/VKSVNTfVvnv3+/GPRtzGSUlWNjwxtaihkY2BlsnNzCwoLE5PkZhBQ1xaTkDAz0VLT1ABzZD7/JWuPKAAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of mr",
      {
        url: "/hero/Copy of mr.dhiraj ji ex.r3 ps.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AOX6/8PK2oGGmYy1+ADS1Ne9urWTi4Z6jJQAT1hpRUhVDwAKZmVr4DgURx/9sZ0AAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of Mr",
      {
        url: "/hero/Copy of Mr.Ramana Mandir 3D design r1ps2.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nGP4/+3ZszNbn53Z+v/TQ4Y1U5udtMVd9aVWTmpkaClMkGFgUGACMRhKEoPj/e1iPK1KEoMBx6QWEbZ56g0AAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of rashmi terrace",
      {
        url: "/hero/Copy of rashmi terrace.R8(1).jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4+e//rcefX338v2XTAQZpISEBTg5zA6PO4kwA3KINBRrkdtEAAAAASUVORK5CYII=",
      },
    ],
    [
      "Copy of vikrantji terrace design r6ps",
      {
        url: "/hero/Copy of vikrantji terrace design r6ps.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4+/q/lqKpmrKNpXUSw9rZK46sWRLqFcjNocQwpbHx/9fXhqqqQgwMAD07Du5gddPqAAAAAElFTkSuQmCC",
      },
    ],
    [
      "Copy of vivek ji office cabin r2",
      {
        url: "/hero/Copy of vivek ji office cabin r2.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AK+UcP/47+va0XddSwCyqJ+wqqqglIqVeGUAEAcEJRgQVUdAhnx3q+0SOVoeP0MAAAAASUVORK5CYII=",
      },
    ],
    [
      "hero5",
      {
        url: "/hero/hero5.jpg",
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AKurrcK+u2tmYgD9+/n/+vWloZ8A5t7ctJ2OeGxgAH9xaqqQeQ8AAPUPFhVAZYVqAAAAAElFTkSuQmCC",
      },
    ],
  ]);
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
    <div className=" bg-card h-[256px] shadow-sm shadow-secondary border-4 border-secondary rounded-xl overflow-hidden lg:min-w-[324px]">
      <Image
        src={path}
        alt="hero images"
        width={384}
        height={640}
        className=" rounded-xl w-full h-full scale-[1.03]"
        objectFit="cover"
        blurDataURL={dataUrl}
        placeholder="blur"
        loading="lazy"
        sizes="(max-width: 400px) 100vw, 400px"
        quality={70}
      />
    </div>
  );
}
