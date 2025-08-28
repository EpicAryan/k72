import React from "react";

const Video = () => {
    return (
        <div className="h-full w-full">
            <video
                src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756366725~exp=1756370325~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=26056928231066d05f0781dc4a89520db5292b4814db5de2e73cd340451d5d72&r=dXMtd2VzdDE%3D"
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
            ></video>
        </div>
    );
};

export default Video;
