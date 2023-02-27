import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicImagePreview = () => {
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
export default CodeJSFileMosaicImagePreview;

const splittedCodeJS = `<>
  {value ? (
    <FileMosaic {...value} onDelete={removeFile} alwaysActive info preview/>
  ) : (
    <FileInputButton onChange={updateFile} accept="image/*"/>
  )}
  <FileMosaic {...sampleFileProps} alwaysActive info />
</>

// file props
const sampleFileProps = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};`;

const completeCodeJS = `import * as React from "react";
import { InputButton, FileMosaic } from "@files-ui/react";

const sampleFileProps = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
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
        <FileMosaic {...value} onDelete={removeFile} alwaysActive info preview/>
      ) : (
        <FileInputButton onChange={updateFile} accept="image/*"/>
      )}
      <FileMosaic {...sampleFileProps} alwaysActive info />
    </div>
  );
};`;

const splittedCodeTS = `<>
{value ? (
  <FileMosaic {...value} onDelete={removeFile} alwaysActive info preview/>
) : (
  <FileInputButton onChange={updateFile} accept="image/*"/>
)}
<FileMosaic {...sampleFileProps} alwaysActive info />
</>

// file props
const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "Thor arrives wakanda.jpg",
  imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
};`;
const completeCodeTS = `import * as React from "react";
import { InputButton, FileMosaic, ExtFile } from "@files-ui/react";

const sampleFileProps: ExtFile = {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Thor arrives wakanda.jpg",
    imageUrl:"https://cdn.wallpapersafari.com/0/95/1zms6H.jpg"
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
        <FileMosaic {...value} onDelete={removeFile} alwaysActive info preview/>
      ) : (
        <FileInputButton onChange={updateFile} accept="image/*"/>
      )}
      <FileMosaic {...sampleFileProps} alwaysActive info />
    </div>
  );
};`;
