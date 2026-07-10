"use client";

import Link from "next/link";
import { IKVideo } from "@imagekit/next";
import { IVideo, VIDEO_DIMENSIONS } from "@/models/Video";

interface VideoComponentProps {
  video: IVideo;
}

export default function VideoComponent({
  video,
}: VideoComponentProps) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <Link
          href={`/videos/${video._id?.toString()}`}
          className="w-full"
        >
          <div
            className="relative w-full overflow-hidden rounded-xl"
            style={{ aspectRatio: "9 / 16" }}
          >
            <IKVideo
              path={video.videoUrl}
              controls={video.controls ?? true}
              loading="lazy"
              playsInline
              className="h-full w-full object-cover"
              transformation={[
                {
                  height: String(
                    video.transformation?.height ??
                      VIDEO_DIMENSIONS.height
                  ),
                  width: String(
                    video.transformation?.width ??
                      VIDEO_DIMENSIONS.width
                  ),
                  ...(video.transformation?.quality && {
                    quality: String(video.transformation.quality),
                  }),
                },
              ]}
            />
          </div>
        </Link>
      </figure>

      <div className="card-body p-4">
        <Link
          href={`/videos/${video._id?.toString()}`}
          className="hover:opacity-80"
        >
          <h2 className="card-title text-lg">{video.title}</h2>
        </Link>

        <p className="line-clamp-2 text-sm text-base-content/70">
          {video.description}
        </p>
      </div>
    </div>
  );
}