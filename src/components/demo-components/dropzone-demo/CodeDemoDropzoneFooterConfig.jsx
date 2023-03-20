import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneFooterConfig = ({ splittedOnly = false }) => {
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
export default CodeDemoDropzoneFooterConfig;

const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  value={files}
  footerConfig={{ customMessage: "This is a custom message..." }}
>
  {files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
  onChange={updateFiles}
  value={files}
  footerConfig={{ customMessage: "This is a custom message..." }}
>
  {files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const completeCodeJS = `import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

export default function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      footerConfig={{ customMessage: "This is a custom message..." }}
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
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
    <Dropzone
      onChange={updateFiles}
      value={files}
      footerConfig={{ customMessage: "This is a custom message..." }}
    >
      {files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;
