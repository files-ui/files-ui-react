import * as React from "react";
import { ExtFile, FileCard, FileMosaic } from "../../../files-ui";

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
  valid: true,
};
const DemoFileMosaicDarkMode = (props: { card?: boolean }) => {
  const removeFile = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  if (props.card)
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "50%",
            backgroundColor: "white",
            padding: "15px 0",
            flexGrow:1
          }}
        >
          <FileCard {...sampleFileProps} info onDelete={removeFile} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "50%",
            backgroundColor: "#121212",
            padding: "15px 0",
            flexGrow: 1,
          }}
        >
          <FileCard {...sampleFileProps} info darkMode onDelete={removeFile} />
        </div>
      </>
    );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minWidth: "50%",
          backgroundColor: "white",
          padding: "15px 0",
          flexGrow: 1,
        }}
      >
        <FileMosaic {...sampleFileProps} info onDelete={removeFile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minWidth: "50%",
          backgroundColor: "#121212",
          padding: "15px 0",
          flexGrow: 1,

        }}
      >
        <FileMosaic {...sampleFileProps} info darkMode onDelete={removeFile} />
      </div>
    </>
  );
};
export default DemoFileMosaicDarkMode;
