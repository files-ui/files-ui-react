import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
interface CodeDemoAvatarPickFileProps {}
const CodeDemoAvatarSmartFit: React.FC<CodeDemoAvatarPickFileProps> = (
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
export default CodeDemoAvatarSmartFit;

const splittedCodeJS = ``;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";
const landscapeImage =
  "https://64.media.tumblr.com/078a5af7a51d438b1c1ee5bd77f1b1e5/tumblr_p81qv7KIPa1rvufhzo3_r1_400.gif";

const portraitImage =
  "https://i.pinimg.com/originals/b6/1d/6a/b61d6a1079d8e54932dcde9dc260dd2e.gif";

export default function App = () => {
    return (
        <>
          <Avatar src={landscapeImage} readOnly smartImgFit={false} />
          <Avatar src={landscapeImage} readOnly smartImgFit={"orientation"} />
          <Avatar src={landscapeImage} readOnly smartImgFit={"center"} />
    
          <Avatar src={portraitImage} readOnly smartImgFit={false} />
          <Avatar src={portraitImage} readOnly smartImgFit={"orientation"} />
          <Avatar src={portraitImage} readOnly smartImgFit={"center"} />
        </>
      );
};`;

const completeCodeTS = completeCodeJS;
