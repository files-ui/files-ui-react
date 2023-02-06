import * as React from "react";
import {
  DropzoneLocalizerSelector,
  fileSizeFormater,
  FunctionLabel,
  Localization,
  LocalLabels,
} from "../../../../core";
import { UploadingProcess, Clean, Cancel, Upload } from "../../../icons";

export interface DropzoneHeaderProps {
  maxFileSize?: number;
  numberOfValidFiles?: number;
  maxFiles?: number;
  onReset?: Function;
  onUploadStart?: Function;
  urlPresent?: boolean;
  onClean?: Function;
  isUploading?: boolean;
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
}

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
        result.push(<UploadingProcess spin={true} color="#646c7f" />);
      } else {
        result.push(
          <React.Fragment>
            <>{DropzoneHeaderLocalizer.uploadFilesMessage}</>
            <Upload color="#646c7f" onClick={handleStartUploading} />
          </React.Fragment>
        );
      }

      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }

    const maxFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.maxSizeMessage as FunctionLabel;
    if (maxFileSize) {
      result.push(
        maxFileSizeMessenger(fileSizeFormater(maxFileSize))

        /* localization === "ES-es"
          ? `Tam. máximo de archivo ${fileSizeFormater(maxFileSize)} | `
          : `Max File size: ${fileSizeFormater(maxFileSize)} | `, */
      );
      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }
    const validFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.validFilesMessage as FunctionLabel;

    if (maxFiles) {
      result.push(
        validFileSizeMessenger(numberOfValidFiles as number, maxFiles)
        /*  localization === "ES-es"
          ? `Archivos ${numberOfValidFiles}/${maxFiles} | Válidos: ${numberOfValidFiles} | `
          : `Files ${numberOfValidFiles}/${maxFiles} | Valid: ${numberOfValidFiles} | `, */
      );
      result.push(<React.Fragment>{","}&nbsp;</React.Fragment>);
    }
    //clean not valid files on click
    if (onClean) {
      result.push(
        <Clean color="#646c7f" onClick={handleClean} size="semi-medium" />
      );
    }
    if (onReset) {
      result.push(
        <Cancel
          color="#646c7f"
          onClick={() => onReset?.()}
         // colorFill="rgba(255,255,255,0.8)"
        />
      );
    }
    return result;
  };
  return (
    <div
      className="files-ui-header"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {makeHeader().map((HeaderItem, index) => (
        <span key={index} style={{ display: "flex" }}>
          {HeaderItem}
        </span>
      ))}
    </div>
  );
};
export default DropzoneHeader;
