import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneLabel = ({ splittedOnly = false, button = false }) => {
  if (button)
    return (
      <ShowDemoCode
        splittedOnly={splittedOnly}
        codeCompleteJS={completeCodeJSButton}
        codeCompleteTS={completeCodeTSButton}
        codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSplittedJS={splittedCodeJSButton}
        codeSplittedTS={splittedCodeTSButton}
      />
    );
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
export default CodeDemoDropzoneLabel;

const splittedCodeJSButton = `<FileInputButton/>
<FileInputButton>{"Label as children"}</FileInputButton>
<FileInputButton label={"Files ui ❤️"}/>`;
const splittedCodeTSButton = splittedCodeJSButton;
const completeCodeJSButton = `import { FileInputButton } from "@files-ui/react";
import * as React from "react";

export default function App() {
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
}`;
const completeCodeTSButton = completeCodeJSButton;

/////

const splittedCodeJS = `<Dropzone style={{ width: "300px" }}>{/**Files */}</Dropzone>
<Dropzone
  style={{ width: "300px" }}
  label={"Files ui ❤️"}
>
  {/**Files */}
</Dropzone>`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Dropzone } from "@files-ui/react";

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
  export default DemoDropzoneLabel;`;

const completeCodeTS = completeCodeJS;
