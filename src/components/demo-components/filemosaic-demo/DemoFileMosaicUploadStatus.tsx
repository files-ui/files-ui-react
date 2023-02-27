import * as React from "react";
import { FileMosaic } from "../../../files-ui";
import { ExtFile } from "../../../files-ui/core";
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
  return (
    <>
      <FlexRowContainer>
        <FileMosaic {...preparingFiles[0]} />
        <FileMosaic {...preparingFiles[1]} onCancel={() => {}} />
      </FlexRowContainer>

      <FlexRowContainer>
        <FileMosaic {...uploadingFiles[0]} />
        <FileMosaic {...uploadingFiles[0]} progress={70} />
        <FileMosaic {...uploadingFiles[2]} onAbort={() => {}} />
         <FileMosaic {...uploadingFiles[3]} onAbort={()=>{}}/>
      </FlexRowContainer>

      <FlexRowContainer>
        <FileMosaic {...uploadResulFiles[0]} resultOnTooltip/>
        <FileMosaic {...uploadResulFiles[1]} resultOnTooltip/>
        <FileMosaic {...uploadResulFiles[2]} resultOnTooltip/>
        <FileMosaic {...uploadResulFiles[3]} resultOnTooltip/>
      </FlexRowContainer>
    </>
  );
};
export default DemoFileMosaicUploadStatus;
