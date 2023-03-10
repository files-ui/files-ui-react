import * as React from "react";
import {
  FileCard,
  FileMosaic,
  FullScreen,
  ImagePreview,
  VideoPreview,
  ExtFile,
} from "../../../files-ui";

const sampleFile: ExtFile = {
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "actions sampleFile.jsx",
  valid: true,
};
const IMG_URL =
  "https://w0.peakpx.com/wallpaper/635/84/HD-wallpaper-thanos-and-iron-man-avengers-clouds-cloudy-face-to-face-her-iron-man-marvel-thanos-war.jpg";
const VIDEO_URL =
  "https://srv23.y2mate.is/download?file=cd448fa7c7fe6c301970e890794fb682137140";

const DemoFileCardActions = (props: { card?: boolean }) => {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(undefined);
  const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
    undefined
  );
  const handleDelete = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  const handleSee = (imageSource: string | undefined) => {
    console.log("watch image:", imageSource);
    setImgSrc(imageSource);
  };
  const handleWatch = (videoSource: File | string | undefined) => {
    console.log("watch video:", videoSource);
    setVideoSrc(videoSource);
  };
  const handleDownload = (
    fileId: string | number | undefined,
    downloadUrl?: string | undefined
  ) => {
    console.log("download file id", fileId);
    console.log("download url", downloadUrl);
  };
  if (props.card)
    return (
      <>
        <FileCard id={0} {...sampleFile} onDelete={handleDelete} />
        <FileCard id={1} {...sampleFile} info />
        <FileCard id={2} {...sampleFile} onSee={handleSee} imageUrl={IMG_URL} />
        <FileCard
          id={3}
          {...sampleFile}
          onWatch={handleWatch}
          videoUrl={VIDEO_URL}
        />
        <FileCard id={4} {...sampleFile} downloadUrl={IMG_URL} />
        <FileCard
          id={5}
          {...sampleFile}
          onDownload={handleDownload}
          downloadUrl={VIDEO_URL}
        />
        <FullScreen
          open={imgSrc !== undefined}
          onClose={() => setImgSrc(undefined)}
        >
          <ImagePreview src={imgSrc} />
        </FullScreen>
        <FullScreen
          open={videoSrc !== undefined}
          onClose={() => setVideoSrc(undefined)}
        >
          <VideoPreview src={videoSrc} autoPlay controls />
        </FullScreen>
      </>
    );
  return (
    <>
      <FileMosaic id={0} {...sampleFile} onDelete={handleDelete} />
      <FileMosaic id={1} {...sampleFile} info />
      <FileMosaic id={2} {...sampleFile} onSee={handleSee} imageUrl={IMG_URL} />
      <FileMosaic
        id={3}
        {...sampleFile}
        onWatch={handleWatch}
        videoUrl={VIDEO_URL}
      />
      <FileMosaic id={4} {...sampleFile} downloadUrl={IMG_URL} />
      <FileMosaic
        id={5}
        {...sampleFile}
        onDownload={handleDownload}
        downloadUrl={VIDEO_URL}
      />
      <FullScreen
        open={imgSrc !== undefined}
        onClose={() => setImgSrc(undefined)}
      >
        <ImagePreview src={imgSrc} />
      </FullScreen>
      <FullScreen
        open={videoSrc !== undefined}
        onClose={() => setVideoSrc(undefined)}
      >
        <VideoPreview src={videoSrc} autoPlay controls />
      </FullScreen>
    </>
  );
};
export default DemoFileCardActions;
