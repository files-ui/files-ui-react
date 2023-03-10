import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicValidation = (card) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS(card)}
      codeCompleteTS={completeCodeTS(card)}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS(card)}
      codeSplittedTS={splittedCodeTS(card)}
    />
  );
};
export default CodeJSFileMosaicValidation;

const splittedCodeJS = (card)=>``;
const splittedCodeTS = (card)=>``;

const completeCodeJS = (card)=>`import * as React from "react";
import { ${card?"FileCard":"FileMosaic"} } from "@files-ui/react";

export default function App() {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {sampleFilesProps.map((extFile) => (
        <${card?"FileCard":"FileMosaic"} key={extFile.id} valid={extFile.valid} {...extFile} info/>
      ))}
    </div>
  );
};

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

const completeCodeTS = (card)=>`import * as React from "react";
import { ${card?"FileCard":"FileMosaic"}, ExtFile } from "@files-ui/react";

export default function App() {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {sampleFilesProps.map((extFile: ExtFile) => (
        <${card?"FileCard":"FileMosaic"} key={extFile.id} valid={extFile.valid} {...extFile} info/>
      ))}
    </div>
  );
};

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
