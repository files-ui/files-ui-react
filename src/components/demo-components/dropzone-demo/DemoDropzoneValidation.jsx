import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneValidation = (props) => {
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
    <Dropzone
      onChange={updateFiles}
      value={files}
      accept={"image/*"}
      maxFileSize={28 * 1024}
      maxFiles={2}
      //cleanFiles
      actionButtons={{ position: "bottom", cleanButton: {} }}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneValidation;
