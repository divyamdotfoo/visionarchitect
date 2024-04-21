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
      header: "Bedrooms",
      description: "Cozy sleep retreats",
      folderName: "bedrooms",
    },
    {
      header: "Dining Delights",
      description: "Feast in comfortable elegance",
      folderName: "dining",
    },
    {
      header: "Living Rooms",
      description: "Relax in stylish comfort",
      folderName: "living-rooms",
    },
    {
      header: "Kitchen Elegance",
      description: "Gourmet delights begin here",
      folderName: "kitchen",
    },
    {
      header: "Terrace Tranquility",
      description: "Embrace outdoor serenity",
      folderName: "terrace",
    },
    {
      header: "Home Office",
      description: "Productivity in comfort mode",
      folderName: "office",
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
