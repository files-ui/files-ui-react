import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneBehaviour = (props) => {
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
      <Dropzone
        style={{ width: "300px" }}
        onChange={updateFiles}
        value={files}
        label="Dropzone with behaviour=add"
        behaviour={"add"}
      >
        {files.length > 0 &&
          files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
      </Dropzone>
      <Dropzone
        style={{ width: "300px" }}
        onChange={updateFiles}
        value={files}
        label="Dropzone with behaviour=replace"
        behaviour={"replace"}
      >
        {files.length > 0 &&
          files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneBehaviour;
