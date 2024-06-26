import { exec, execSync } from "node:child_process";
import path from "path";
import fs from "fs/promises";
import { readdirSync } from "node:fs";

async function main() {
  try {
    const videos = await fs.readdir("public/videos"); // Assuming you want to read from a "videos" directory
    const getVidPath = (vidName) => path.join("public", "videos", vidName);
    const getOutputPath = (vidName) =>
      path.join("public", "compressed-videos", vidName);
    const getPosterPath = (vidName) =>
      path.join("public", "poster-images", vidName.split(".")[0] + ".jpg");
    const processVideo = (videoName) => {
      const command = `ffmpeg -i ${getVidPath(
        videoName
      )} -vf "scale=380:-1,crop=380:500" -an -c:v libx264 -crf 28 -preset veryslow -force_key_frames "expr:gte(t,n_forced*1)" ${getOutputPath(
        videoName
      )}`;
      const posterCommand = `ffmpeg -ss 00:00:01 -i ${getVidPath(
        videoName
      )} -frames:v 1 -q:v 2 ${getPosterPath(videoName)}`;

      exec(posterCommand, (err, stdout, stderr) => {
        if (err) console.log(err);
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
        console.log("generated path", videoName);
      });
    };

    const processMultipleVideos = (videos) => {
      if (videos.length == 0) return;
      const [first, ...rest] = videos;
      processVideo(first);
      setTimeout(() => processMultipleVideos(rest), 500);
    };
    processMultipleVideos(videos);
  } catch (error) {
    console.error("Error reading directory or executing command:", error);
  }
}

const compressImage = () => {
  const rootDir = "public/poster-images";
  const outputDir = "public/temp";
  const images = readdirSync(path.join(process.cwd(), rootDir));
  for (const image of images) {
    console.log(path.join(process.cwd(), rootDir, image));
    console.log(path.join(process.cwd(), "temp", image));
    exec(
      `ffmpeg -i ${path.join(
        process.cwd(),
        rootDir,
        image
      )} -q:v 31 ${path.join(path.join(process.cwd(), outputDir, image))}`,
      (err, stdout, stderr) => {
        console.log("generated path", image);
      }
    );
  }
};

compressImage();
