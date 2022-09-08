import React from "react";
import video from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute'
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Hero;
