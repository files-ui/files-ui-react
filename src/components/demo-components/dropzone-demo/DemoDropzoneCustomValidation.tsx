import * as React from "react";
import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
  ValidateFileResponse,
  FileInputButton,
  FileCard,
} from "../../../files-ui";

//validate files
// file name must start with the following prefix: "test_file"
// (e.g. a valid file name could be "test_file_photo.png")
const myOwnValidation = (file: File): ValidateFileResponse => {
  let errorList: string[] = [];
  let validResult: boolean = true;
  const regExPrefix: RegExp = /\btest_file\w+/;
  if (!file.name.match(regExPrefix)) {
    validResult = false;
    errorList.push('Prefix "test_file" was not present in the file name');
  }
  return { valid: validResult, errors: errorList };
};
const DemoDropzoneCustomValidation = (props: { button: boolean }) => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles: ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: FileMosaicProps["id"]) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  if (props.button)
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
          //autoClean
          validator={myOwnValidation}
        />
        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "5px",
              minWidth: "50%",
            }}
          >
            {files.map((file) => (
              <FileCard key={file.id} {...file} onDelete={removeFile} info />
            ))}
          </div>
        )}
      </div>
    );
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      accept={"image/*"}
      maxFileSize={28 * 1024}
      maxFiles={2}
      cleanFiles
      validator={myOwnValidation}
    >
      {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
};
export default DemoDropzoneCustomValidation;
