import { ConditionalWrapper } from "@/components/client/wrapper";
import { ContactUs } from "@/components/contact-us";
import { Design, Designs } from "@/components/design";
import { Hero, HeroMobile } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SpotLight } from "@/components/spotlight";
import { generateUrls } from "@/server";
export default async function Page() {
  const designDescriptions: Omit<Designs[number], "images">[] = [
    {
      header: "1200sqft Home",
      description: "Some description",
      folderName: "design1",
    },
    {
      header: "Holiday Home",
      description: "Some description",
      folderName: "design2",
    },
    {
      header: "Dining Area",
      description: "Some description",
      folderName: "dining",
    },
  ];
  const slugs = ["hero", "contact-us"];
  const promises = slugs
    .concat(designDescriptions.map((d) => d.folderName))
    .map((_) => generateUrls(_));
  const urls = await Promise.all(promises);
  const designs: Designs = designDescriptions.map((d, i) => ({
    ...d,
    images: urls[i + slugs.length],
  }));

  return (
    <div className="relative h-screen overflow-y-scroll snap-mandatory snap-y">
      <SpotLight />
      <Hero dataUrls={urls[0]} />
      <HeroMobile dataUrls={urls[0]} />
      <Design designs={designs} />
      <Projects />
      <ContactUs images={urls[1]} />
    </div>
  );
}
