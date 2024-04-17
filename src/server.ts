import { readFile, readdir } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const generateUrl = async (slug: string) => {
  const files = (await readdir("public")).filter(
    (path) =>
      path.startsWith(slug) && (path.endsWith("jpg") || path.endsWith("png"))
  );
  const urls = new Map<string, string>();
  for (const path of files) {
    const file = await readFile(`public/${path}`);
    const { base64 } = await getPlaiceholder(file);
    urls.set(path.split(".")[0], base64);
  }
  console.log(urls);
  return urls;
};
