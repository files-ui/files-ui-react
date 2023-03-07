import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicValidation = () => {
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
export default CodeJSFileMosaicValidation;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "../../../files-ui";

const DemoFileMosaicValidation = () => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {sampleFilesProps.map((extFile) => (
        <FileMosaic key={extFile.id} valid={extFile.valid} {...extFile} info/>
      ))}
    </div>
  );
};
export default DemoFileMosaicValidation;

const sampleFilesProps = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: false,
    errors: ["File is too big", "File type is not allowed"]
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: true,
  },
];`;

const completeCodeTS = `import * as React from "react";
import { FileMosaic, ExtFile } from "../../../files-ui";

const DemoFileMosaicValidation = () => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {sampleFilesProps.map((extFile: ExtFile) => (
        <FileMosaic key={extFile.id} valid={extFile.valid} {...extFile} info/>
      ))}
    </div>
  );
};
export default DemoFileMosaicValidation;

const sampleFilesProps: ExtFile[] = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: false,
    errors: ["File is too big", "File type is not allowed"]
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: true,
  },
];`;
