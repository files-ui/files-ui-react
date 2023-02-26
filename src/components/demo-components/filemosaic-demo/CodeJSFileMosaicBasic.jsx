import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicBasic = (props) => {
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
export default CodeJSFileMosaicBasic;

const splittedCodeJS = `<>
  {value ? (
    <FileMosaic {...value} onDelete={removeFile} alwaysActive info />
  ) : (
    <FileInputButton onChange={updateFile} />
  )}
  <FileMosaic {...sampleFileProps} alwaysActive info />
</>`;

const completeCodeJS = `import * as React from "react";
import { InputButton, FileMosaic } from "@files-ui/react";

const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "plain/javascript",
  name: "fileeeeee.jsx",
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
        <FileMosaic {...value} onDelete={removeFile} alwaysActive info />
      ) : (
        <FileInputButton onChange={updateFile} />
      )}
      <FileMosaic {...sampleFileProps} alwaysActive info />
    </div>
  );
};`;

const completeCodeTS = completeCodeJS;
const splittedCodeTS = splittedCodeJS;
