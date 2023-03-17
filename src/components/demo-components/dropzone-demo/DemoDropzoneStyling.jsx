import * as React from "react";
import { Dropzone, FileInputButton } from "../../../files-ui";

const DemoDropzoneStyling = ({ button }) => {
  if (button)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <FileInputButton>Default color</FileInputButton>
          <FileInputButton color="#6200EE">Color= "#6200EE"</FileInputButton>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <FileInputButton textColor="teal" color="aliceblue">
            textColor="teal"
          </FileInputButton>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <FileInputButton>Contained</FileInputButton>
          <FileInputButton variant="outlined">Outlined</FileInputButton>
          <FileInputButton variant="text">Text</FileInputButton>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <FileInputButton textTransform="uppercase">
            Text transform uppercase
          </FileInputButton>
          <FileInputButton textTransform="capitalize">
            Text transform capitalize
          </FileInputButton>
          <FileInputButton textTransform="lowercase">
            Text transform LOWERCASE
          </FileInputButton>
          <FileInputButton textTransform="none">
            Text transform unset
          </FileInputButton>
        </div>
      </div>
    );
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
