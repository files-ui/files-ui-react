import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicDarkMode = (props: { card?: boolean }) => {
  const { card } = props;
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS(card)}
      codeCompleteTS={completeCodeTS(card)}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS(card)}
      codeSplittedTS={splittedCodeTS(card)}
    />
  );
};
export default CodeJSFileMosaicDarkMode;

const splittedCodeJS = (card?: boolean) =>
  card
    ? ""
    : `<>
  <${
    card ? "FileCard" : "FileMosaic"
  } {...sampleFileProps} info onDelete={removeFile} />
  <${
    card ? "FileCard" : "FileMosaic"
  } {...sampleFileProps} info onDelete={removeFile} darkMode/>
</>`;
const splittedCodeTS = (card?: boolean) =>
  card
    ? ""
    : `<>
  <${
    card ? "FileCard" : "FileMosaic"
  } {...sampleFileProps} info onDelete={removeFile} />
  <${
    card ? "FileCard" : "FileMosaic"
  } {...sampleFileProps} info onDelete={removeFile} darkMode/>
</>`;

const completeCodeJS = (card?: boolean) =>
  card
    ? `import { ${card ? "FileCard" : "FileMosaic"} } from "@files-ui/react";
const sampleFilePropsCard = (elevationNumber) => {
  return {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "elevation=" + elevationNumber + ".jsx",
    valid: true,
  };
};
const Demo${card ? "FileCard" : "FileMosaic"}DarkMode = () => {
  const removeFile = (id) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
          padding: "25px 0",
          flexGrow: 1,
          gap: "7px",
        }}
      >
        {[0, 4, 16, 24].map((elevation) => (
          <FileCard
            key={elevation}
            {...sampleFilePropsCard(elevation)}
            onDelete={removeFile}
            info
            elevation={elevation}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#121212",
          alignItems: "center",
          padding: "25px 0",
          flexGrow: 1,
          gap: "7px",
        }}
      >
        {[0, 4, 16, 24].map((elevation) => (
          <FileCard
            key={elevation}
            {...sampleFilePropsCard(elevation)}
            onDelete={removeFile}
            darkMode
            info
            elevation={elevation}
          />
        ))}
      </div>
    </>
  );
export default Demo${card ? "FileCard" : "FileMosaic"}DarkMode;`
    : `import * as React from "react";
import { ${card ? "FileCard" : "FileMosaic"} } from "@files-ui/react";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
const Demo${card ? "FileCard" : "FileMosaic"}DarkMode = () => {
  const removeFile = (id) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "25px 0",
          flexGrow:1
        }}
      >
        <${
          card ? "FileCard" : "FileMosaic"
        } {...sampleFileProps} info onDelete={removeFile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#121212",
          padding: "25px 0",
          flexGrow:1
        }}
      >
        <${
          card ? "FileCard" : "FileMosaic"
        } {...sampleFileProps} info darkMode onDelete={removeFile} />
      </div>
    </div>
  );
};
export default Demo${card ? "FileCard" : "FileMosaic"}DarkMode;`;

const completeCodeTS = (card?: boolean) =>
  card
    ? `import { ${
        card ? "FileCard" : "FileMosaic"
      }, ExtFile, FileCardProps } from "@files-ui/react";
const sampleFilePropsCard = (elevationNumber: number): ExtFile => {
  return {
    id: "fileId",
    size: 28 * 1024 * 1024,
    type: "text/plain",
    name: "elevation=" + elevationNumber + ".jsx",
    valid: true,
  };
};
const Demo${card ? "FileCard" : "FileMosaic"}DarkMode = () => {
  const removeFile = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
          padding: "25px 0",
          flexGrow: 1,
          gap: "7px",
        }}
      >
        {[0, 4, 16, 24].map((elevation) => (
          <FileCard
            key={elevation}
            {...sampleFilePropsCard(elevation)}
            onDelete={removeFile}
            info
            elevation={elevation as FileCardProps["elevation"]}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#121212",
          alignItems: "center",
          padding: "25px 0",
          flexGrow: 1,
          gap: "7px",
        }}
      >
        {[0, 4, 16, 24].map((elevation) => (
          <FileCard
            key={elevation}
            {...sampleFilePropsCard(elevation)}
            onDelete={removeFile}
            darkMode
            info
            elevation={elevation as FileCardProps["elevation"]}
          />
        ))}
      </div>
    </>
  );
export default Demo${card ? "FileCard" : "FileMosaic"}DarkMode;
`
    : `import * as React from "react";
import { ExtFile, ${card ? "FileCard" : "FileMosaic"} } from "@files-ui/react";

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
const Demo${card ? "FileCard" : "FileMosaic"}DarkMode = () => {
  const removeFile = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "25px 0",
          flexGrow:1
        }}
      >
        <${
          card ? "FileCard" : "FileMosaic"
        } {...sampleFileProps} info onDelete={removeFile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#121212",
          padding: "25px 0",
          flexGrow:1
        }}
      >
        <${
          card ? "FileCard" : "FileMosaic"
        } {...sampleFileProps} info darkMode onDelete={removeFile} />
      </div>
    </div>
  );
};
export default Demo${card ? "FileCard" : "FileMosaic"}DarkMode;`;
