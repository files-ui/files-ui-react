import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDownload1 = (props: { card?: boolean }) => {
  const { card } = props;
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoDownload1;

const splittedCodeJS = ``;
const splittedCodeTS = ``;

const completeCodeJS = `import * as React from "react";
import { FileCard, FileMosaic } from "@files-ui/react";

const sampleFile = {
  size: 28 * 1024 * 1024,
  type: "video/mp4",
  name: "NarutoAndSasukevsMomoshiiki.mp4",
};

const VIDEO_URL = "/videodemo/NarutoEN.mp4";

const DemoDownloadSameOrigin = () => {
  return (
    <>
      <FileMosaic id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
      <FileCard id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
    </>
  );
};
export default DemoDownloadSameOrigin;`;


const completeCodeTS =  `import * as React from "react";
import { FileCard, FileMosaic, ExtFile } from "../../../files-ui";

const sampleFile: ExtFile = {
  size: 28 * 1024 * 1024,
  type: "video/mp4",
  name: "NarutoAndSasukevsMomoshiiki.mp4",
};

const VIDEO_URL = "/videodemo/NarutoEN.mp4";

const DemoDownloadSameOrigin = () => {
  return (
    <>
      <FileMosaic id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
      <FileCard id={4} {...sampleFile} downloadUrl={VIDEO_URL} />
    </>
  );
};
export default DemoDownloadSameOrigin;`;
