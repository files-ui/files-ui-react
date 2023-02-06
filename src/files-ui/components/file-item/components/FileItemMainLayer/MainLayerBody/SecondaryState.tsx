import * as React from "react";
export type SecondaryStateProps = {
  uploadComplete?: boolean;
};
const SecondaryState: React.FC<SecondaryStateProps> = (
  props: SecondaryStateProps
) => {
  const { uploadComplete } = props;
  //uploa status
  if (uploadComplete) {
    return <div></div>;
  }
  //valid
  return <div></div>;
};
export default SecondaryState;
