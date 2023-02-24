import * as React from "react";
import { Clear } from "../../icons";
import { FullScreenProps } from "./FullScreenProps";
import "./FullScreen.scss";
const FullScreen: React.FC<FullScreenProps> = (props: FullScreenProps) => {
  const { open, onClose, children } = props;

  function handleClose<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
    onClose?.();
  }

  return (
    <div
      className={
        open ? "fui-fullscreen-container show-fs" : "fui-fullscreen-container"
      }
      onClick={handleClose}
    >
      {open && (
        <div
          className="fui-fullscreen-relative-container"
          onClick={handleClose}
        >
          {children}
        </div>
      )}
      {onClose && (
        <Clear
          color="rgba(255,255,255,0.8)"
          onClick={handleClose}
          colorFill="transparent"
          className="button-full-screen"
          size={"extra-large"}
        />
      )}
    </div>
  );
};
export default FullScreen;
