"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";

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

export function NavLink({
  id,
  name,
  styles,
}: {
  id: string;
  name: string;
  styles?: string;
}) {
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
      className={`${
        styles ||
        " text-color hover:text-primary font-medium opacity-90 hover:opacity-100"
      }`}
    >
      {name}
    </button>
  );
}

export function RoughWhatsapp() {
  const el = useRef<HTMLParagraphElement | null>(null);
  const [inView, setView] = useState(false);
  const [rough, setRough] = useState<any>(null);

  const observerFunction: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) setView(true);
    else setView(false);
  };

  useEffect(() => {
    if (!el.current) return;
    const observer = new IntersectionObserver(observerFunction);
    observer.observe(el.current);

    // Create the annotation once
    const annotation = annotate(el.current, {
      type: "circle",
      animate: true,
      color: "white",
      padding: 25,
    });
    setRough(annotation);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (rough) {
      if (inView) {
        setTimeout(() => {
          rough.show();
        }, 200);
      } else {
        rough.hide(); // Assuming you want to hide the annotation when not in view
      }
    }
  }, [inView, rough]); // Depend on inView and rough state

  return (
    <p
      className="text-primary italic text-2xl font-semibold underline absolute bottom-8 right-8"
      ref={el}
    >
      <Link href={"https://wa.me/917668761558"}>
        Chat with us <br />
        on Whatsapp{" "}
        <span>
          <ArrowUpRightIcon className="inline-block" />
        </span>
      </Link>
    </p>
  );
}
