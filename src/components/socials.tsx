import Link from "next/link";
import { Instagram, Mail, Twitter, WhatsApp } from "./icons";
import { Phone, PhoneIcon } from "lucide-react";
export function HandlesList() {
  return (
    <div className=" flex items-center gap-3">
      <Link
        href={"https://twitter.com/visionarchitect"}
        className=" cursor-pointer"
      >
        <Twitter />
      </Link>
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
      <a href="mailto:divyam7091@gmail.com" target="_blank">
        <Mail />
      </a>
      <Link href={"tel:+918755549338"}>
        <Phone className=" w-5 h-5" stroke="darkblue" />
      </Link>
    </div>
  );
}
