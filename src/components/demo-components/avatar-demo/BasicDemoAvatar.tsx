import * as React from "react";
import { Avatar } from "../../../files-ui";
const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

const BasicDemoAvatar = () => {
  return <Avatar readOnly src={imageSrc} alt="Isabella" />;
};
export default BasicDemoAvatar;
