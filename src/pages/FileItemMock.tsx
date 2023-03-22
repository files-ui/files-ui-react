import * as React from "react";
import {
  FileMosaic,
  FileMosaicProps,
  ExtFile,
  UPLOADSTATUS,
} from "../files-ui";

const baseFiles: ExtFile[] = [
  {
    id: Math.random(),
    name: "A very very long title for files-ui.jsx",
    type: "text/plain",
    size: 280000,
    //valid: true,
    uploadMessage: "File was succesfuly upoaded to server in year 2014",
  },
  {
    id: Math.random(),
    name: "A very very long title for files-ui.png",
    type: "image/png",
    size: 280000,
    valid: false,
    errors: ["File was uploaded from Saturn", "HAAAAAAAAAA"],
    //progress: 28,
    //uploadStatus: "preparing",
    // imageUrl:
    // "https://super-ficcion.com/wp-content/uploads/2022/10/como-podria-regresar-iron-man-1-780x470.webp",
  },
  {
    id: Math.random(),
    name: "A very very long title for files-ui.png",
    type: "image/png",
    size: 280000,
    valid: true,
    uploadStatus: "preparing",
    imageUrl:
      "https://super-ficcion.com/wp-content/uploads/2022/10/como-podria-regresar-iron-man-1-780x470.webp",
  },
];
const FileItemMock = ({ darkMode = false, mosaic = false }) => {
  const [files, setFiles] = React.useState(baseFiles);

  const [newProgress, setNewProgress] = React.useState<number>(45);
  let completed = false;
  //let interval: NodeJS.Timer | null = null;

  const removeFile = (id: string | number | undefined) => {
    setFiles((files) => files.filter((f) => f.id !== id));
  };
  const handleSee = () => {};

  const changeStatus = (
    status: UPLOADSTATUS | undefined,
    id?: FileMosaicProps["id"]
  ) => {
    if (id !== undefined) {
      setFiles(
        files.map((f) => {
          if (id === f.id) {
            return {
              ...f,
              uploadStatus: status,
            };
          } else
            return {
              ...f,
            };
        })
      );
    } else
      setFiles(
        files.map((f) => {
          return {
            ...f,
            uploadStatus: status,
            uploadMessage:
              status === "success"
                ? "EXITOOOO HAAAAA"
                : status === "error"
                ? "Pinche error de los conjones"
                : status === "aborted"
                ? "File uplaod was aborted"
                : undefined,
          };
        })
      );
  };
  const cleanStatus = () => {
    setFiles(
      files.map((f) => {
        return {
          ...f,
          uploadStatus: undefined,
        };
      })
    );
  };

  const handleProgress = () => {
    setNewProgress((newProgress) => {
      let newProgValue = 0;

      if (completed) {
        completed = false;
        newProgValue = 0;
      } else if (newProgress >= 100) {
        //clearInterval(interval as NodeJS.Timeout);
        newProgValue = 100;
        completed = true;
      } else {
        newProgValue = newProgress + 10;
      }

      return newProgValue;
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => changeStatus("preparing")}>preparing</button>
        <button onClick={() => changeStatus("uploading")}>uploading</button>
        <button onClick={() => changeStatus("success")}>sucess</button>
        <button onClick={() => changeStatus("error")}>error</button>
        <button onClick={() => changeStatus("aborted")}>aborted</button>
        <button onClick={cleanStatus}>clean</button>
        <button onClick={handleProgress}>progress</button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {mosaic ? (
          <>
            {files.map((file, index) => (
              <FileMosaic
                key={file.id || 1 + 1}
                {...file}
                localization={"ES-es"}
                // preview
                onDelete={removeFile}
                //onSee={handleSee}
                info
                //alwaysActive
                progress={newProgress}
                //hd
                //backgroundBlurImage={false}
                resultOnTooltip
                darkMode={darkMode}
                onAbort={() => changeStatus("aborted", file.id)}
                onCancel={() => changeStatus(undefined, file.id)}
              />
            ))}
          </>
        ) : (
          <>
            {files.map((file, index) => (
              <FileMosaic
                key={file.id || 1 + 10}
                {...file}
                preview
                onDelete={removeFile}
                onSee={handleSee}
                info
                alwaysActive
                progress={25}
                darkMode={darkMode}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default FileItemMock;
