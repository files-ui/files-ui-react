import * as React from "react";
import { Dropzone, FileInputButton } from "../../../files-ui";

const DemoDropzoneLabel = ({ button }) => {
  if (button)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
         <FileInputButton/>
         <FileInputButton>{"Label as children"}</FileInputButton>
         <FileInputButton label={"Files ui ❤️"}/>
      </div>
    );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <Dropzone style={{ width: "300px" }}>{/**Files */}</Dropzone>
      <Dropzone style={{ width: "300px" }} label={"Files ui ❤️"}>
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneLabel;
