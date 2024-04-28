import Image from "next/image";
import { HandlesList } from "./socials";
import ClientProfile from "../../public/client-profile.jpg";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
const playfair = Playfair_Display({ subsets: ["latin"] });
export function About() {
  return (
    <div className=" w-full h-screen flex justify-center md:pt-24 px-4 pb-8 pt-2">
      <div className=" md:flex md:items-start md:flex-row gap-10 flex-col">
        <div className=" flex md:flex-col md:gap-2 gap-4 items-center md:max-w-[300px]">
          <div className="md:rounded-lg rounded-full md:w-[200px] md:h-auto w-32 h-32 overflow-hidden">
            <Image
              src={ClientProfile}
              className=" md:rounded-lg scale-105 rounded-full "
              objectFit="cover"
              alt="Profile picture of Ujjwal kapoor(founder of Vision architect)."
              placeholder="blur"
              loading="eager"
            />
          </div>
          <div className=" flex-col md:items-center items-start flex">
            <h2 className={cn("font-semibold text-xl", playfair.className)}>
              Ar. Ujjwal Kapoor
            </h2>
            <h3 className=" text-base opacity-90 tracking-tight">
              Bachelors in Architecture
            </h3>
            <div className="pt-2">
              <HandlesList />
            </div>
          </div>
        </div>
        <div className=" max-w-xl tracking-tight opacity-90 pt-4 md:pt-0 flex flex-col gap-2">
          <p>
            Welcome to Vision Architect, founded by <br className="sm:hidden" />
            <span className=" font-semibold text-primary">
              Ar. Ujjwal Kapoor
            </span>
            , a visionary architect with a Bachelor of Science degree in
            architecture from 2018. With six years of excellence in the
            industry, Vision Architect is renowned for turning architectural
            visions into stunning realities.
          </p>
          <p>
            Our firm specializes in contract-based projects, where every design
            is crafted with meticulous attention to detail and a deep
            understanding of our clients' needs. At Vision Architect, we believe
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
