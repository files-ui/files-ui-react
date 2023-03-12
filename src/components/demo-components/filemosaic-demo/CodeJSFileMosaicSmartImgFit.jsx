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
        <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={false}/>
        <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={"orientation"}/>
        <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={"center"}/>
        <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={false}/>
        <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={"orientation"}/>
        <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={"center"}/>
    </>
  );
};
const landscapeImage: ExtFile = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(landscape)Thor arrives wakanda.gif",
  imageUrl:
    "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};
const portraitImage: ExtFile = {
  id: "fileId-2",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(portrait)Iron man in stark tower.gif",
  imageUrl: "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};`;

const completeCodeJS = (card)=>`import * as React from "react";
import { ${card?"FileCard":"FileMosaic"} } from "@files-ui/react";

export default function App() {
  return (
    <>
      <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={false}/>
      <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={"orientation"}/>
      <${card?"FileCard":"FileMosaic"}  {...landscapeImage} info smartImgFit={"center"}/>
      <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={false}/>
      <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={"orientation"}/>
      <${card?"FileCard":"FileMosaic"}  {...portraitImage} info smartImgFit={"center"}/>
    </>
  );
};
const landscapeImage = {
  id: "fileId-1",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(landscape)Thor arrives wakanda.gif",
  imageUrl:
    "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif",
};
const portraitImage = {
  id: "fileId-2",
  size: 28 * 1024 * 1024,
  type: "image/gif",
  name: "(portrait)Iron man in stark tower.gif",
  imageUrl: "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif",
};`;
