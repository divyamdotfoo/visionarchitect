import { ProjectGallery } from "./client/project-gallery";
import fs from "fs/promises";
import { InfiniteMovingCardsHorizontal } from "./ui/InfiniteMovingCard";
export async function Projects() {
  const videoSlug = await fs.readdir("public/compressed-videos");
  const fullScaleVideos = videoSlug.map((v) => `/videos/${v}`);
  const compressedVideos = videoSlug.map((v) => ({
    video: `/compressed-videos/${v}`,
    poster: `/poster-images/${v.split(".")[0]}.jpg`,
  }));
  return (
    <section
      id="projects"
      className=" h-screen w-full snap-start md:pt-20 flex items-center justify-center"
    >
      <ProjectGallery videos={fullScaleVideos} />
      <ProjectGalleryMobile videos={compressedVideos} />
    </section>
  );
}

export function ProjectGalleryMobile({
  videos,
}: {
  videos: { video: string; poster: string }[];
}) {
  return (
    <div className=" w-full h-full md:hidden flex flex-col gap-1">
      <InfiniteMovingCardsHorizontal
        speed="normal"
        direction="right"
        pauseOnHover={false}
      >
        {videos.slice(0, Math.abs(videos.length / 2)).map((v) => (
          // <Temp key={v} />
          <li key={v.video}>
            <Video path={v.video} poster={v.poster} />
          </li>
        ))}
      </InfiniteMovingCardsHorizontal>
      <InfiniteMovingCardsHorizontal
        speed="normal"
        direction="left"
        pauseOnHover={false}
      >
        {videos.slice(Math.abs(videos.length / 2)).map((v) => (
          // <Temp key={v} />
          <li key={v.video}>
            <Video path={v.video} poster={v.poster} />
          </li>
        ))}
      </InfiniteMovingCardsHorizontal>
    </div>
  );
}

function Video({ path, poster }: { path: string; poster: string }) {
  return (
    <div>
      <video
        loop
        muted
        className=" w-[200px] h-[40vh] m-0 p-0 flex-shrink-0 grayscale-[0.3] object-cover"
        autoPlay
        playsInline
        preload="metadata"
        poster={poster}
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
