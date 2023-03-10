import * as React from "react";
import {
  FileMosaic,
  useFakeProgress,
  ExtFile,
  UPLOADSTATUS,
  FileCard,
} from "../../../files-ui";
import TypeHighlight from "../../typeHighlight/TypeHighlight";

import "./DemoFileMosaicUpload.scss";
const DemoFileMosaicUploadStatus = (props: { card?: boolean }) => {
  const progress = useFakeProgress();

  const [status1, setStatus1] = React.useState<UPLOADSTATUS>("uploading");
  const [status2, setStatus2] = React.useState<UPLOADSTATUS>("uploading");
  const [status3, setStatus3] = React.useState<UPLOADSTATUS>("uploading");

  React.useEffect(() => {
    //schedule an interval
    const _myInterval = setInterval(() => {
      //set the uploadstatus result
      setStatus1((_status) => setNextUploadState(_status, "aborted"));
      setStatus2((_status) => setNextUploadState(_status, "error"));
      setStatus3((_status) => setNextUploadState(_status, "success"));
    }, 5000);

    //clean
    return () => {
      console.log("clear interval", _myInterval);
      clearInterval(_myInterval as NodeJS.Timer);
    };
  }, []);

  const handleCancel = (id: string | number | undefined) => {
    console.log("Upload canceled in file: " + id);
  };
  const handleAbort = (id: string | number | undefined) => {
    console.log("Upload aborted in file: " + id);
  };
  if (props.card)
    return (
      <>
        <FlexRowContainer card title={"preparing stage"}>
          <FileCard {...preparingFile}  onClick={()=>alert("haaaaaa")}/>
          <FileCard {...preparingFile} onCancel={handleCancel}  onClick={()=>alert("haaaaaa")}/>
        </FlexRowContainer>

        <FlexRowContainer card title={"uploading stage"}>
          <FileCard {...uploadingFile}  onClick={()=>alert("haaaaaa")}/>
          <FileCard {...uploadingFile} progress={progress} onClick={()=>alert("haaaaaa")} />
          <FileCard {...uploadingFile} onAbort={handleAbort}  onClick={()=>alert("haaaaaa")}/>
          <FileCard
            {...uploadingFile}
            onAbort={handleAbort}
            progress={progress} onClick={()=>alert("haaaaaa")}
          />
        </FlexRowContainer>

        <FlexRowContainer card title={"upload result stage"}>
          <FileCard {...uploadResultFiles[0]} uploadStatus={status1}  onClick={()=>alert("haaaaaa")}/>
          <FileCard {...uploadResultFiles[1]} uploadStatus={status2}  onClick={()=>alert("haaaaaa")}/>
          <FileCard {...uploadResultFiles[2]} uploadStatus={status3}  onClick={()=>alert("haaaaaa")}/>
        </FlexRowContainer>
      </>
    );
  return (
    <>
      <FlexRowContainer title={"preparing stage"}>
        <FileMosaic {...preparingFile}  onClick={()=>alert("haaaaaa")}/>
        <FileMosaic {...preparingFile} onCancel={handleCancel}  onClick={()=>alert("haaaaaa")}/>
      </FlexRowContainer>

      <FlexRowContainer title={"uploading stage"}>
        <FileMosaic {...uploadingFile}  onClick={()=>alert("haaaaaa")}/>
        <FileMosaic {...uploadingFile} progress={progress}  onClick={()=>alert("haaaaaa")}/>
        <FileMosaic {...uploadingFile} onAbort={handleAbort}  onClick={()=>alert("haaaaaa")}/>
        <FileMosaic
          {...uploadingFile}
          onAbort={handleAbort}
          progress={progress}
           onClick={()=>alert("haaaaaa")}
        />
      </FlexRowContainer>

      <FlexRowContainer title={"upload result stage"}>
        <FileMosaic {...uploadResultFiles[0]} uploadStatus={status1} onClick={()=>alert("haaaaaa")} />
        <FileMosaic {...uploadResultFiles[1]} uploadStatus={status2} onClick={()=>alert("haaaaaa")} />
        <FileMosaic {...uploadResultFiles[2]} uploadStatus={status3} onClick={()=>alert("haaaaaa")}/>
      </FlexRowContainer>
    </>
  );
};
export default DemoFileMosaicUploadStatus;

const FlexRowContainer = (props: {
  children: React.ReactNode;
  card?: boolean;
  title?: string;
}) => {
  const { children, card, title } = props;
  return (
    <React.Fragment>
      {!card && <h4 style={{ margin: 0 }}>{title}</h4>}
      <div
        className={
          card ? "flex-container-group-card" : "flex-container-group-mosaic"
        }
      >
        {card && <h4 style={{ margin: 0 }}>{title}</h4>}
        {children}
      </div>
    </React.Fragment>
  );
};

const setNextUploadState = (
  prevState: UPLOADSTATUS,
  nextStatus: UPLOADSTATUS
): UPLOADSTATUS => {
  if (prevState === "uploading") return nextStatus;
  else return "uploading";
};

const preparingFile: ExtFile = {
  id: "fileId-0",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "preparing file.jsx",
  uploadStatus: "preparing",
};

const uploadingFile: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/png",
  name: "uploading file.png",
  uploadStatus: "uploading",
};

const uploadResultFiles: ExtFile[] = [
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "upload aborted file.gif",
    uploadMessage: "Upload was aborted by the user",
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "upload with error file.jpg",
    uploadMessage:
      "File couldn't be uploaded to Files-ui earthquakes. File was too big.",
  },
  {
    id: "fileId-4",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "successfully uploaded file.png",
    uploadMessage: "File was uploaded correctly to Files-ui earthquakes",
  },
];
