import * as React from "react";
import {
  ExtFile,
  FileCard,
  FileMosaic,
  FullScreen,
  VideoPreview,
} from "../../../files-ui";
import { ThorArrivesWakandaEN } from "../../../data/videoLinks";

const DemoFullScreenVid = () => {
  const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
    undefined
  );
  const handleWatch = (videoSource: File | string | undefined) => {
    setVideoSrc(videoSource);
  };
  return (
    <>
      <FileCard id={0} {...videoSample} onWatch={handleWatch} />
      <FileMosaic id={0} {...videoSample} onWatch={handleWatch} />
      <FullScreen
        open={videoSrc !== undefined}
        onClose={() => setVideoSrc(undefined)}
      >
        <VideoPreview src={videoSrc} autoPlay controls />
      </FullScreen>
    </>
  );
};
export default DemoFullScreenVid;

const videoSample: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "video/mp4",
  name: "Thor arrives wakanda.mp4",
  videoUrl: ThorArrivesWakandaEN,
};
