import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const CodeDemoAvatarLabels = () => {
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
export default CodeDemoAvatarLabels;
const splittedCodeJS = `<Avatar
  alt="Isabella"
  emptyLabel={"You can choose an image..."}
  onChange={() => {}}
/>
<Avatar
  src={imageSrc}
  alt="Isabella"
  changeLabel={"Do you want to change this amazing picture?"}
  onChange={() => {}}
/>
<Avatar
  src={imageSrc}
  alt="Isabella"
  loadingLabel={"You can drink a cup of coffee in the meanwhile"}
  isLoading={true}
/>`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";
const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

const DemoAvatarLabels = () => {
  return (
  <>
      <Avatar
          alt="Isabella"
          emptyLabel={"You can choose an image..."}
          onChange={() => {}}
      />
      <Avatar
          src={imageSrc}
          alt="Isabella"
          changeLabel={"Do you want to change this amazing picture?"}
          onChange={() => {}}
      />
      <Avatar
          src={imageSrc}
          alt="Isabella"
          loadingLabel={"You can drink a cup of coffee in the meanwhile"}
          isLoading={true}
      />
  </>
  );
};
export default DemoAvatarLabels;`;

const completeCodeTS = completeCodeJS;
