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
    src={"https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"}
    alt="Isabella"
/>`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";
const BasicDemoAvatar = () => {
    return (
        <Avatar
            readOnly
            src={"https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"}
            alt="Isabella"
        />
    );
};
export default BasicDemoAvatar;
`;

const completeCodeTS = completeCodeJS;
