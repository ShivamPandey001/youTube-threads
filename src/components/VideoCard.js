import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  let formattedViewCount;

  if (viewCount >= 1000000) {
    formattedViewCount = (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    formattedViewCount = (viewCount / 1000).toFixed(1) + "k";
  } else {
    formattedViewCount = viewCount;
  }

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{formattedViewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
