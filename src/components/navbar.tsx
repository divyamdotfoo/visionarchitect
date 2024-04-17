import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
export function Navbar() {
  return (
    <div className="hidden md:flex items-center justify-between lg:px-8 py-3 bg-background text-color fixed top-0 left-0 right-0 z-40 ">
      <Link href={"/"} className=" text-2xl text-primary">
        <Image
          src={"/logo.png"}
          width={60}
          height={40}
          alt="Vision architect logo"
        />
      </Link>
      <div className=" flex items-center justify-between gap-8">
        <NavLink path="/designs" name="Designs" />
        <NavLink path="/projects" name="Projects" />
        <NavLink path="/customers" name="Customers" />
        <NavLink path="/about" name="About" />
      </div>
      <Link
        href={""}
        className=" bg-primary text-background px-4 py-1 rounded-3xl animate-alert font-semibold "
      >
        Contact us
      </Link>
    </div>
  );
}

function NavLink({ path, name }: { path: string; name: string }) {
  return (
    <Link
      href={path}
      className=" text-color hover:text-primary font-medium opacity-90 hover:opacity-100"
    >
      {name}
    </Link>
  );
}

export function NavbarMobile() {
  return (
    <div className=" flex items-center justify-between py-2 pl-4 pr-2 md:hidden">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Vision architect branding logo"
          width={60}
          height={60}
        />
      </Link>
      <div className=" flex items-center gap-4">
        <Link
          href={""}
          className=" bg-primary text-background px-4 py-1 text-lg rounded-3xl animate-alert font-medium"
        >
          Contact us
        </Link>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export function HamburgerMenu() {
  const hamLinks = [
    { name: "Designs", path: "/designs" },
    { name: "Projects", path: "/projects" },
    { name: "Customers", path: "/customers" },
    { name: "About", path: "/about" },
  ];
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <MenuIcon className=" w-10 h-10 translate-y-1" />
          </button>
        </SheetTrigger>
        <SheetContent className="">
          <div className=" flex items-start flex-col gap-6 w-full">
            <div className=" flex items-start flex-col gap-1">
              <h2 className=" text-2xl font-extrabold text-primary">
                Vision Architect
              </h2>
              <h3 className="font-medium opacity-70 text-color">
                From concept to creation.
              </h3>
            </div>
            <div className=" flex flex-col items-start gap-4 w-full">
              {hamLinks.map((l, i) => (
                <HamLink
                  key={i}
                  name={l.name}
                  path={l.path}
                  separator={i === hamLinks.length - 1 ? false : true}
                />
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function HamLink({
  separator,
  path,
  name,
}: {
  separator: boolean;
  path: string;
  name: string;
}) {
  return (
    <div className=" w-full">
      <Link
        href={path}
        className=" text-xl block mb-4 text-color hover:text-primary font-medium"
      >
        {name}
      </Link>

      {separator ? <Separator className=" w-full bg-white" /> : null}
    </div>
  );
}
