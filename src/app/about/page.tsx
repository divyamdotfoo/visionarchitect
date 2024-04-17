import { About } from "@/components/about";
import { generateUrl } from "@/server";

export default async function Page() {
  const urls = await generateUrl("client-profile");
  return <About dataUrls={urls} />;
}
