import * as React from "react";
import { FileMosaic } from "../../../files-ui";

const sampleFilesProps = [
  {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "plain/javascript",
    name: "file created from props.jsx",
  },
  {
    id: "fileId-2",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "valid file created from props.png",
    valid: true,
  },
  {
    id: "fileId-3",
    size: 28 * 1024 * 1024,
    type: "image/jpeg",
    name: "non valid file created from props.jpg",
    valid: false,
  },
];

const DemoFileMosaicValidation = () => {
  return (
    <>
      {sampleFilesProps.map((extFile) => (
        <FileMosaic key={extFile.id} {...extFile} alwaysActive info preview />
      ))}
    </>
  );
};
export default DemoFileMosaicValidation;
