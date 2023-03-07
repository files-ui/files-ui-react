import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicDarkMode = () => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeJSFileMosaicDarkMode;

const splittedCodeJS = `<>
  <FileMosaic {...sampleFileProps} info onDelete={removeFile} />
  <FileMosaic {...sampleFileProps} info onDelete={removeFile} darkMode/>
</>`;
const splittedCodeTS = `<>
<FileMosaic {...sampleFileProps} info onDelete={removeFile} />
<FileMosaic {...sampleFileProps} info onDelete={removeFile} darkMode/>
</>`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "@files-ui/react";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
const DemoFileMosaicDarkMode = () => {
  const removeFile = (id) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "white",
          padding: "10px 0",
        }}
      >
        <FileMosaic {...sampleFileProps} info onDelete={removeFile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "#121212",
          padding: "10px 0",
        }}
      >
        <FileMosaic {...sampleFileProps} info darkMode onDelete={removeFile} />
      </div>
    </>
  );
};
export default DemoFileMosaicDarkMode;
`;

const completeCodeTS = `import * as React from "react";
import { ExtFile, FileMosaic } from "@files-ui/react";

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
const DemoFileMosaicDarkMode = () => {
  const removeFile = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "white",
          padding: "10px 0",
        }}
      >
        <FileMosaic {...sampleFileProps} info onDelete={removeFile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "#121212",
          padding: "10px 0",
        }}
      >
        <FileMosaic {...sampleFileProps} info darkMode onDelete={removeFile} />
      </div>
    </>
  );
};
export default DemoFileMosaicDarkMode;
`;
