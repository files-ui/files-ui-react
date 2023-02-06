import * as React from "react";
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
  const removeFile = () => {
    setValue([]);
  };
  return (
    <>
      <FileMosaic
        key={sampleFile.id}
        {...sampleFile}
        onDelete={() => {}}
        info
        alwaysActive
      />
      {value.length>0 ? (
        <FileMosaic
          key={sampleFile.id + ":"}
          {...value[0]}
          onDelete={removeFile}
          info
          alwaysActive
        />
      ) : (
        <div onClick={() => setValue([sampleFile])}>InputFileButton</div>
      )}
    </>
  );
};
export default BasicFileMosaicDemo;
