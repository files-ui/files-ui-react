import { Clipboard } from "rc-highlight";
import * as React from "react";

const InstallationNPM = () => {
  return (
    <div className="clipboard-container">
      <span style={{ color: "#60d2ff" }}>
        <span style={{ color: "white" }}>
          <b>{" > "}</b>&nbsp;
        </span>
        <span style={{ color: "#e2d487" }}>{"npm "}&nbsp;</span>
        <span style={{ color: "white" }}>{"install "}&nbsp;</span>
        <span>{"@files-ui/react"} &nbsp;&nbsp;</span>
      </span>
      <Clipboard
        style={{ backgroundColor: "grey" }}
        code="npm install @files-ui/react"
        onCopyToClipboard={() => {}}
      />
    </div>
  );
};
export default InstallationNPM;
