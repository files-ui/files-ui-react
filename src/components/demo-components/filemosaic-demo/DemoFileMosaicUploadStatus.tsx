import * as React from "react";
import { FileMosaic } from "../../../files-ui";
import { ExtFile, getRandomInt } from "../../../files-ui/core";
const preparingFiles: ExtFile[] = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "plain/javascript",
    name: "default preparing file.jsx",
    uploadStatus: "preparing",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "plain/javascript",
    name: "preparing file that can be stopped.jsx",
    uploadStatus: "preparing",
  },
];
const uploadingFiles: ExtFile[] = [
  {
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "non abortable with no specific progress.png",
    valid: true,
    uploadStatus: "uploading",
  },
  {
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "non abortable with specific progress.png",
    valid: true,
    uploadStatus: "uploading",
    progress: 56,
  },
  {
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "abortable with no specific progress.png",
    valid: true,
    uploadStatus: "uploading",
  },
  {
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "abortable with specific progress.png",
    valid: true,
    uploadStatus: "uploading",
    progress: 56,
  },
];
const uploadResulFiles: ExtFile[] = [
  {
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted by the user",
  },
  {
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    uploadStatus: "error",
    uploadMessage:
      "File couldn't be uploaded to Files-ui earthquakes. File was too big.",
  },
  {
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    uploadStatus: "success",
    uploadMessage: "File was uploaded correctly to Files-ui earthquakes",
  },
];

const FlexRowContainer = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};
const DemoFileMosaicUploadStatus = () => {
  const [progress, setProgress] = React.useState(28);
  const [progress2, setProgress2] = React.useState(28);
  React.useEffect(() => {
    const _myInterval = setInterval(() => {
      setProgress((_progress) => {
        if (_progress === 100) {
          return 0;
        }
        const offset = getRandomInt(5, 14);
        const newProgress = _progress + offset;
        if (newProgress > 100) {
          return 100;
        } else {
          return newProgress;
        }
      });
      setProgress2((_progress) => {
        if (_progress === 100) {
          return 0;
        }
        const offset = getRandomInt(10, 24);
        const newProgress = _progress + offset;
        if (newProgress > 100) {
          return 100;
        } else {
          return newProgress;
        }
      });
    }, 2000);

    return () => {
      console.log("clear interval", _myInterval);
      clearInterval(_myInterval as NodeJS.Timer);
    };
  }, []);
  return (
    <>
      <FlexRowContainer>
        <FileMosaic {...preparingFiles[0]} />
        <FileMosaic {...preparingFiles[1]} onCancel={() => {}} />
      </FlexRowContainer>

      <FlexRowContainer>
        <FileMosaic {...uploadingFiles[0]} />
        <FileMosaic {...uploadingFiles[0]} progress={progress} />
        <FileMosaic {...uploadingFiles[2]} onAbort={() => {}} />
        <FileMosaic
          {...uploadingFiles[3]}
          onAbort={() => {}}
          progress={progress2}
        />
      </FlexRowContainer>

      <FlexRowContainer>
        <FileMosaic {...uploadResulFiles[0]} resultOnTooltip />
        <FileMosaic {...uploadResulFiles[1]} resultOnTooltip />
        <FileMosaic {...uploadResulFiles[2]} resultOnTooltip />
        <FileMosaic {...uploadResulFiles[3]} resultOnTooltip />
      </FlexRowContainer>
    </>
  );
};
export default DemoFileMosaicUploadStatus;
