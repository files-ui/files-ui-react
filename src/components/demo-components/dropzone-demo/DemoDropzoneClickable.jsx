import * as React from "react";
import { Dropzone } from "../../../files-ui";

const DemoDropzoneClickable = (props) => {
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
      <Dropzone style={{ width: "300px" }} clickable={false}>
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneClickable;
