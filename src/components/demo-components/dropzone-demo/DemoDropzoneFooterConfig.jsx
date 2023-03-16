import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneFooterConfig = (props) => {
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
      footerConfig={{ customMessage: "This is a custom message..." }}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneFooterConfig;
