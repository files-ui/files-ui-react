import * as React from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
} from "../../../files-ui";
import { CustomValidateFileResponse } from "../../../files-ui/core";
const myOwnValidation = (file: File): CustomValidateFileResponse => {
  let errorList: string[] = [];
  let validResult: boolean = false;
  return { valid: validResult, errors: errorList };
};
const DemoDropzoneCustomValidation = () => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: FileMosaicProps["id"]) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      accept={"image/*"}
      maxFileSize={28 * 1024}
      maxFiles={2}
      //cleanFiles
      actionButtons={{ position: "bottom", cleanButton: {} }}
      validator={myOwnValidation}
    >
      {files.length > 0 &&
        files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneCustomValidation;
