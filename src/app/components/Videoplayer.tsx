"use client";
import React from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Videoplayer = ({ videos }: any) => {


  const [src, setSrc] = useState(videos[0].link);

  const handleSrcClick = (link: string) => {
    setSrc(link);
  };

  return (
    <div>
      {/* video player iframe */}
      <div className="max-w-screen-lg mx-4 parent_wrapper rounded-md shadow-md shadow-yellow-300">
        <div className="wrapper rounded-md mt-8">
          <iframe
            className="rounded-xl"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* tutorials */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-yellow-300 mt-7">Tutorials</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-3 place-items-center p-3">
          {videos.map((video: any) => {
            return (
              <div
                key={video.link}
                className={`flex flex-col bg-gray-800 gap-4 h-auto p-4 w-full md:max-w-96 m-2 rounded-lg place-items-center  shadow-md shadow-yellow-300 hover:bg-gray-900 transition ease-in-out duration-200`}
              >
                <p className="text-blue-300 font-bold">
                  {video.title} <br></br>
                  <span className="text-yellow-400 text-sm">{`${
                    video.editorsPick ? "[Editors Pick]" : ""
                  }`}</span>
                </p>
                <p>{video.author || ""}</p>
                <button
                  className=" text-gray-100 font-bold bg-gray-600 px-3 py-2 rounded-lg hover:bg-red-600 transition ease-in-out duration-200"
                  onClick={() => {
                    setSrc(video.link);
                  }}
                >
                  {"Play  "}
                  <FaPlay className="inline-block" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
