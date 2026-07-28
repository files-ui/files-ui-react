import * as React from "react";
import type { FullScreenProps } from "./FullScreenProps";
import FullScreenClient from "./FullScreenClient";

const FullScreenContainer: React.FC<FullScreenProps> = (
  props: FullScreenProps
) => {
  return <FullScreenClient {...props} />;
};

export { FullScreenContainer };
export default FullScreenContainer;
