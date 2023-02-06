import * as React from "react";
import { UPLOADSTATUS } from "../../../../../core";
import DefaultLoaderNeo from "../../../../loader/DefaultLoader/DefaultLoader";
export type PrincipalStateProps = {
  uploadStatus?: UPLOADSTATUS;
  valid?: boolean;
};
const PrincipalState: React.FC<PrincipalStateProps> = (
  props: PrincipalStateProps
) => {
  const { uploadStatus, valid } = props;
  const [isUploading, setIsUploading] = React.useState<boolean | undefined>(
    undefined
  );
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);
  React.useEffect(() => {
    setIsUploading(
      uploadStatus &&
        ["preparing", "uploading"].includes(uploadStatus)
    );
  }, [uploadStatus]);
  return (
    <div>
      <DefaultLoaderNeo color="green" />
    </div>
  );
};
export default PrincipalState;
