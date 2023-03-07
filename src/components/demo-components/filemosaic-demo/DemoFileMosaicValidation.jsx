import * as React from "react";
import { FileMosaic } from "../../../files-ui";

const sampleFilesProps = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: false,
    errors: ["File is too big", "File type is not allowed"]
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: true,
  },
];

const DemoFileMosaicValidation = () => {
  return (
    <>
      {sampleFilesProps.map((extFile) => (
        <FileMosaic key={extFile.id} {...extFile} info />
      ))}
    </>
  );
};
export default DemoFileMosaicValidation;
