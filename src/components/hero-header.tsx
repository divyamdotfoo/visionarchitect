import _ from "lodash";
import Link from "next/link";
export function HeroHeader() {
  return (
    <div className="flex flex-col gap-2 lg:max-w-lg md:max-w-md items-start mt-10 md:my-0 col-start-1 col-end-2">
      <Sparkles>
        <h1 className="lg:text-5xl xl:text-6xl md:text-4xl  text-primary font-bold">
          Vision Architects
        </h1>
      </Sparkles>
      <h2 className=" xl:text-xl lg:text-lg md:text-base  translate-x-3 text-color opacity-90 font-semibold">
        From concept to creation.
      </h2>
      <h3 className=" text-wrap xl:text-lg lg:text-base md:text-sm opacity-80 translate-x-3 font-light xl:max-w-sm lg:max-w-xs md:max-w-72">
        Step into the world, where architectural dreams take shape with
        precision. With a focus on contract-based projects, we bring expertise
        and creativity to every blueprint.
      </h3>
      <Link
        href={"#projects"}
        className=" px-4 py-1 font-medium translate-x-3 mt-8 bg-secondary rounded-lg border shadow-sm border-white"
      >
        Know more
      </Link>
    </div>
  );
}

export function Sparkles({ children }: { children: React.ReactNode }) {
  const left = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({ x: _.random(-8, -2) + "%", y: _.random(-20, 120) + "%" }));
  const right = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({ x: _.random(102, 112) + "%", y: _.random(-20, 120) + "%" }));
  const top = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({
      x: _.random(0, 100) + "%",
      y: _.random(-20, -2) + "%",
    }));
  const bottom = Array.from({ length: _.random(1, 4) })
    .fill(0)
    .map(() => ({
      x: _.random(0, 100) + "%",
      y: _.random(102, 122) + "%",
    }));
  const dots = [...left, ...right, ...top, ...bottom].map((d) => ({
    ...d,
    delay: _.random(2.1, 5.2),
  }));
  return (
    <div className=" relative">
      {dots.map((d) => (
        <span
          key={`${d.x}-${d.y}-${d.delay}`}
          className=" w-1 h-1 rounded-full bg-primary absolute animate-sparkle"
          style={{
            top: d.y,
            left: d.x,
            animationDuration: d.delay + "s",
            animationDelay: "0.2s",
          }}
        ></span>
      ))}
      {children}
    </div>
  );
}
