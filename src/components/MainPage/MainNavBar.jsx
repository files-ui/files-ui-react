import * as React from "react";
import DarkModeLightModeButton from "./DarkModeLightModeButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";
//import { useNavigate } from "react-router";
import logo_text_blue from "../../static/files-ui-logo-text-med.png";
import logo_text_blue_dark from "../../static/files-ui-logo-text-med-dark.png";

const MainNavBar = ({
  darkModeOn,
  logo_blue,
  logo_blue_dark,
  handleDarkMode,
}) => {
  const handleGoGitRepo = () => {
    window.open("https://github.com/files-ui", "_blank");
  };

  return (
    <nav className="filesui-nav">
      <div className="filesui-nav-container">
        <div className="left-part">
          <div className={"filesui-nav-logo-container"}>
            <img
              className={"filesui-nav-logo"}
              // src={!darkModeOn ? logo_blue : logoLight}
              src={darkModeOn ? logo_blue_dark : logo_blue}
              alt="files-ui-main-logo"
            />
          </div>

          <img
            height={"18px"}
            src={darkModeOn ? logo_text_blue_dark : logo_text_blue}
            alt="files-ui-main-logo-text"
          />
        </div>

        <div className="right-part">
          <Tooltip title="Go to Files-ui GitHub repo">
            <IconButton
              style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}
              onClick={handleGoGitRepo}
              color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <GitHubIcon /* htmlColor="white" */ />
            </IconButton>
          </Tooltip>
          <DarkModeLightModeButton
            darkModeOn={darkModeOn}
            onChangeDarkMode={handleDarkMode}
          />
        </div>
      </div>
    </nav>
  );
};
export default MainNavBar;
