import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeJSFileMosaicSmartImgFit = (card) => {
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
export default CodeJSFileMosaicSmartImgFit;

const splittedCodeJS = (card)=>``;
const splittedCodeTS = (card)=>``;

const completeCodeTS = (card)=>`import * as React from "react";
import { ${card?"FileCard":"FileMosaic"}, ExtFile } from "@files-ui/react";

export default function App() {
  return (
    <>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={false}/>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={"orientation"}/>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={"center"}/>
    </>
  );
};
const sampleFileProp: ExtFile = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Thor arrives wakanda.png",
    imageUrl: "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};`;

const completeCodeJS = (card)=>`import * as React from "react";
import { ${card?"FileCard":"FileMosaic"} } from "@files-ui/react";

export default function App() {
  return (
    <>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={false}/>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={"orientation"}/>
        <${card?"FileCard":"FileMosaic"}  {...sampleFileProp} info smartImgFit={"center"}/>
    </>
  );
};
const sampleFileProp = {
    id: "fileId-1",
    size: 28 * 1024 * 1024,
    type: "image/gif",
    name: "Thor arrives wakanda.png",
    imageUrl: "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};`;
