import * as React from "react";
import {
  Dropzone,
  ExtFile,
  FileCard,
  FileCardProps,
  FileInputButton,
  FileMosaic,
  //FileMosaicProps,
} from "../../../files-ui";

const mainContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  gap: "40px",
  flexWrap: "wrap",
  width: "100%",
};
const itemContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minWidth: "40%",
  gap: "5px",
  alignItems: "center",
};

const DemoDropzoneBehaviour = ({ button = false }) => {
  const [filesAdd, setFilesAdd] = React.useState<ExtFile[]>([]);
  const [filesReplace, setFilesReplace] = React.useState<ExtFile[]>([]);

  const updateFilesAdd = (incommingFiles: ExtFile[]) => {
    setFilesAdd(incommingFiles);
  };
  const updateFilesReplace = (incommingFiles: ExtFile[]) => {
    setFilesReplace(incommingFiles);
  };
  const removeFileAdd = (id: FileCardProps["id"]) => {
    setFilesAdd(filesAdd.filter((x) => x.id !== id));
  };
  const removeFileReplace = (id: FileCardProps["id"]) => {
    setFilesReplace(filesReplace.filter((x) => x.id !== id));
  };
  if (button)
    return (
      <div style={mainContainerStyle}>
        <div style={itemContainerStyle}>
          <FileInputButton
            onChange={updateFilesAdd}
            value={filesAdd}
            label="add"
          />
          {filesAdd.map((file) => (
            <FileCard
              key={file.id}
              {...file}
              onDelete={removeFileAdd}
              info
              preview
            />
          ))}
        </div>
        <div style={itemContainerStyle}>
          <FileInputButton
            onChange={updateFilesReplace}
            value={filesReplace}
            variant="outlined"
            label="replace"
            behaviour="replace"
          />
          {filesReplace.map((file) => (
            <FileCard
              key={file.id}
              {...file}
              onDelete={removeFileReplace}
              info
              preview
            />
          ))}
        </div>
      </div>
    );
  return (
    <div style={mainContainerStyle}>
      <Dropzone
        style={{ width: "min(100% , 420px)" }}
        onChange={updateFilesAdd}
        value={filesAdd}
        label="Dropzone with behaviour=add"
        behaviour={"add"}
      >
        {filesAdd.length > 0 &&
          filesAdd.map((file) => (
            <FileMosaic
              key={file.id}
              {...file}
              onDelete={removeFileAdd}
              info
              preview
            />
          ))}
      </Dropzone>
      <Dropzone
        style={{ width: "min(100% , 420px)" }}
        onChange={updateFilesReplace}
        value={filesReplace}
        label="Dropzone with behaviour=replace"
        behaviour={"replace"}
      >
        {filesReplace.length > 0 &&
          filesReplace.map((file) => (
            <FileMosaic
              key={file.id}
              {...file}
              onDelete={removeFileReplace}
              info
              preview
            />
          ))}
      </Dropzone>
    </div>
  );
};
export default DemoDropzoneBehaviour;
