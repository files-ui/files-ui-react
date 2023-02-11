import * as React from "react";
import { InputButton } from "../../../files-ui";
import { FileMosaic } from "../../../files-ui/components/file-mosaic";
const sampleFile = {
  id: ":0:",
  name: "",
  size: 28 * 1024 * 1024,
  type: "plain/javascript",
  name: "fileeeeee.jsx",
};
const BasicFileMosaicDemo = (props) => {
  const [value, setValue] = React.useState([]);

  const updateFiles = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles);
  };
  const removeFile = () => {
    setValue([]);
  };
  return (
    <>
      {value.length > 0 ? (
        <FileMosaic
          key={sampleFile.id + ":"}
          {...value[0]}
          onDelete={removeFile}
          info
          alwaysActive
        />
      ) : (
        <>
          <InputButton
            label="Browse Files..."
            onChange={updateFiles}
            textDecoration="uppercase"
          />
        </>
      )}
      <FileMosaic
        key={sampleFile.id}
        {...sampleFile}
        onDelete={() => {}}
        info
        alwaysActive
      />
    </>
  );
};
export default BasicFileMosaicDemo;
