import * as React from "react";
import { Dropzone } from "../../../files-ui";

const DemoDropzoneStyling = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <Dropzone style={{ width: "300px" }} color="#6200EE">
        {/**Files */}
      </Dropzone>
      <Dropzone
        style={{ width: "300px" }}
        minHeight="120px"
        header={false}
        footer={false}
      >
        {/**Files */}
      </Dropzone>
      <Dropzone
        style={{ width: "300px" }}
        background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
      >
        {/**Files */}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneStyling;
