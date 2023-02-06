import * as React from "react";

import { Dropzone } from "../files-ui/components";
import { FileMosaic } from "../files-ui/components/file-mosaic";
import DescParagraph from "./demo-components/desc-paragraph/DescParagraph";
import SubTitle from "./demo-components/sub-title/SubTitle";

const reactFile = {
  id: "acsacasf",
  name: "A very very long title for files-ui.jsx",
  type: "text/plain",
  size: 280000,
};

const baseFiles = [reactFile];
const DropzoneMainPage = ({ darkMode = false }) => {
  const [files, setFiles] = React.useState(baseFiles);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    console.log("MainPage incommingFiles",incommingFiles);

    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    console.log("handleSee-imageSource");
  };

  return (
    <React.Fragment>
      <SubTitle content={"Try this out!"} darkMode={darkMode} />
      <DescParagraph darkMode={darkMode}>
        Have fun with files-ui. Just drag'n drop some files and see the magic
        happens
      </DescParagraph>
      <Dropzone
        style={{ borderRadius: "16px" }}
        // minHeight="400px"
        onChange={updateFiles}
        value={files}
        maxFileSize={28*1024}
        maxFiles={4}
        accept=".jpg, .png, application/json, video/*"
        fakeUpload
        behaviour="add"
        //uploadConfig={{ autoUpload: true, url:"fdbd" }}
      >
        {files.length > 0 &&
          files.map((file) => (
            <FileMosaic
              darkMode={darkMode}
              {...file}
              preview
              onDelete={removeFile}
              key={file.id}
              info
              alwaysActive
              hd
              onSee={handleSee}
            />
          ))}
      </Dropzone>

      <DescParagraph margin="10px 0" darkMode={darkMode}>
        <b>Note: </b> Files are not actually uploaded, this is just a demo :D
      </DescParagraph>
    </React.Fragment>
  );
};
export default DropzoneMainPage;
