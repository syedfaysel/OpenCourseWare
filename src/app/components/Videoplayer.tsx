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
      <div className="max-w-screen-lg mx-4 parent_wrapper rounded-md  shadow-lg shadow-yellow-300">
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
        <h3 className="text-2xl font-bold text-yellow-300 mt-5">Tutorials</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-3 place-items-center p-3">
          {videos.map((video: any) => {
            return (
              <div
                key={video.link}
                className="flex flex-col gap-3 bg-purple-100 h-32 p-3 w-full md:max-w-96 m-2 rounded place-items-center  shadow"
              >
                <p className="text-blue-800">{video.title}</p>
                <button
                  className="bg-gray-800 w-16 h-10  rounded-lg text-white font-bold hover:bg-red-600 transition ease-in-out duration-200"
                  onClick={() => {
                    setSrc(video.link);
                  }}
                >
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
