import {
  Dropzone,
  FileMosaic /* FullScreenPreview */,
} from "../../../files-ui";
import { useEffect, useState } from "react";
import axios from "axios";
const REMOTE = "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";
const LOCAL = "http://localhost/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";
export default function AdvancedDropzoneDemo() {
  const [extFiles, setExtFiles] = useState([]);

  const [imageSrc, setImageSrc] = useState(undefined);

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
  useEffect(() => {
    checkFiles();
  }, []);
  async function checkFiles() {
    try {
      const res = await axios.get(
        LOCAL +
          "/file"
      );
      console.log("checkFiles", res);
    } catch (error) {
      console.log("checkFiles error", error);
    }
  }
  return (
    <>
      <Dropzone
        //onClean={onClean}
        onChange={updateFiles}
        minHeight="195px"
        value={extFiles}
        maxFiles={3}
        maxFileSize={2998000*20}
        label="Drag'n drop files here or click to browse"
        accept=".png,image/*, video/*"
        uploadConfig={{
          /* autoUpload: true */
          method: "POST",
          url: LOCAL + "/file/28048465460",
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
              resultOnTooltip
              alwaysActive
              preview
              info
              hd
            />
          ))}
      </Dropzone>
      {/*  <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      /> */}
    </>
  );
}
