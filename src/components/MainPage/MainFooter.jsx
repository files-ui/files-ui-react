import * as React from "react";
import logo_blue from "../../static/files-ui-logo-white.png";
import logo_white_ext from "../../static/files-ui-logo-text-med-white.png";
const MainFooter = (props) => {
  return (
    <footer className="filesui-footer">
      <div
        className={"filesui-main-logo-container darkmode"}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          className="fui-logo-img"
          src={logo_blue}
          width="38px"
          alt="fui-logo-blue"
        />
        <img
          className="fui-logo-text-img"
          src={logo_white_ext}
          height="14px"
          alt="fui-logo-text-white"
        />
      </div>
      <p>{" | "}Copyright © 2023</p>
    </footer>
  );
};
export default MainFooter;
