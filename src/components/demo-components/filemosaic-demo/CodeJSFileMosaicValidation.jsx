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

const splittedCodeJS = `<>
  {sampleFilesProps.map((extFile) => (
    <FileMosaic key={extFile.id} {...extFile} alwaysActive info preview />
  ))}
</>

// file props
const sampleFilesProps = [
    {
        id: "fileId-1",
        size: 28 * 1024 * 1024,
        type: "plain/javascript",
        name: "file created from props.jsx",
    },
    {
        id: "fileId-2",
        size: 28 * 1024 * 1024,
        type: "image/png",
        name: "valid file created from props.png",
        valid: true,
    },
    {
        id: "fileId-3",
        size: 28 * 1024 * 1024,
        type: "image/jpeg",
        name: "non valid file created from props.jpg",
        valid: false,
    },
];`;

const completeCodeJS = `import * as React from "react";
import { FileMosaic } from "../../../files-ui";

const sampleFilesProps = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "plain/javascript",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: true,
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: false,
  },
];

const DemoFileMosaicValidation = () => {
  return (
    <>
      {sampleFilesProps.map((extFile) => (
        <FileMosaic key={extFile.id} {...extFile} alwaysActive info preview />
      ))}
    </>
  );
};
export default DemoFileMosaicValidation;`;

const splittedCodeTS = `<>
  {sampleFilesProps.map((extFile:ExtFile) => (
    <FileMosaic key={extFile.id} {...extFile} alwaysActive info preview />
  ))}
</>

// file props
const sampleFilesProps:ExtFile[] = [
    {
        id: "fileId-1",
        size: 28 * 1024 * 1024,
        type: "plain/javascript",
        name: "file created from props.jsx",
    },
    {
        id: "fileId-2",
        size: 28 * 1024 * 1024,
        type: "image/png",
        name: "valid file created from props.png",
        valid: true,
    },
    {
        id: "fileId-3",
        size: 28 * 1024 * 1024,
        type: "image/jpeg",
        name: "non valid file created from props.jpg",
        valid: false,
    },
];`;
const completeCodeTS = `import * as React from "react";
import { FileMosaic, ExtFile } from "../../../files-ui";

const sampleFilesProps: ExtFile[] = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "plain/javascript",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: true,
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: false,
  },
];

const DemoFileMosaicValidation = () => {
  return (
    <>
      {sampleFilesProps.map((extFile: ExtFile) => (
        <FileMosaic key={extFile.id} {...extFile} alwaysActive info preview />
      ))}
    </>
  );
};
export default DemoFileMosaicValidation;`;
