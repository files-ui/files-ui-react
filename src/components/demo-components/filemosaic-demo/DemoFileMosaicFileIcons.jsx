import * as React from "react";
import { FileMosaic,createListOfMultiTypeFile } from "../../../files-ui";

/* const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
}; */
const DemoFileMosaicFileIcons = () => {
  const [files, setFiles] = React.useState([]);

  const removeFile = (id) => {
    console.log("delete button clicked on file: " + id);
  };

  React.useEffect(() => {
    const validateFiles = createListOfMultiTypeFile(28*1024*1024).map((x, index) => {
      return {
        id:index,
        size: 28 * 1024 * 1024,
        type: x.type,
        name: x.name,
      };
    });
    //console.log(validateFiles);
    setFiles(validateFiles);
  }, []);
  return (
    <>
      {files.map((f, index) => (
        <FileMosaic {...f} key={f.id} onDelete={removeFile} info />
      ))}
    </>
  );
};
export default DemoFileMosaicFileIcons;
