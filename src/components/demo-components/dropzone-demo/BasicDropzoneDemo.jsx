import {
  Dropzone,
  FileCard,
  FileInputButton,
  FileMosaic,
} from "../../../files-ui";
import * as React from "react";
export default function BasicDemoDropzone({ button }) {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  if (button) {
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
        <FileInputButton onChange={updateFiles} value={files} />
        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
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
  }
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}
