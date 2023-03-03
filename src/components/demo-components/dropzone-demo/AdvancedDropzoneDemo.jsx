import * as React from "react";
import {
  Dropzone,
  FileMosaic /* FullScreenPreview */,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "../../../files-ui";
import { useEffect, useState } from "react";
import axios from "axios";
const REMOTE =
  "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";
//const LOCAL = "http://localhost/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";
export default function AdvancedDropzoneDemo() {
  const [extFiles, setExtFiles] = useState([]);

  const [imageSrc, setImageSrc] = React.useState(undefined);
  const [videoSrc, setVideoSrc] = React.useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setExtFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const onClean = () => {
    setExtFiles(extFiles.filter((ef) => ef.valid !== false));
  };
  const handleFinish = (res) => {
    console.log("finish", res);
  };
  const handleWatch = (videoSource) => {
    console.log(
      "handleWatch videoSource",
      "https://files-ui-temp-storage.s3.amazonaws.com/2029385a4ed32ff10beeb94c0585e8ac1a8c377c68d22ef25ce5863694a5499e.mp4"
    );
    //setVideoSrc(videoSource);
    //
    setVideoSrc(videoSource);
    // setVideoSrc("https://www.w3schools.com/tags/movie.mp4");
  };

  useEffect(() => {
    checkFiles();
  }, []);
  async function checkFiles() {
    try {
      const res = await axios.get(REMOTE + "/file");
      console.log("checkFiles", res);
    } catch (error) {
      console.log("checkFiles error", error);
    }
  }
  const handleAbort = (id) => {
   // alert(id);
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel= (id) => {
    // alert(id);
     setExtFiles(
       extFiles.map((ef) => {
         if (ef.id === id) {
           return { ...ef, uploadStatus: undefined };
         } else return { ...ef };
       })
     );
   };
  return (
    <>
      <Dropzone
        //onClean={onClean}
        onChange={updateFiles}
        minHeight="195px"
        value={extFiles}
        /* maxFiles={3}
        maxFileSize={2998000 * 20} */
        label="Drag'n drop files here or click to browse"
        // accept=".png,image/*, video/*"
        uploadConfig={{
          /* autoUpload: true */
          method: "POST",
          url: REMOTE + "/file/28048465460",
          //url: "http://localhost:2800/file/28048465460",
          cleanOnUpload: true,
        }}
        onUploadFinish={handleFinish}
        //fakeUpload
        actionButtons={{
          position: "bottom",
          abortButton: {},
          // cleanButton: {},
          deleteButton: {
            //resetStyles:true
          },
          uploadButton: {},
        }}
        //onClean={()=>alert("cleaninnng")}
        //cleanFiles
        //autoClean
      >
        {extFiles.length > 0 &&
          extFiles.map((file) => (
            <FileMosaic
              {...file}
              key={file.id}
              onDelete={onDelete}
              onSee={handleSee}
              onWatch={handleWatch}
              onAbort={handleAbort}
              onCancel={handleCancel}
              resultOnTooltip
              alwaysActive
              preview
              info
              hd
            />
          ))}
      </Dropzone>
      <FullScreen
        open={imageSrc !== undefined}
        onClose={() => setImageSrc(undefined)}
      >
        <ImagePreview src={imageSrc} />
      </FullScreen>
      <FullScreen
        open={videoSrc !== undefined}
        onClose={() => setVideoSrc(undefined)}
      >
        <VideoPreview videoSrc={videoSrc} autoPlay controls />
      </FullScreen>
    </>
  );
}
