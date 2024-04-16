import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className=" flex items-center justify-between lg:px-8 py-3 bg-background text-color sticky top-0 left-0 z-40 ">
      <Link href={"#"} className=" text-2xl text-primary">
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
        className=" bg-primary text-background px-4 py-1 rounded-3xl animate-alert"
      >
        Contact us
      </Link>
    </div>
  );
}

function NavLink({ path, name }: { path: string; name: string }) {
  return (
    <Link href={path} className=" text-color hover:text-primary">
      {name}
    </Link>
  );
}
