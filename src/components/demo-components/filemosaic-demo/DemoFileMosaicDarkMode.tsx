import * as React from "react";
import {
  ExtFile,
  FileCard,
  FileCardProps,
  FileMosaic,
} from "../../../files-ui";
const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "sampleFile" + ".jsx",
  valid: true,
};
const sampleFilePropsCard = (elevationNumber: number): ExtFile => {
  return {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "elevation=" + elevationNumber + ".jsx",
    valid: true,
  };
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
            flexDirection: "column",
            backgroundColor: "white",
            alignItems: "center",
            padding: "25px 0",
            flexGrow: 1,
            gap: "7px",
          }}
        >
          {[0, 4, 16, 24].map((elevation) => (
            <FileCard
              key={elevation}
              {...sampleFilePropsCard(elevation)}
              onDelete={removeFile}
              info
              elevation={elevation as FileCardProps["elevation"]}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#121212",
            alignItems: "center",
            padding: "25px 0",
            flexGrow: 1,
            gap: "7px",
          }}
        >
          {[0, 4, 16, 24].map((elevation) => (
            <FileCard
              key={elevation}
              {...sampleFilePropsCard(elevation)}
              onDelete={removeFile}
              darkMode
              info
              elevation={elevation as FileCardProps["elevation"]}
            />
          ))}
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
