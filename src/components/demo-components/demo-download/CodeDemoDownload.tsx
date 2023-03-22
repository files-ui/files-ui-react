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

const outsideDownloadUrl = "https://steamuserimages-a.akamaihd.net/ugc/964219647714510750/C4D97B0E1ECCE3E8A505AFBC8EAD8945E2223C41/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const sampleFile = {
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor.jpeg",
  imageUrl: outsideDownloadUrl,
  downloadUrl: outsideDownloadUrl,
};

const DemoDownloadDifferentOriginDownloadUrl = () => {
  return (
    <>
      <FileMosaic id={4} {...sampleFile} />
      <FileCard id={4} {...sampleFile} />
    </>
  );
};
export default DemoDownloadDifferentOriginDownloadUrl;`;


const completeCodeTS =  `import * as React from "react";
import { FileCard, FileMosaic, ExtFile } from "../../../files-ui";

const outsideDownloadUrl = "https://steamuserimages-a.akamaihd.net/ugc/964219647714510750/C4D97B0E1ECCE3E8A505AFBC8EAD8945E2223C41/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const sampleFile: ExtFile = {
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor.jpeg",
  imageUrl: outsideDownloadUrl,
  downloadUrl: outsideDownloadUrl,
};

const DemoDownloadDifferentOriginDownloadUrl = () => {
  return (
    <>
      <FileMosaic id={4} {...sampleFile} />
      <FileCard id={4} {...sampleFile} />
    </>
  );
};
export default DemoDownloadDifferentOriginDownloadUrl;`;
