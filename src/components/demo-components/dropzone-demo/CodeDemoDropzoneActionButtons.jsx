import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoActionButtons = ({ splittedOnly = false, button }) => {
  if (button)
    return (
      <ShowDemoCode
        splittedOnly={splittedOnly}
        codeCompleteJS={completeCodeJSButton}
        codeCompleteTS={completeCodeTSButton}
        codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
        codeSplittedJS={splittedCodeJSButton}
        codeSplittedTS={splittedCodeTSButton}
      />
    );
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
export default CodeDemoActionButtons;

const splittedCodeJSButton = `<FileInputButton
  onChange={updateFiles}
  value={files}
  autoClean
  uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
  fakeUpload
  actionButtons={{
    position: "bottom",
    uploadButton: { style: { textTransform: "uppercase" } },
    abortButton: {},
    cleanButton: {},
    deleteButton: {},
  }}
/>
{files.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
))}`;
const splittedCodeTSButton = `<FileInputButton
  onChange={updateFiles}
  value={files}
  autoClean
  uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
  fakeUpload
  actionButtons={{
    position: "bottom",
    uploadButton: { style: { textTransform: "uppercase" } },
    abortButton: {},
    cleanButton: {},
    deleteButton: {},
  }}
/>
{files.map((file: ExtFile) => (
    <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
))}`;
const completeCodeJSButton = `import { FileInputButton, FileCard } from "@files-ui/react";
import * as React from "react";

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
      <FileInputButton
        onChange={updateFiles}
        value={files}
        autoClean
        uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
        fakeUpload
        actionButtons={{
          position: "bottom",
          uploadButton: { style: { textTransform: "uppercase" } },
          abortButton: {},
          cleanButton: {},
          deleteButton: {},
        }}
      />
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
            <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
          ))}
        </div>
      )}
    </div>
  );
}`;
const completeCodeTSButton = `import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function App() {
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
      <FileInputButton
        onChange={updateFiles}
        value={files}
        autoClean
        uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
        fakeUpload
        actionButtons={{
          position: "bottom",
          uploadButton: { style: { textTransform: "uppercase" } },
          abortButton: {},
          cleanButton: {},
          deleteButton: {},
        }}
      />
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
            <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
          ))}
        </div>
      )}
    </div>
  );
}`;

/////

const splittedCodeJS = `<Dropzone
    onChange={updateFiles}
    value={files}
    autoClean
    uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
    fakeUpload
    actionButtons={{
      position: "bottom",
      uploadButton: { style: { textTransform: "uppercase" } },
      abortButton: {},
      cleanButton: {},
      deleteButton: {},
    }}
>
  {files.length > 0 &&
    files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
    onChange={updateFiles}
    value={files}
    autoClean
    uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
    fakeUpload
    actionButtons={{
      position: "bottom",
      uploadButton: { style: { textTransform: "uppercase" } },
      abortButton: {},
      cleanButton: {},
      deleteButton: {},
    }}
>
  {files.length > 0 &&
    files.map((file: ExtFile) => (
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
        autoClean
        uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
        fakeUpload
        actionButtons={{
            position: "bottom",
            uploadButton: { style: { textTransform: "uppercase" } },
            abortButton: {},
            cleanButton: {},
            deleteButton: {},
        }}
    >
      {files.length > 0 &&
        files.map((file) => (
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
        autoClean
        uploadConfig={{ url: "https://www.myawsomeserver.com/upload" }}
        fakeUpload
        actionButtons={{
            position: "bottom",
            uploadButton: { style: { textTransform: "uppercase" } },
            abortButton: {},
            cleanButton: {},
            deleteButton: {},
        }}
    >
      {files.length > 0 &&
        files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;
