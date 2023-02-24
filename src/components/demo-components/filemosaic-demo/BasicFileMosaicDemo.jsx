import * as React from "react";
import { InputButton,FileMosaic } from "../../../files-ui";

const sampleFileProps = {
  id: ":0:",
  size: 28 * 1024 * 1024,
  type: "plain/javascript",
  name: "fileeeeee.jsx",
};
const BasicFileMosaicDemo = (props) => {
  const [value, setValue] = React.useState(undefined);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);

    setValue(incommingFiles[0]);
  };
  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <>
      {value ? (
        <FileMosaic {...value} onDelete={removeFile} alwaysActive info />
      ) : (
        <InputButton
          label="Browse File..."
          onChange={updateFiles}
          textDecoration="uppercase"
        />
      )}
      <FileMosaic {...sampleFileProps} onDelete={() => {}} alwaysActive info />
    </>
  );
};
export default BasicFileMosaicDemo;
