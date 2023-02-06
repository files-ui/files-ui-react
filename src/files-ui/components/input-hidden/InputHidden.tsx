import * as React from "react";
import { InputHiddenProps } from "./InputHiddenProps";

const InputHidden: React.FC<InputHiddenProps> = (props: InputHiddenProps) => {
  const { onChange, inputRef, accept, multiple } = props;
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
      />
    </React.Fragment>
  );
};
export default InputHidden;
