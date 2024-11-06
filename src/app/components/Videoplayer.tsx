"use client";
import React from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import convertVideoLink from "@/lib/convertVideoLink";

const Videoplayer = ({ videos }: any) => {
  const initialLink: any = convertVideoLink(videos[0].link);
  const [src, setSrc] = useState(initialLink);

  const handleSrcClick = (link: any) => {
    setSrc(convertVideoLink(link));
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* video player iframe */}
      <div className="mx-auto parent_wrapper">
        <div className="wrapper mt-8" id="player">
          <iframe
            className="w-full aspect-video"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* tutorials */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-accent-200 mt-7">
          All Tutorials
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-3 items-center justify-center p-3">
          {videos.map((video: any) => {
            return (
              <div
                key={video.link}
                className={`flex flex-col gap-4 h-[200px] p-4 w-auto m-2  place-items-center border border-stone-950 shadow-md shadow-base-300 transition ease-in-out duration-200`}
              >
                <p className="text-primary font-bold">
                  {video.title} <br></br>
                </p>
                <p>{video.author || ""}</p>
                <button
                  className=" text-gray-100 font-bold bg-gray-600 px-3 py-2 hover:bg-red-600 transition ease-in-out duration-200"
                  onClick={() => {
                    // console.log(video.link);
                    handleSrcClick(video.link);
                    document.getElementById("player")!.scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  }}
                >
                  {"Play  "}
                  <FaPlay className="inline-block" />
                </button>
                <span className="text-primary text-sm">
                  {`${video.editorsPick ? "[Editors Pick]" : ""}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
