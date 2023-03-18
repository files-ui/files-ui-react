import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoAvatarStyling = () => {
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
export default CodeDemoAvatarStyling;

const splittedCodeJS = `<Avatar
  readOnly
  src={imgSrc}
  alt="Isabella"
  style={{ width: "100px", height: "100px" }}
/>
<Avatar readOnly src={imgSrc} alt="Isabella" borderRadius={"50px"} />`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";

const DemoAvatarStyling = () => {
    return (
      <Avatar
        readOnly
        src={imgSrc}
        alt="Isabella"
        style={{ width: "100px", height: "100px" }}
      />
      <Avatar readOnly src={imgSrc} alt="Isabella" borderRadius={"50px"} />
    );
};
export default DemoAvatarStyling;`;

const completeCodeTS = completeCodeJS;
