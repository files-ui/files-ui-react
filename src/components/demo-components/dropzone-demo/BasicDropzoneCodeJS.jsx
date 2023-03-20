import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const BasicDropzoneCode = ({ splittedOnly = false, button = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={button ? completeCodeJSButton : completeCodeJS}
      codeCompleteTS={button ? completeCodeTSButton : completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={button ? splittedCodeJSButton : splittedCodeJS}
      codeSplittedTS={button ? splittedCodeTSButton : splittedCodeTS}
    />
  );
};
export default BasicDropzoneCode;

const splittedCodeJSButton = `<FileInputButton onChange={updateFiles} value={files} />

{files.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFile} info />
))}`;
const splittedCodeTSButton = `<FileInputButton onChange={updateFiles} value={files} />

{files.map((file: ExtFile) => (
  <FileCard key={file.id} {...file} onDelete={removeFile} info />
))}`;

const completeCodeJSButton = `import { FileInputButton, FileCard } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoFileInputButton() {
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "10px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <FileInputButton onChange={updateFiles} value={files} />
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"5px",
            minWidth:"50%"
          }}
        >
          {files.map((file) => (
            <FileCard key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </div>
      )}
    </div>
  );
}`;
const completeCodeTSButton = `import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoFileInputButton() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "10px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <FileInputButton onChange={updateFiles} value={files} />
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"5px",
            minWidth:"50%"
          }}
        >
          {files.map((file: ExtFile) => (
            <FileCard key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </div>
      )}
    </div>
  );
}`;

//////////
const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  value={files}
>
  {files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
  onChange={updateFiles}
  value={files}
>
  {files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true}/>
    ))}
</Dropzone>`;
const completeCodeJS = `import { Dropzone,FileMosaic } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoDropzone() {
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
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function BasicDemoDropzone() {
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
    >
      {files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
    </Dropzone>
  );
}`;
