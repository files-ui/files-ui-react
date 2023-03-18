import * as React from "react";
import { Avatar } from "../../../files-ui";

const DemoAvatarLabels = () => {
  return (
    <>
      <Avatar
        //readOnly
        src={""}
        alt="Isabella"
        emptyLabel={"You can choose an image..."}
        onChange={() => {}}
      />
      <Avatar
        src={
          "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"
        }
        alt="Isabella"
        changeLabel={"Do you want to change this amazing picture?"}
        onChange={() => {}}
      />
      <Avatar
        src={
          "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg"
        }
        alt="Isabella"
        loadingLabel={"You can drink a cup of coffe in the meanwhile"}
        isLoading={true}
      />
    </>
  );
};
export default DemoAvatarLabels;
