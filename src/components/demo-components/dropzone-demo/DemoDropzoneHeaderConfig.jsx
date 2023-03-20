import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneHeaderConfig = (props) => {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const removeAllFiles = (evt) => {
    evt.stopPropagation();
    setFiles([]);
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      headerConfig={{
        customHeader: (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ backgroundColor: "teal", color: "white" }}
              onClick={removeAllFiles}
            >
              delete files
            </button>
          </div>
        ),
      }}
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneHeaderConfig;
