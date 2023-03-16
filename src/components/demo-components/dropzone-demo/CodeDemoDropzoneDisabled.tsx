import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneDisabled = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoDropzoneDisabled;

const splittedCodeJS = `<Dropzone style={{ width: "300px" }}>{/**Files */}</Dropzone>
<Dropzone style={{ width: "300px" }} disabled>
  {"Dropzone is disabled"}
  {/**Files */}
</Dropzone>`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Dropzone } from "@files-ui/react";

const DemoDropzoneDisabled = () => {
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
  export default DemoDropzoneDisabled;`;

const completeCodeTS = completeCodeJS;
