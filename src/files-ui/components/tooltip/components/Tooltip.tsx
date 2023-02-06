import * as React from "react";
import { TooltipProps } from "./TooltipProps";
import "./Tooltip.scss";
import { UPLOADSTATUS } from "../../../core";
const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const {
    //message,
    //style,
    //children,
    //color,
    uploadStatus,
    valid,
    errors,
    //className,
    uploadMessage,
    open,
  } = props;
  /*  console.log("ToolTip");
  console.table(props); */
  const [statusClassName, setSatusClassName] = React.useState<
    string | undefined
  >(undefined);

  const [message, setMessage] = React.useState<undefined | string>(undefined);

  const handleChangeStatus = (
    uploadStatus?: UPLOADSTATUS,
    valid?: boolean | null
  ) => {
    //higher priority
    if (uploadStatus !== undefined) {
      setMessage(uploadMessage);
      if (uploadStatus === "success") {
        setSatusClassName("success");
      } else {
        setSatusClassName("not-valid-error");
      }
    } else {
      if (valid !== undefined) {
        if (!valid) {
          setSatusClassName("not-valid-error");
          setMessage(
            errors
              ? errors.reduce((acum: string, curr: string) => {
                  acum += `${curr}. `;
                  return acum;
                }, "")
              : ""
          );
        }
      }
    }
  };
  React.useEffect(() => {
    handleChangeStatus(uploadStatus, valid);
    // eslint-disable-next-line
  }, [uploadStatus, valid]);

  return (
    <React.Fragment>
      {open && message && statusClassName && (
        <span className={`files-ui-tooltiptext ${statusClassName}`}>
          {message}
        </span>
      )}
    </React.Fragment>
  );
};
export default Tooltip;
