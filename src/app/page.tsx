import { Design } from "@/components/design";
import { Hero, HeroMobile } from "@/components/hero";
import { SpotLight } from "@/components/spotlight";
import { generateUrl } from "@/server";
export default async function Page() {
  const dataUrls = await generateUrl("hero");
  return (
    <div className=" snap-y snap-proximity relative pt-14">
      <SpotLight />
      <Hero dataUrls={dataUrls} />
      <HeroMobile dataUrls={dataUrls} />
      <Design />
    </div>
  );
}
