"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function KnowMoreBtn() {
  const [designElement, setElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!document) return;
    setElement(document.getElementById("designs"));
  }, []);
  return (
    <button
      onClick={(e) => {
        if (!designElement) return;
        designElement.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="hidden md:block px-4 py-1 font-medium translate-x-3 mt-8 bg-secondary rounded-lg border shadow-sm border-white"
    >
      Know more
    </button>
  );
}

export function NavLink({ id, name }: { id: string; name: string }) {
  const [section, setSection] = useState<HTMLElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!document) return;
    setSection(document.getElementById(id));
  }, [pathname]);
  return (
    <button
      onClick={(e) => {
        if (!section) {
          router.push(`/#${id}`);
          return;
        }
        section.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className=" text-color hover:text-primary font-medium opacity-90 hover:opacity-100"
    >
      {name}
    </button>
  );
}
