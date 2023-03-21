import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoFullScrrenVid = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoFullScrrenVid;

const splittedCodeJS = `<FileCard id={0} {...videoSample} onWatch={handleWatch} />
<FileMosaic id={0} {...videoSample} onWatch={handleWatch} />
<FullScreen
  open={videoSrc !== undefined}
  onClose={() => setVideoSrc(undefined)}
>
  <VideoPreview src={videoSrc} autoPlay controls />
</FullScreen>

const videoSample = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "video/mp4",
    name: "Thos arrives wakanda.mp4",
    videoUrl: ThorArrivesWakandaEN,
};`;

const completeCodeJS = `import * as React from "react";
import { FileCard, FileMosaic, FullScreen, ImagePreview } from "@files-ui/react";

const videoSample = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "video/mp4",
    name: "Thos arrives wakanda.mp4",
    videoUrl: ThorArrivesWakandaEN,
};

export default function App() {
  const [videoSrc, setVideoSrc] = React.useState(undefined);
  const handleWatch = (videoSource) => {
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
};`;

const splittedCodeTS = `<FileCard id={0} {...videoSample} onWatch={handleWatch} />
<FileMosaic id={0} {...videoSample} onWatch={handleWatch} />
<FullScreen
  open={videoSrc !== undefined}
  onClose={() => setVideoSrc(undefined)}
>
  <VideoPreview src={videoSrc} autoPlay controls />
</FullScreen>

const videoSample: ExtFile = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "video/mp4",
    name: "Thos arrives wakanda.mp4",
    videoUrl: ThorArrivesWakandaEN,
};`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileCard, FileMosaic, FullScreen, ImagePreview } from "@files-ui/react";

const videoSample: ExtFile = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "video/mp4",
    name: "Thos arrives wakanda.mp4",
    videoUrl: ThorArrivesWakandaEN,
};

export default function App() {
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
};`;
