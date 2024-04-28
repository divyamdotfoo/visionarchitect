import Link from "next/link";
import { Instagram, Mail, WhatsApp } from "./icons";
import { Phone } from "lucide-react";
export function HandlesList() {
  return (
    <div className=" flex items-center gap-3">
      <Link
        href={"https://wa.me/917668761558"}
        target="_blank"
        className=" cursor-pointer"
      >
        <WhatsApp />
      </Link>
      <Link
        href={"https://www.instagram.com/vision_architect_"}
        target="_blank"
        className=" cursor-pointer"
      >
        <Instagram />
      </Link>
      <a href="mailto:visionarchitect29@gmail.com" target="_blank">
        <Mail />
      </a>
      <Link href={"tel:+917668761558"}>
        <Phone className=" w-5 h-5" stroke="white" />
      </Link>
    </div>
  );
}
