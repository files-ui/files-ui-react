import * as React from "react";
//import { handleClickUtil } from "@files-ui/core"
import { InputHiddenProps } from "./InputHiddenProps";

const InputHidden: React.FC<InputHiddenProps> = (props: InputHiddenProps) => {
  const { onChange, inputRef, accept, multiple } = props;
  /* function handleClick<T extends HTMLInputElement>(
    evt: React.MouseEvent<T, MouseEvent>
  ): void {
    handleClickUtil(evt);
  } */
  return (
    <React.Fragment>
      <input
        aria-label="fui-hidden-input"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onChange}
        type="file"
        accept={accept}
        multiple={multiple}
        //onClick={handleClick}
      />
    </React.Fragment>
  );
};
export default InputHidden;
