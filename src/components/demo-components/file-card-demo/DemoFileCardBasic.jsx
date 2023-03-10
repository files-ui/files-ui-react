import * as React from "react";
import { FileCard, FileInputButton, FileMosaic } from "../../../files-ui";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
const DemoFileCardBasic = (props) => {
  const [value, setValue] = React.useState(undefined);

  const updateFile = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };

  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <>
      {value ? (
        <FileCard {...value} onDelete={removeFile} info/>
      ) : (
        <FileInputButton value={value ? [value] : []} onChange={updateFile} />
      )}
      <FileCard {...sampleFileProps} info/>
    </>
  );
};
export default DemoFileCardBasic;
