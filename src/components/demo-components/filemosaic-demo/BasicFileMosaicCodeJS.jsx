import * as React from "react";
import ShowCode from "../../show-code/ShowCode";

const BasicFileMosaicCodeJS = props =>{
    return(
        <ShowCode
        codeCompleteJS={completeCodeJS}
        codeCompleteTS={completeCodeTS}
        codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSplittedJS={splittedCodeJS}
        codeSplittedTS={splittedCodeTS}
      />
    )
}
export default BasicFileMosaicCodeJS;


const splittedCodeJS = `<>
  {value ? (
    <FileMosaic {...value} onDelete={removeFile} alwaysActive info />
  ) : (
    <InputButton
        label="Browse File..."
        onChange={updateFiles}
        textDecoration="uppercase"
    />
  )}
  <FileMosaic {...sampleFileProps} onDelete={() => {}} alwaysActive info />
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
          <InputButton
            label="Browse File..."
            onChange={updateFiles}
            textDecoration="uppercase"
          />
        )}
        <FileMosaic {...sampleFileProps} onDelete={() => {}} alwaysActive info />
      </div>
    );
  };`;

const completeCodeTS = completeCodeJS;
const splittedCodeTS = splittedCodeJS;
