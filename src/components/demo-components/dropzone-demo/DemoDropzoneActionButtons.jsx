import * as React from "react";
import { Dropzone, FileCard, FileInputButton, FileMosaic } from "../../../files-ui";

const DemoActionButtons = ({ button }) => {
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
              <FileCard
                key={file.id}
                {...file}
                onDelete={removeFile}
                info
                preview
              />
            ))}
          </div>
        )}
      </div>
    );
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
export default DemoActionButtons;
