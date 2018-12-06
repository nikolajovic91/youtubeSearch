import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const list = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} />;
  });
  return <div className="ui relaxed devided list">{list}</div>;
};

export default VideoList;
 