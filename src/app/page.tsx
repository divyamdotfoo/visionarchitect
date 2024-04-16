import { Design } from "@/components/design";
import { Hero } from "@/components/hero";
import { SpotLight } from "@/components/spotlight";

export default function Page() {
  return (
    <div className=" snap-y snap-proximity relative pt-14">
      <SpotLight />
      <Hero />
      <Design />
    </div>
  );
}
