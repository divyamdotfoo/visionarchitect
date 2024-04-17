import Image from "next/image";
import { HandlesList } from "./socials";
export function About({ dataUrls }: { dataUrls: Map<string, string> }) {
  return (
    <div className=" w-full h-screen flex justify-center md:pt-24 px-4 pb-8 pt-2">
      <div className=" md:flex md:items-start md:flex-row gap-10 flex-col">
        <div className=" flex md:flex-col gap-2 items-center">
          <div className=" border-2 border-secondary md:rounded-lg md:min-w-48 md:min-h-72 sm:w-40 sm:min-h-40 w-28 h-28 md:h-auto rounded-full overflow-hidden">
            <Image
              src={"/client-profile.jpg"}
              width={1000}
              height={0}
              className=" w-full h-full rounded-lg md:scale-105 scale-150 translate-y-6 sm:translate-y-8 md:translate-y-0"
              objectFit="cover"
              alt="Profile picture of Ujjwal kapoor(founder of Vision architect)."
              placeholder="blur"
              blurDataURL={dataUrls.get("client-profile") || ""}
            />
          </div>
          <div className="">
            <h2 className=" font-semibold text-lg">Ujjwal Kapoor</h2>
            <h3 className=" text-base opacity-90">BS in Architecture (2018)</h3>
            <div className="md:hidden pt-3">
              <HandlesList />
            </div>
          </div>
          <div className=" hidden md:block">
            <HandlesList />
          </div>
        </div>
        <div className=" max-w-xl tracking-tight opacity-90 pt-4 md:pt-0 flex flex-col gap-2">
          <p>
            Welcome to Vision Architect, founded by{" "}
            <span className=" font-semibold text-primary">Ujjwal Kapoor</span>,
            a visionary architect with a Bachelor of Science degree in
            architecture from 2018. With six years of excellence in the
            industry, Vision Architect is renowned for turning architectural
            visions into stunning realities.
          </p>
          <p>
            Our firm specializes in contract-based projects, where every design
            is crafted with meticulous attention to detail and a deep
            understanding of our clients needs. At Vision Architect, we believe
            in the power of innovative design and sustainable solutions.
          </p>
          <p>
            Our portfolio showcases a diverse range of projects, from
            residential masterpieces to commercial marvels, each reflecting our
            commitment to quality and creativity. Collaborating closely with
            clients, we bring their ideas to life, blending aesthetics with
            functionality seamlessly.
          </p>
          <p>
            Driven by a passion for architecture and a dedication to excellence,
            Vision Architect continues to push boundaries and set new standards
            in the industry. Join us on a journey of architectural innovation
            and unparalleled craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
}
