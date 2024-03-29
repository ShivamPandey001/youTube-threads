import React, { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  // if(videos == null) return <ShimmerUI/>;
  return !videos || videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
