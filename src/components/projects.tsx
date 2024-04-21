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
    <div className=" w-full h-full md:hidden flex flex-col gap-1">
      <InfiniteMovingCardsHorizontal
        speed="normal"
        direction="right"
        pauseOnHover={false}
      >
        {videos.slice(0, Math.abs(videos.length / 2)).map((v) => (
          // <Temp key={v} />
          <Video path={v} />
        ))}
      </InfiniteMovingCardsHorizontal>
      <InfiniteMovingCardsHorizontal
        speed="normal"
        direction="left"
        pauseOnHover={false}
      >
        {videos.slice(Math.abs(videos.length / 2)).map((v) => (
          // <Temp key={v} />
          <Video path={v} />
        ))}
      </InfiniteMovingCardsHorizontal>
    </div>
  );
}

function Video({ path }: { path: string }) {
  return (
    <div>
      <video
        loop
        muted
        className=" w-[200px] h-[40vh] m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"
        autoPlay
        playsInline
        preload="metadata"
      >
        <source src={path} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
}

function Temp() {
  return (
    <div className="w-[200px] h-[40vh] bg-primary m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"></div>
  );
}
