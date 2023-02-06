import * as React from "react";
import {
  DropzoneLocalizerSelector,
  FunctionLabel,
  handleClickUtil,
  Localization,
  LocalLabels,
} from "../../../../core";

export interface DropzoneFooterNeoProps {
  accept?: string;
  message?: string;
  localization?: Localization;
}
const DropzoneFooter: React.FC<DropzoneFooterNeoProps> = (
  props: DropzoneFooterNeoProps
) => {
  const { accept, message, localization } = props;

  const DropzoneFooterLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization
  ).footer as LocalLabels;
  const accepCustomMessenger: FunctionLabel =
    DropzoneFooterLocalizer.acceptCustom as FunctionLabel;
    
  function handleClick<T extends HTMLDivElement>(
    evt: React.MouseEvent<T, MouseEvent>
  ): void {
    handleClickUtil(evt);
  }
  return (
    <div className="files-ui-footer" onClick={handleClick}>
      <>
        {message
          ? message
          : !accept
          ? DropzoneFooterLocalizer.acceptAll
          : accepCustomMessenger(accept)}
      </>
    </div>
  );
};
export default DropzoneFooter;
