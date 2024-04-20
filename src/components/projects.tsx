import { ProjectGallery } from "./client/project-gallery";
import fs from "fs/promises";
export async function Projects() {
  const videos = (await fs.readdir("public/videos")).map((v) => `/videos/${v}`);
  return (
    <section
      id="projects"
      className=" h-screen w-full snap-start md:pt-20 flex items-center justify-center"
    >
      <ProjectGallery videos={videos} />
    </section>
  );
}

export function ProjectHeader() {
  return (
    <div className=" flex flex-col gap-4 items-start">
      <h2 className="md:text-6xl text-4xl font-medium text-primary">
        Projects
      </h2>
      <h3 className=" opacity-80 font-medium max-w-lg">
        Explore our amazing projects—beautiful homes, buildings, and spaces
        designed with care and passion. Each picture shares a story of
        creativity and practicality, showing our dedication to quality. Dive
        into our work and see the craftsmanship that sets us apart.
      </h3>
    </div>
  );
}
