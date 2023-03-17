import * as React from "react";
import { Dropzone, FileMosaic } from "../../../files-ui";

const DemoDropzoneActionButtons = ({button}) => {
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
      autoClean
      uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
      fakeUpload
      actionButtons={{
        position: "bottom",
        uploadButton: { style: { textTransform: "uppercase" } },
        abortButton: {},
        cleanButton: {},
        deleteButton: {},
      }}
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneActionButtons;
