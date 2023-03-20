import * as React from "react";
import {
  Dropzone,
  FileCard,
  FileInputButton,
  FileMosaic,
} from "../../../files-ui";

const DemoDropzoneValidation = ({ button = false }) => {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
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
          maxFileSize={28 * 1024}
          maxFiles={2}
          actionButtons={{ position: "bottom", cleanButton: {} }}
        />
        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent:"center",
              flexWrap:"wrap",
              gap:"5px",
              minWidth:"50%"
            }}
          >
            {files.map((file) => (
              <FileCard key={file.id} {...file} onDelete={removeFile} info />
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
      maxFileSize={28 * 1024}
      maxFiles={2}
      //cleanFiles
      actionButtons={{ position: "bottom", cleanButton: {} }}
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneValidation;
