import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneLabel = (props) => {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div style={{ display: "flex" }}>
      <Dropzone style={{ width: "300px" }} onChange={updateFiles} value={files}>
        {files.length > 0 &&
          files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
      </Dropzone>
      <Dropzone
        style={{ width: "300px" }}
        onChange={updateFiles}
        value={files}
        label={"You better have already installed files-ui for your project XD"}
      >
        {files.length > 0 &&
          files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneLabel;
