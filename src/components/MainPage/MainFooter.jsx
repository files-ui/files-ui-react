import * as React from "react";
import logo_blue from "../../static/files-ui-logo-white.png";
const MainFooter = (props) => {
  return (
    <footer className="filesui-footer">
      <div
        className={"filesui-main-logo-container darkmode"}
        style={{ height: "50px", width: "50px" }}
      >
        <img className="fui-logo-img" src={logo_blue} width="100%" />
      </div>
      <p>Copyright © 2023 FILES UI</p>
    </footer>
  );
};
export default MainFooter;
