import React from "react";

const Video = () => {
    return (
        <div className="h-full w-full">
            <video
                src="https://videos.ctfassets.net/m3x6aw9x53qp/20HRo8AoBGFDykiYf7mzp5/abd6b5eb459f8566474fddce40cceba7/k72.webm"
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
            ></video>
        </div>
    );
};

export default Video;
