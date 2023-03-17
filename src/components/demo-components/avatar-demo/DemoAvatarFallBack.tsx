import * as React from "react";
import { Avatar, AvatarProps } from "../../../files-ui";
interface DemoAvatarFallBackProps {}
const fallBackImage =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
const DemoAvatarFallBack: React.FC<DemoAvatarFallBackProps> = (
  props: DemoAvatarFallBackProps
) => {
  const [imageSource, setImageSource] = React.useState<
    AvatarProps["src"] | undefined
  >("broken/url");
  const [imageSource2, setImageSource2] = React.useState<
    AvatarProps["src"] | undefined
  >(undefined);

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
        alt="Avatar"
      />
    </>
  );
};
export default DemoAvatarFallBack;
