import * as React from "react";
import type { AvatarProps } from "./AvatarProps";
import AvatarClient from "./AvatarClient";

const AvatarContainer: React.FC<AvatarProps> = (props: AvatarProps) => {
  return <AvatarClient {...props} />;
};

export { AvatarContainer };
export default AvatarContainer;
