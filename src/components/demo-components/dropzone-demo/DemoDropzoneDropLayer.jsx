import * as React from "react";
import { Dropzone } from "../../../files-ui";

const DemoDropzoneDropLayer = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      gap: "40px",
      flexWrap: "wrap",
    }}>
      <Dropzone style={{ width: "300px" }}>{/**Files */}</Dropzone>
      <Dropzone style={{ width: "300px" }} dropOnLayer={false}>
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneDropLayer;
