import * as React from "react";
import { Avatar } from "../../../files-ui";

const DemoAvatarStyling = () => {
  return (
    <>
      <Avatar
        readOnly
        src={
          "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"
        }
        alt="Isabella"
        style={{ width: "100px", height: "100px" }}
      />
      <Avatar
        readOnly
        src={
          "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"
        }
        alt="Isabella"
        borderRadius={"50px"}
      />
    </>
  );
};
export default DemoAvatarStyling;
