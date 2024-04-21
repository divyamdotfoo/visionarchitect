import { ProjectGallery } from "./client/project-gallery";
import fs from "fs/promises";
import { InfiniteMovingCardsHorizontal } from "./ui/InfiniteMovingCard";
export async function Projects() {
  const videos = (await fs.readdir("public/videos")).map((v) => `/videos/${v}`);
  return (
    <section
      id="projects"
      className=" h-screen w-full snap-start md:pt-20 flex items-center justify-center"
    >
      <ProjectGallery videos={videos} />
      <ProjectGalleryMobile videos={videos} />
    </section>
  );
}

export function ProjectGalleryMobile({ videos }: { videos: string[] }) {
  return (
    <div className=" w-full h-full md:hidden bg-card flex flex-col gap-1">
      <InfiniteMovingCardsHorizontal speed="normal" direction="right">
        {videos.slice(0, Math.abs(videos.length / 2)).map((v) => (
          <Temp key={v} />
        ))}
      </InfiniteMovingCardsHorizontal>
      <InfiniteMovingCardsHorizontal speed="normal" direction="left">
        {videos.slice(Math.abs(videos.length / 2)).map((v) => (
          <Temp key={v} />
        ))}
      </InfiniteMovingCardsHorizontal>
    </div>
  );
}

function Temp() {
  return (
    <div className="w-[200px] h-[40vh] m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"></div>
  );
}
function Video({ path }: { path: string }) {
  return (
    <video
      loop
      muted
      className=" w-[200px] h-[40vh] m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"
      autoPlay
      playsInline
    >
      <source src={path} type="video/mp4" />
      Your browser does not support video.
    </video>
  );
}
