import * as React from "react";
import { Dropzone, FileInputButton } from "../../../files-ui";

const DemoDropzoneDisabled = ({ button }) => {
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
        <FileInputButton>{"input enabled"}</FileInputButton>
        <FileInputButton disabled>{"input disabled"}</FileInputButton>
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
      <Dropzone style={{ width: "300px" }} disabled>
        {"Dropzone is disabled"}
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneDisabled;
