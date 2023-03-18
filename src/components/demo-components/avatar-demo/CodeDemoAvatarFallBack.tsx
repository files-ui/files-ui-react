import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
interface CodeDemoAvatarPickFileProps {}
const CodeDemoAvatarFallBack: React.FC<CodeDemoAvatarPickFileProps> = (
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
export default CodeDemoAvatarFallBack;

const splittedCodeJS = `<Avatar
  src={imageSource}
  readOnly
  onError={() => setImageSource(fallBackImage)}
  alt="Avatar"
/>
<Avatar
  src={imageSource2}
  onError={() => setImageSource2(fallBackImage)}
  onChange={(imgSource) => setImageSource2(imgSource)}
  accept=".pdf, .png"
  alt="Avatar2"
/>`;
const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";

const fallBackImage =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

export default function DemoAvatarFallBack = () => {
  const [imageSource, setImageSource] = React.useState("broken/url");
  const [imageSource2, setImageSource2] = React.useState(undefined);
  return (
    <>
      <Avatar
        src={imageSource}
        readOnly
        onError={() => setImageSource(fallBackImage)}
        alt="Avatar"
      />
      <Avatar
        src={imageSource2}
        onError={() => setImageSource2(fallBackImage)}
        onChange={(imgSource) => setImageSource2(imgSource)}
        accept=".pdf, .png"
        alt="Avatar2"
      />
    </>
  );
};`;

const completeCodeTS = `import * as React from "react";
import { Avatar, AvatarProps } from "@files-ui/react";

const fallBackImage =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

export default function DemoAvatarFallBack = () => {
  const [imageSource, setImageSource] 
              = React.useState<AvatarProps["src"] | undefined>("/broken/url");
  const [imageSource2, setImageSource2] 
              = React.useState<AvatarProps["src"] | undefined>(undefined);
  return (
    <>
      <Avatar
        src={imageSource}
        readOnly
        onError={() => setImageSource(fallBackImage)}
        alt="Avatar"
      />
      <Avatar
        src={imageSource2}
        onError={() => setImageSource2(fallBackImage)}
        onChange={(imgSource) => setImageSource2(imgSource)}
        accept=".pdf, .png"
        alt="Avatar2"
      />
    </>
  );
};`;
