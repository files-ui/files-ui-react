import * as React from "react";
import { Dropzone } from "../../../files-ui";

const DemoDropzoneLabel = () => {
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
      <Dropzone
        style={{ width: "300px" }}
        label={"Files ui ❤️"}
      >
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneLabel;
