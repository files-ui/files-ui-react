import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
interface CodeDemoAvatarPickFileProps {}
const CodeDemoAvatarLoading: React.FC<CodeDemoAvatarPickFileProps> = (
  props: CodeDemoAvatarPickFileProps
) => {
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
export default CodeDemoAvatarLoading;

const splittedCodeJS = `<Avatar readOnly src={imageSrc} alt="Isabella" isLoading={true} />`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";

const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

const DemoAvatarLoading = () => {
  return <Avatar readOnly src={imageSrc} alt="Isabella" isLoading={true} />;
};
export default DemoAvatarLoading;`;

const completeCodeTS = completeCodeJS;
