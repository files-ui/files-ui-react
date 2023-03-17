import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneUploading = ({
  splittedOnly = false,
  button = false,
}) => {
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
export default CodeDemoDropzoneUploading;

const splittedCodeJSButton = `<FileInputButton
  onChange={updateFiles}
  value={files}
  accept={"image/*"}
  maxFileSize={28 * 1024 * 1024}
  maxFiles={2}
  actionButtons={{
    position: "bottom",
    uploadButton: {},
    abortButton: {},
  }}
  uploadConfig={{
    url: "https://www.myawsomeserver.com/upload",
    method: "POST",
    headers: {
      Authorization:
        "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
    },
    cleanOnUpload: true,
  }}
  onUploadFinish={handleFinishUpload}
  fakeUpload
/>
{files.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
))}`;
const splittedCodeTSButton = `<FileInputButton
  onChange={updateFiles}
  value={files}
  accept={"image/*"}
  maxFileSize={28 * 1024 * 1024}
  maxFiles={2}
  actionButtons={{
    position: "bottom",
    uploadButton: {},
    abortButton: {},
  }}
  uploadConfig={{
    url: "https://www.myawsomeserver.com/upload",
    method: "POST",
    headers: {
      Authorization:
        "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
    },
    cleanOnUpload: true,
  }}
  onUploadFinish={handleFinishUpload}
  fakeUpload
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
  const handleFinishUpload=(uploadedFiles)=>{
    console.log("Upload has finished", uploadedFiles);
  }
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
        accept={"image/*"}
        maxFileSize={28 * 1024 * 1024}
        maxFiles={2}
        actionButtons={{
          position: "bottom",
          uploadButton: {},
          abortButton: {},
        }}
        uploadConfig={{
          url: "https://www.myawsomeserver.com/upload",
          method: "POST",
          headers: {
            Authorization:
              "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
          },
          cleanOnUpload: true,
        }}
        onUploadFinish={handleFinishUpload}
        fakeUpload
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
  const handleFinishUpload=(uploadedFiles:ExtFile[])=>{
    console.log("Upload has finished", uploadedFiles);
  }
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
        accept={"image/*"}
        maxFileSize={28 * 1024 * 1024}
        maxFiles={2}
        actionButtons={{
          position: "bottom",
          uploadButton: {},
          abortButton: {},
        }}
        uploadConfig={{
          url: "https://www.myawsomeserver.com/upload",
          method: "POST",
          headers: {
            Authorization:
              "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
          },
          cleanOnUpload: true,
        }}
        onUploadFinish={handleFinishUpload}
        fakeUpload
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
    accept={"image/*"}
    maxFileSize={28 * 1024*1024}
    maxFiles={2}
    actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
    uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        headers: {
            Authorization:
            "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        },
        cleanOnUpload: true,
    }}
    onUploadFinish={handleFinishUpload}
    fakeUpload
>
  {files.length > 0 &&
    files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
    onChange={updateFiles}
    value={files}
    accept={"image/*"}
    maxFileSize={28 * 1024*1024}
    maxFiles={2}
    actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
    uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        headers: {
            Authorization:
            "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        },
        cleanOnUpload: true,
    }}
    onUploadFinish={handleFinishUpload}
    fakeUpload
>
  {files.length > 0 &&
    files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview/>
    ))}
</Dropzone>`;
const completeCodeJS = `import { Dropzone,FileMosaic } from "@files-ui/react";
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
    <Dropzone
        onChange={updateFiles}
        value={files}
        accept={"image/*"}
        maxFileSize={28 * 1024*1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
        uploadConfig={{
            url: "https://www.myawsomeserver.com/upload",
            method: "POST",
            headers: {
                Authorization:
                "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
            },
            cleanOnUpload: true,
        }}
        fakeUpload
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview/>
        ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

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
        accept={"image/*"}
        maxFileSize={28 * 1024*1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
        uploadConfig={{
            url: "https://www.myawsomeserver.com/upload",
            method: "POST",
            headers: {
                Authorization:
                "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
            },
            cleanOnUpload: true,
        }}
        fakeUpload
    >
      {files.length > 0 &&
        files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview/>
        ))}
    </Dropzone>
  );
}`;
