import * as React from "react";
import { Dropzone, FileInputButton } from "../../../files-ui";

const DemoDropzoneRipple = ({ button = false }) => {
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
        <FileInputButton>{"ripple enabled"}</FileInputButton>
        <FileInputButton disableRipple>{"ripple disabled"}</FileInputButton>
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
      <Dropzone style={{ width: "300px" }}>ripple enabled </Dropzone>
      <Dropzone style={{ width: "300px" }} disableRipple>
        ripple disabled
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneRipple;
