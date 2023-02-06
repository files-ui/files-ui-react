import { Clipboard } from "rc-highlight";
import * as React from "react";

const InstallationYarn = () => {
  return (
    <div className="clipboard-container">
      <span style={{ color: "#60d2ff" }}>
        <span style={{ color: "white" }}>
          <b>{" > "}</b>&nbsp;
        </span>
        <span style={{ color: "#e2d487" }}>{"yarn "}&nbsp;</span>
        <span style={{ color: "white" }}>{"add "}&nbsp;</span>
        <span>{"@files-ui/react"} &nbsp;&nbsp;</span>
      </span>
      <Clipboard
        style={{ backgroundColor: "grey" }}
        code="yarn add @files-ui/react"
        onCopyToClipboard={() => {}}
      />
    </div>
  );
};
export default InstallationYarn;
