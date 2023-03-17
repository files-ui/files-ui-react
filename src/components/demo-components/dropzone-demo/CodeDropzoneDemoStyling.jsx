import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneStyling = ({ splittedOnly = false, button }) => {
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
export default CodeDemoDropzoneStyling;

const splittedCodeJSButton = `<FileInputButton>Default color</FileInputButton>
<FileInputButton color="#6200EE">color="#6200EE"</FileInputButton>

<FileInputButton textColor="teal" color="aliceblue">
  textColor="teal"
</FileInputButton>

<FileInputButton>{"Contained"}</FileInputButton>
<FileInputButton variant="outlined">outlined</FileInputButton>
<FileInputButton variant="text">{"Text"}</FileInputButton>

<FileInputButton textTransform="uppercase">
  {"Text transform uppercase"}
</FileInputButton>
<FileInputButton textTransform="capitalize">
  {"Text transform capitalize"}
</FileInputButton>
<FileInputButton textTransform="lowercase">
  {"Text transform LOWERCASE"}
</FileInputButton>
<FileInputButton textTransform="none">
  {"Text transform unset"}
</FileInputButton>`;
const splittedCodeTSButton = splittedCodeJSButton;
const completeCodeJSButton = `import { FileInputButton } from "@files-ui/react";
import * as React from "react";

export default function App() {
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
        <FileInputButton color="#6200EE">color="#6200EE"</FileInputButton>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <FileInputButton textColor="teal" color="aliceblue">
          textColor="teal"
        </FileInputButton>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <FileInputButton>{"Contained"}</FileInputButton>
        <FileInputButton variant="outlined">outlined</FileInputButton>
        <FileInputButton variant="text">{"Text"}</FileInputButton>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <FileInputButton textTransform="uppercase">
          {"Text transform uppercase"}
        </FileInputButton>
        <FileInputButton textTransform="capitalize">
          {"Text transform capitalize"}
        </FileInputButton>
        <FileInputButton textTransform="lowercase">
          {"Text transform LOWERCASE"}
        </FileInputButton>
        <FileInputButton textTransform="none">
          {"Text transform unset"}
        </FileInputButton>
      </div>
    </div>
  );
}`;
const completeCodeTSButton = completeCodeJSButton;

/////

const splittedCodeJS = `<Dropzone color="#6200EE">{/** files */}</Dropzone>
<Dropzone
    minHeight="120px"
    header={false}
    footer={false}
>
  {/** files */}
</Dropzone>
<Dropzone
    background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
>
  {/** files */}
</Dropzone>`;
const splittedCodeTS = `<Dropzone color="#6200EE">{/** files */}</Dropzone>
<Dropzone
    minHeight="120px"
    header={false}
    footer={false}
>
  {/** files */}
</Dropzone>
<Dropzone
    background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
>
  {/** files */}
</Dropzone>`;
const completeCodeJS = `import * as React from "react";
import { Dropzone } from "@files-ui/react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        flexWrap: "wrap",
        alignItems:"flex-start"
      }}
    >
        <Dropzone
            style={{ width: "300px" }}
            onChange={updateFiles}
            value={files}
            color="#6200EE"
        >
          {/** Files*/}
        </Dropzone>
        <Dropzone
            style={{ width: "300px" }}
            minHeight="120px"
            header={false}
            footer={false}
        >
          {/** Files*/}
        </Dropzone>
        <Dropzone
          style={{ width: "300px" }}
          background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
        >
          {/** Files*/}
        </Dropzone>
    </div>
  );
};`;

const completeCodeTS = `import * as React from "react";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        flexWrap: "wrap",
        alignItems:"flex-start"
      }}
    >
        <Dropzone
          style={{ width: "300px" }}
          color="#6200EE"
        >
          {/** Files*/}
        </Dropzone>
        <Dropzone
          style={{ width: "300px" }}
          minHeight="120px"
          header={false}
          footer={false}
        >
          {/** Files*/}
        </Dropzone>
        <Dropzone
          style={{ width: "300px" }}
          onChange={updateFiles}
          value={files}
          background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
        >
          {/** Files*/}
        </Dropzone>
    </div>
  );
}`;
