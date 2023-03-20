import * as React from "react";
import {
  Dropzone,
  FileCard,
  FileInputButton,
  FileMosaic,
} from "../../../files-ui";

const DemoDropzoneUploading = ({ button }) => {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleFinishUpload=(uploadedFiles)=>{
    console.log("Upload has finished", uploadedFiles);
  }
  if (button)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "10px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <FileInputButton
          onChange={updateFiles}
          value={files}
          accept={"image/*"}
          maxFileSize={28 * 1024 * 1024}
          maxFiles={2}
          actionButtons={{
            position: "bottom",
            uploadButton: {},
            abortButton: {},
          }}
          uploadConfig={{
            url: "https://www.myawsomeserver.com/upload",
            method: "POST",
            headers: {
              Authorization:
                "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
            },
            cleanOnUpload: true,
          }}
          onUploadFinish={handleFinishUpload}
          fakeUpload
        />
        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "5px",
              minWidth: "50%",
            }}
          >
            {files.map((file) => (
              <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
            ))}
          </div>
        )}
      </div>
    );
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      accept={"image/*"}
      maxFileSize={28 * 1024 * 1024}
      maxFiles={2}
      actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
      uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        headers: {
          Authorization:
            "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        },
        cleanOnUpload: true,
      }}
      onUploadFinish={handleFinishUpload}
      fakeUpload
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview/>
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneUploading;
