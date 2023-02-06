import * as React from "react";
import DarkModeLightModeButton from "./DarkModeLightModeButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip, Typography } from "@mui/material";
//import { useNavigate } from "react-router";

const MainNavBar = ({ darkModeOn, logo_blue, logoLight, handleDarkMode }) => {
  const handleGoGitRepo = () => {
    window.open("https://github.com/files-ui", "_blank");
  };

  return (
    <nav className="filesui-nav">
      <div className="filesui-nav-container">
        <div className="left-part">
          <div
            className={
              darkModeOn
                ? "filesui-nav-logo-container darkmode"
                : "filesui-nav-logo-container"
            }
          >
            <img
              className={"filesui-nav-logo"}
              // src={!darkModeOn ? logo_blue : logoLight}
              src={logo_blue}
              alt="files-ui-main-logo"
            />
          </div>

          {/*  <Typography variant="h5" noWrap component="div" color="primary">
            Files ui
          </Typography> */}
          <p className="filesui-nav-text-logo">
            <span className="gradient-span">Files UI</span>
          </p>
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
