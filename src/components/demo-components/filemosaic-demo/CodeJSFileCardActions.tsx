import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileCardActions = (props: { card?: boolean }) => {
  const { card } = props;
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS(card)}
      codeCompleteTS={completeCodeTS(card)}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS(card)}
      codeSplittedTS={splittedCodeTS(card)}
    />
  );
};
export default CodeJSFileCardActions;

const splittedCodeJS = (card?: boolean) => ``;
const splittedCodeTS = (card?: boolean) => ``;

const completeCodeJS = (card?: boolean) => `import * as React from "react";
import {
  ${card?"FileCard":"FileMosaic"},
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "@files-ui/react";

const sampleFile = {
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "actions sampleFile.jsx",
  valid: true,
};
const IMG_URL =
  "https://w0.peakpx.com/wallpaper/635/84/HD-wallpaper-thanos-and-iron-man-avengers-clouds-cloudy-face-to-face-her-iron-man-marvel-thanos-war.jpg";
const VIDEO_URL =
  "https://srv23.y2mate.is/download?file=cd448fa7c7fe6c301970e890794fb682137140";

const Demo${card?"FileCard":"FileMosaic"}Actions = ({ card }) => {
  const [imgSrc, setImgSrc] = React.useState(undefined);
  const [videoSrc, setVideoSrc] = React.useState(undefined);
  const handleDelete = (id) => {
    console.log("delete button clicked on file: " + id);
  };
  const handleSee = (imageSource) => {
    console.log("watch image:", imageSource);
    setImgSrc(imageSource);
  };
  const handleWatch = (videoSource) => {
    console.log("watch video:", videoSource);
    setVideoSrc(videoSource);
  };
  const handleDownload = (fileId, downloadUrl) => {
    console.log("download file id", fileId);
    console.log("download url", downloadUrl);
  };
  return (
    <>
      <${card?"FileCard":"FileMosaic"} id={0} {...sampleFile} onDelete={handleDelete} />
      <${card?"FileCard":"FileMosaic"} id={1} {...sampleFile} info />
      <${card?"FileCard":"FileMosaic"} id={2} {...sampleFile} onSee={handleSee} imageUrl={IMG_URL} />
      <${card?"FileCard":"FileMosaic"}
        id={3}
        {...sampleFile}
        onWatch={handleWatch}
        videoUrl={VIDEO_URL}
      />
      <${card?"FileCard":"FileMosaic"} id={4} {...sampleFile} downloadUrl={IMG_URL} />
      <${card?"FileCard":"FileMosaic"}
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
export default Demo${card?"FileCard":"FileMosaic"}Actions;`;

const completeCodeTS = (card?: boolean) => `import * as React from "react";
import {
  ${card?"FileCard":"FileMosaic"},
  FullScreen,
  ImagePreview,
  VideoPreview,
  ExtFile,
} from "@files-ui/react";

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

const Demo${card?"FileCard":"FileMosaic"}Actions = (props: { card?: boolean }) => {
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
  return (
    <>
      <${card?"FileCard":"FileMosaic"} id={0} {...sampleFile} onDelete={handleDelete} />
      <${card?"FileCard":"FileMosaic"} id={1} {...sampleFile} info />
      <${card?"FileCard":"FileMosaic"} id={2} {...sampleFile} onSee={handleSee} imageUrl={IMG_URL} />
      <${card?"FileCard":"FileMosaic"}
        id={3}
        {...sampleFile}
        onWatch={handleWatch}
        videoUrl={VIDEO_URL}
      />
      <${card?"FileCard":"FileMosaic"} id={4} {...sampleFile} downloadUrl={IMG_URL} />
      <${card?"FileCard":"FileMosaic"}
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
export default Demo${card?"FileCard":"FileMosaic"}Actions;`;
