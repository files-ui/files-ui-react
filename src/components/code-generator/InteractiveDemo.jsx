import React, { Fragment, useState } from "react";
import { Dropzone, FileItem, FullScreenPreview } from "../../dropzone-ui";
import "./InteractiveDemo.scss";
const InteractiveDemo = (props) => {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    //console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    //console.log("list cleaned", files);
  };
  return (
    <Fragment>
      <Dropzone
        style={{ minWidth: "550px" }}
        onChange={updateFiles}
        minHeight="180px"
        onClean={handleClean}
        value={files}
        maxFiles={10}
        maxFileSize={5698000}
        accept=".png,image/*"
        url="http://ec2-99-99-9-9.compute-1.amazonaws.com:2800/upload-my-file"
        //of course this url doens´t work, is only to make upload button visible
        uploadOnDrop
        fakeUploading
      >
        {files.length > 0 &&
          files.map((file) => (
            <FileItem
              {...file}
              key={file.id}
              onDelete={onDelete}
              onSee={handleSee}
              preview
              info
              hd
            />
          ))}
      </Dropzone>{" "}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      />
      <div className="dui-demo-container">
        <div className="dui-demo-paper"></div>
      </div>
    </Fragment>
  );
};
export default InteractiveDemo;
