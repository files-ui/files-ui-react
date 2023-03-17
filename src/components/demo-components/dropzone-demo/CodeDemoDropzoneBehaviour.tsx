import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneBehaviour = ({ splittedOnly = false, button=false }) => {
  if(button) return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJSButton}
      codeCompleteTS={completeCodeTSButton}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJSButton}
      codeSplittedTS={splittedCodeTSButton}
    />
  );
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoDropzoneBehaviour;

const splittedCodeJSButton = `<FileInputButton onChange={updateFilesAdd} value={filesAdd} label="add"/>

{filesAdd.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFileAdd} info preview />
))}

<FileInputButton
  onChange={updateFilesReplace}
  value={filesReplace}
  variant="outlined"
  label="replace"
  behaviour="replace"
/>
{filesReplace.map((file) => (
  <FileCard key={file.id} {...file} onDelete={removeFileReplace} info preview />
))}`;

const splittedCodeTSButton = splittedCodeJSButton;
const completeCodeJSButton = `import * as React from "react";
import { Dropzone, FileCard } from "@files-ui/react";

export default function App() {
    const [filesAdd, setFilesAdd] = React.useState([]);
    const [filesReplace, setFilesReplace] = React.useState([]);

    const updateFilesAdd = (incommingFiles) => {
      setFilesAdd(incommingFiles);
    };
    const updateFilesReplace = (incommingFiles) => {
      setFilesReplace(incommingFiles);
    };
    const removeFileAdd = (id) => {
      setFilesAdd(filesAdd.filter((x) => x.id !== id));
    };
    const removeFileReplace = (id) => {
      setFilesReplace(filesReplace.filter((x) => x.id !== id));
    };

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
};
  
const mainContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  gap: "40px",
  flexWrap: "wrap",
  width: "100%",
};
const itemContainerStyle = {
  display: "flex",
  flexDirection: "column",
  minWidth: "40%",
  gap: "5px",
  alignItems: "center",
};`;

const completeCodeTSButton = `import * as React from "react";
import { FileInputButton, ExtFile, FileCard, FileCardProps } from "@files-ui/react";

export default function App() {
    const [filesAdd, setFilesAdd] = React.useState<ExtFile[]>([]);
    const [filesReplace, setFilesReplace] = React.useState<ExtFile[]>([]);

    const updateFilesAdd = (incommingFiles:ExtFile[]) => {
      setFilesAdd(incommingFiles);
    };
    const updateFilesReplace = (incommingFiles:ExtFile[]) => {
      setFilesReplace(incommingFiles);
    };
    const removeFileAdd = (id:FileCardProps["id"]) => {
      setFilesAdd(filesAdd.filter((x) => x.id !== id));
    };
    const removeFileReplace = (id:FileCardProps["id"]) => {
      setFilesReplace(filesReplace.filter((x) => x.id !== id));
    };

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
};
  
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
};`;




//////
const splittedCodeJS = `<Dropzone
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
</Dropzone>`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

const DemoDropzoneBehaviour = () => {
    const [filesAdd, setFilesAdd] = React.useState([]);
    const [filesReplace, setFilesReplace] = React.useState([]);

    const updateFilesAdd = (incommingFiles) => {
      setFilesAdd(incommingFiles);
    };
    const updateFilesReplace = (incommingFiles) => {
      setFilesReplace(incommingFiles);
    };
    const removeFileAdd = (id) => {
      setFilesAdd(filesAdd.filter((x) => x.id !== id));
    };
    const removeFileReplace = (id) => {
      setFilesReplace(filesReplace.filter((x) => x.id !== id));
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
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
  export default DemoDropzoneBehaviour;`;

const completeCodeTS = `import * as React from "react";
import { Dropzone, ExtFile, FileMosaic, FileMosaicProps } from "@files-ui/react";

const DemoDropzoneBehaviour = () => {
    const [filesAdd, setFilesAdd] = React.useState<ExtFile[]>([]);
    const [filesReplace, setFilesReplace] = React.useState<ExtFile[]>([]);

    const updateFilesAdd = (incommingFiles:ExtFile[]) => {
      setFilesAdd(incommingFiles);
    };
    const updateFilesReplace = (incommingFiles:ExtFile[]) => {
      setFilesReplace(incommingFiles);
    };
    const removeFileAdd = (id:FileMosaicProps["id"]) => {
      setFilesAdd(filesAdd.filter((x) => x.id !== id));
    };
    const removeFileReplace = (id:FileMosaicProps["id"]) => {
      setFilesReplace(filesReplace.filter((x) => x.id !== id));
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
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
  export default DemoDropzoneBehaviour;`;
