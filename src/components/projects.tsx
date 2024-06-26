import { ProjectGallery, ProjectGalleryMobile } from "./client/project-gallery";
import fs from "fs/promises";
export async function Projects() {
  const videoSlug = await fs.readdir("public/compressed-videos");
  const compressedVideos = videoSlug.map((v) => ({
    video: `/compressed-videos/${v}`,
    poster: `/poster-images/${v.split(".")[0]}.jpg`,
  }));
  return (
    <>
      <section
        id="projects"
        className="hidden h-screen w-full snap-start md:pt-20 md:flex items-center justify-center"
      >
        <ProjectGallery videos={compressedVideos} />
      </section>
      <ProjectGalleryMobile videos={compressedVideos} />
    </>
  );
}
