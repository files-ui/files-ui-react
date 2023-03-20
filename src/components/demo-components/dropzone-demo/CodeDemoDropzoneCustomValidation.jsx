import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneCustomValidation = ({
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
export default CodeDemoDropzoneCustomValidation;

const splittedCodeJSButton = ``;
const splittedCodeTSButton = ``;
const completeCodeJSButton = `import { FileInputButton, FileCard } from "@files-ui/react";
import * as React from "react";

//validate files
// file name must start with the following prefix: "test_file"
// (e.g. a valid file name could be "test_file_photo.png")
const myOwnValidation = (file) => {
  let errorList= [];
  let validResult = true;
  const regExPrefix = /\\btest_file\\w+/;
  if (!file.name.match(regExPrefix)) {
    validResult = false;
    errorList.push('Prefix "test_file" was not present in the file name');
  }
  return { valid: validResult, errors: errorList };
};
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
        accept={"image/*"}
        maxFileSize={280 * 1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", cleanButton: {} }}
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
            <FileCard key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </div>
      )}
    </div>
  );
}`;
const completeCodeTSButton =
  `import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import * as React from "react";

//validate files
// file name must start with the following prefix: "test_file"
// (e.g. a valid file name could be "test_file_photo.png")
const myOwnValidation = (file: File): ValidateFileResponse => {
  let errorList: string[] = [];
  let validResult: boolean = true;
  ` +
  // eslint-disable-next-line
  `const regExPrefix: RegExp = /\btest_file\w+/;
  if (!file.name.match(regExPrefix)) {
    validResult = false;
    errorList.push('Prefix "test_file" was not present in the file name');
  }
  return { valid: validResult, errors: errorList };
};

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
        accept={"image/*"}
        maxFileSize={280 * 1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", cleanButton: {} }}
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
            <FileCard key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </div>
      )}
    </div>
  );
}`;

/////

const splittedCodeJS = ``;
const splittedCodeTS = ``;
const completeCodeJS = `import { Dropzone, FileMosaic } from "@files-ui/react";
import * as React from "react";

//validate files
// file name must start with the following prefix: "test_file"
// (e.g. a valid file name could be "test_file_photo.png")
const myOwnValidation = (file) => {
  let errorList= [];
  let validResult = true;
  const regExPrefix = /\\btest_file\\w+/;
  if (!file.name.match(regExPrefix)) {
    validResult = false;
    errorList.push('Prefix "test_file" was not present in the file name');
  }
  return { valid: validResult, errors: errorList };
};

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
      cleanFiles
      validator={myOwnValidation}
    >
      {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile, ValidateFileResponse } from "@files-ui/react";
import * as React from "react";

//validate files
// file name must start with the following prefix: "test_file"
// (e.g. a valid file name could be "test_file_photo.png")
const myOwnValidation = (file: File): ValidateFileResponse => {
  let errorList: string[] = [];
  let validResult: boolean = true;
  const regExPrefix: RegExp = /\\btest_file\\w+/;
  if (!file.name.match(regExPrefix)) {
    validResult = false;
    errorList.push('Prefix "test_file" was not present in the file name');
  }
  return { valid: validResult, errors: errorList };
};

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
      cleanFiles
      validator={myOwnValidation}
    >
      {files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
    </Dropzone>
  );
}`;
