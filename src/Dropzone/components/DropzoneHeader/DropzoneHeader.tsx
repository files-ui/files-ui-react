import * as React from "react";

import {
  addClassName,
  DropzoneLocalizerSelector,
  fileSizeFormater,
  FunctionLabel,
  Localization,
  LocalLabels,
} from "../../../core";
import { UploadingProcess, Clean, Cancel, Upload } from "../../../icons";

export type DropzoneHeaderProps = {
  firstClassName?: string;
  maxFileSize?: number;
  numberOfValidFiles?: number;
  maxFiles?: number;
  onReset?: Function;
  onUploadStart?: Function;
  urlPresent?: boolean;
  onClean?: Function;
  isUploading?: boolean;
  localization?: Localization;
  borderRadius?: string | number;
  style?: React.CSSProperties;
  className?: string;
  resetStyles?: boolean;
  color?: string;
};

const DropzoneHeader: React.FC<DropzoneHeaderProps> = (
  props: DropzoneHeaderProps
) => {
  const {
    maxFileSize,
    numberOfValidFiles,
    onReset,
    onClean,
    maxFiles,
    onUploadStart,
    isUploading,
    urlPresent,
    localization,
    borderRadius,
    style,
    className = "",
    resetStyles,
    color,
    firstClassName = "",
  } = props;

  const DropzoneHeaderLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization
  ).header as LocalLabels;

  const handleClean = () => {
    onClean?.();
  };
  const handleStartUploading = () => {
    onUploadStart?.();
  };
  const makeHeader = (): React.ReactNode[] => {
    let result: React.ReactNode[] = [];

    if (onUploadStart && urlPresent && numberOfValidFiles) {
      if (isUploading) {
        result.push(<UploadingProcess spin={true} color={color} />);
      } else {
        result.push(
          <React.Fragment>
            <>{DropzoneHeaderLocalizer.uploadFilesMessage}</>
            <Upload color={color} onClick={handleStartUploading} />
          </React.Fragment>
        );
      }
      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }

    const maxFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.maxSizeMessage as FunctionLabel;
    const maxFileSizeFormatted = fileSizeFormater(maxFileSize);
    if (maxFileSizeFormatted) {
      result.push(maxFileSizeMessenger(maxFileSizeFormatted));
      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }
    const validFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.validFilesMessage as FunctionLabel;

    if (maxFiles) {
      result.push(
        validFileSizeMessenger(numberOfValidFiles as number, maxFiles)
      );
      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }
    //clean not valid files on click
    if (onClean) {
      result.push(
        <Clean color={color} onClick={handleClean} size="semi-medium" />
      );
    }
    if (onReset) {
      result.push(
        <Cancel
          color={color}
          onClick={() => onReset?.()}
          // colorFill="rgba(255,255,255,0.8)"
        />
      );
    }
    return result;
  };
  function handleClick<T extends HTMLDivElement>(
    evt: React.MouseEvent<T, MouseEvent>
  ): void {
    evt.stopPropagation();
  }

  const finalClassName = resetStyles
    ? className
    : addClassName("files-ui-header" + " " + firstClassName, className);
  const finalStyle = resetStyles
    ? style
    : {
        ...style,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      };
  console.log("headerx resetStyles", resetStyles);
  console.log("headerx style", style);

  console.log("headerx finalStyle", finalStyle);
  return (
    <div className={finalClassName} onClick={handleClick} style={finalStyle}>
      {makeHeader().map((HeaderItem, index) => (
        <span key={index} style={{ display: "flex" }}>
          {HeaderItem}
        </span>
      ))}
    </div>
  );
};
export default DropzoneHeader;
