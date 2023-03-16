import * as React from "react";
import { Dropzone } from "../../../files-ui";

const DemoDropzoneRipple = () => {
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
