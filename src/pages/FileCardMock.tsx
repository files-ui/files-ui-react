import * as React from "react";
import { FileCard, ExtFile } from "../files-ui";
const baseFiles: ExtFile[] = [
  {
    id: Math.random(),
    name: "A very very long title for files-ui.jsx",
    type: "text/plain",
    size: 280000,
    valid: true,
  },
  {
    id: Math.random(),
    name: "A very very long title for files-ui.png",
    type: "image/png",
    size: 280000,
    valid: true,
    uploadStatus: "uploading",
    imageUrl:
      "https://super-ficcion.com/wp-content/uploads/2022/10/como-podria-regresar-iron-man-1-780x470.webp",
  },
];
const FileCardMock = ({ darkMode = false, elevation = 2 }) => {
  const [files, setFiles] = React.useState(baseFiles);
  const removeFile = (id: string | number | undefined) => {
    setFiles((files) => files.filter((f) => f.id !== id));
  };
  const handleSee = () => {};
  return (
    <>
      {files.map((file, index) => (
        <FileCard
          key={file.id}
          {...file}
          preview
          onDelete={removeFile}
          onSee={handleSee}
          info
          alwaysActive
          //hd
          elevation={2}
          darkMode={darkMode}
          onCancel={() => {}}
          progress={25}
        />
      ))}
    </>
  );
};
export default FileCardMock;
