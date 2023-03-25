import * as React from "react";
import { addClassName, Localization } from "theamazingunkowntext"
import { MaterialButton } from "../../../MaterialButton";
import { ActionButtonItem, DropzoneActions } from "../dropzone/DropzoneProps";
import "./DropzoneButtons.scss";

interface DropzoneButtonsProps extends DropzoneActions {
  localization?: Localization;
  onAbort?: Function;
  onDelete?: Function;
  onUpload?: Function;
  onClean?: Function;
  top?: boolean;
  disabled?: boolean;
}

const DropzoneButtons: React.FC<DropzoneButtonsProps> = (
  props: DropzoneButtonsProps
) => {
  const {
    cleanButton,
    abortButton,
    className: containerClassName,
    style: containerStyle,
    deleteButton,
    uploadButton,
    //localization,
    onAbort,
    onClean,
    onDelete,
    onUpload,
    top,
    disabled,
  } = props;

  const actionButtonsList: ActionButtonItem[] = [
    cleanButton
      ? {
          ...cleanButton,
          label: "Clean",
          onClick: cleanButton.onClick || onClean,
        }
      : undefined,
    deleteButton
      ? {
          ...deleteButton,
          label: "Delete",
          onClick: deleteButton.onClick || onDelete,
        }
      : undefined,
    uploadButton
      ? {
          ...uploadButton,
          label: "Upload",
          onClick: uploadButton.onClick || onUpload,
        }
      : undefined,
    abortButton
      ? {
          ...abortButton,
          label: "Abort",
          onClick: abortButton.onClick || onAbort,
        }
      : undefined,
  ].filter(
    (ab: ActionButtonItem | undefined) => ab !== undefined
  ) as ActionButtonItem[];

  const tailClassName: string = `${top ? " top" : " bottom"}`;
  const finalClassName = addClassName(
    "files-ui-buttons-container" + tailClassName,
    containerClassName
  );

  return (
    <div className={finalClassName} style={containerStyle}>
      {actionButtonsList.map(



        (actionButtonProps: ActionButtonItem, index: number) => {
          const { children, label, resetStyles, className, style, onClick } =
            actionButtonProps;
          return (
            <MaterialButton
              key={index}
              className={className}
              style={style}
              resetStyles={resetStyles}
              onClick={(evt) => onClick?.(evt)}
              disabled={disabled}
            >
              {children || label}
            </MaterialButton>
          );
        }
      
      
      
        )
      
      }
    </div>
  );
};
export default DropzoneButtons;
