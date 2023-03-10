import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileCardBasic = ({ card }) => {
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
export default CodeJSFileCardBasic;

const splittedCodeJS = (card) => `<>
  {value ? (
    <${!card ? "FileMosaic" : "FileCard"} {...value} onDelete={removeFile} />
  ) : (
    <FileInputButton value={value ? [value] : []} onChange={updateFile} />
  )}
  <${!card ? "FileMosaic" : "FileCard"} {...sampleFileProps} />
</>

// file props
const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};`;

const completeCodeJS = (card) => `import * as React from "react";
import { InputButton, FileCard } from "@files-ui/react";

const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};

export default function App() {
  const [value, setValue] = React.useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {value ? (
        <${
          !card ? "FileMosaic" : "FileCard"
        } {...value} onDelete={removeFile} info/>
      ) : (
        <FileInputButton value={value ? [value] : []} onChange={updateFile} />
      )}
      <${!card ? "FileMosaic" : "FileCard"} {...sampleFileProps} info/>
    </div>
  );
};`;

const splittedCodeTS = (card) => `<>
  {value ? (
    <${!card ? "FileMosaic" : "FileCard"} {...value} onDelete={removeFile} info/>
  ) : (
    <FileInputButton value={value ? [value] : []} onChange={updateFile} />
  )}
  <${!card ? "FileMosaic" : "FileCard"} {...sampleFileProps} info/>
</>

// file props
const sampleFileProps: ExtFile = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};`;
const completeCodeTS = (card) => `import * as React from "react";
import { InputButton, FileCard, ExtFile } from "@files-ui/react";

const sampleFileProps:ExtFile = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};

export default function App() {
  const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

  const updateFiles = (incommingFiles:ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <div style={{display:"flex", gap:"10px"}}>
      {value ? (
        <${
          !card ? "FileMosaic" : "FileCard"
        } {...value} onDelete={removeFile} info/>
      ) : (
        <FileInputButton value={value ? [value] : []} onChange={updateFile} />
      )}
      <${!card ? "FileMosaic" : "FileCard"} {...sampleFileProps} info/>
    </div>
  );
};`;
