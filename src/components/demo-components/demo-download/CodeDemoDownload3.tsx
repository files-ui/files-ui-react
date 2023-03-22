import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoDownload1 = () => {
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

const outsideDownloadUrl =
  "https://steamuserimages-a.akamaihd.net/ugc/964219647714510750/C4D97B0E1ECCE3E8A505AFBC8EAD8945E2223C41/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const sampleFile = {
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor.jpeg",
  imageUrl: outsideDownloadUrl,
  downloadUrl: outsideDownloadUrl,
};

const DemoDownloadDifferentOriginOnDownload = () => {
  const handleDownload = async (fileId, downloadUrl) => {
    console.log("Download fileId", fileId);
    console.log("Download downloadUrl", downloadUrl);
    if (!downloadUrl) return;
    try {
      const image = await fetch(downloadUrl);
      const imageBlob = await image.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const anchor = document.createElement("a");
      anchor.href = imageURL;
      anchor.download = sampleFile.name || "newFile.jpeg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(imageURL);
    } catch (error) {
      console.log("Download error", error);
      console.error(error);
    }
  };
  return (
    <>
      <FileMosaic id={4} {...sampleFile} onDownload={handleDownload} />
      <FileCard id={4} {...sampleFile} onDownload={handleDownload} />
    </>
  );
};
export default DemoDownloadDifferentOriginOnDownload;`;


const completeCodeTS =  `import * as React from "react";
import { FileCard, FileMosaic, ExtFile } from "../../../files-ui";

const outsideDownloadUrl =
  "https://steamuserimages-a.akamaihd.net/ugc/964219647714510750/C4D97B0E1ECCE3E8A505AFBC8EAD8945E2223C41/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

const sampleFile: ExtFile = {
  size: 28 * 1024 * 1024,
  type: "image/jpeg",
  name: "Thor.jpeg",
  imageUrl: outsideDownloadUrl,
  downloadUrl: outsideDownloadUrl,
};

const DemoDownloadDifferentOriginOnDownload = () => {
  const handleDownload = async (
    fileId: string | number | undefined,
    downloadUrl?: string | undefined
  ) => {
    console.log("Download fileId", fileId);
    console.log("Download downloadUrl", downloadUrl);
    if (!downloadUrl) return;
    try {
      const image = await fetch(downloadUrl);
      const imageBlob = await image.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const anchor = document.createElement("a");
      anchor.href = imageURL;
      anchor.download = sampleFile.name || "newFile.jpeg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(imageURL);
    } catch (error) {
      console.log("Download error", error);
      console.error(error);
    }
  };
  return (
    <>
      <FileMosaic id={4} {...sampleFile} onDownload={handleDownload} />
      <FileCard id={4} {...sampleFile} onDownload={handleDownload} />
    </>
  );
};
export default DemoDownloadDifferentOriginOnDownload;`;
