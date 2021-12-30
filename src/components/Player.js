import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export default function Player({ music, volume, setVolume }) {
  const playing = true;
  const muted = false;
  const controls = false;

  useEffect(() => {
    setVolume(1);
  }, [music.youtube]);

  const handleClick = (e) => {
    e.preventDefault();
    setVolume(1);
  };

  return (
    <div>
      <div style={{ height: "100vh", opacity: "0" }} onKeyPress={handleClick}>
        <ReactPlayer
          style={{ opacity: "0", pointerEvents: "none" }}
          controls={controls}
          playing={playing}
          url={music.youtube}
          height="90vh"
          width="0"
          volume={volume}
          muted={muted}
          config={{
            youtube: {
              playerVars: {
                modestbranding: true,
                color: "black",
                controlsList: "nofullscreen",
                fs: 0,
              },
            },
          }}
          playsinline={true}
          loop={true}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
