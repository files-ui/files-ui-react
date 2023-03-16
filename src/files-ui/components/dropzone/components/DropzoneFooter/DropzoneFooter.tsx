import * as React from "react";
import {
  addClassName,
  DropzoneLocalizerSelector,
  FunctionLabel,
  handleClickUtil,
  Localization,
  LocalLabels,
} from "../../../../core";
import { FooterConfig } from "../dropzone/DropzoneProps";

export interface DropzoneFooterProps extends FooterConfig {
  firstClassName?: string;
  accept?: string;
  message?: string;
  localization?: Localization;
  borderRadius?: string | number;
  style?: React.CSSProperties;
  className?: string;
  resetStyles?: boolean;
}
const DropzoneFooter: React.FC<DropzoneFooterProps> = (
  props: DropzoneFooterProps
) => {
  const {
    accept,
    message,
    localization,
    borderRadius,
    style,
    className = "",
    resetStyles = false,
    allowedTypesLabel = true,
    customMessage = undefined,
    firstClassName = "",
  } = props;

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
  const finalClassName = resetStyles
    ? className
    : addClassName("files-ui-footer" + " " + firstClassName, className);

  const finalStyle = resetStyles
    ? style
    : {
        ...style,
        borderBotomLeftRadius: borderRadius,
        borderBotomRightRadius: borderRadius,
      };
  console.log("files-ui-footer", finalStyle);

  return (
    <div className={finalClassName} onClick={handleClick} style={finalStyle}>
      {customMessage ? (
        <>{customMessage}</>
      ) : (
        <>
          {message
            ? message
            : !accept
            ? allowedTypesLabel
              ? DropzoneFooterLocalizer.acceptAll
              : undefined
            : accepCustomMessenger(accept)}
        </>
      )}
    </div>
  );
};
export default DropzoneFooter;
