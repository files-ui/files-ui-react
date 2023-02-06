import * as React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Tooltip } from "@mui/material";

const DarkModeLightModeButton = ({ darkModeOn, onChangeDarkMode }) => {
  //const [darkModeOn, setDarkModeOn] = React.useState(false);
  const handleDarkMode = () => {
    //setDarkModeOn((darkModeOn) => {
    onChangeDarkMode?.();
    //  return !darkModeOn;
    //});
  };
  if (darkModeOn)
    return (
      <Tooltip title="Turn on the light">
        <IconButton
          style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}
          onClick={handleDarkMode}
          color="secondary"
          aria-label="upload picture"
          component="label"
        >
          <DarkModeIcon /* htmlColor="white" */ />
        </IconButton>
      </Tooltip>
    );
  else {
    return (
      <Tooltip title="Turn off the light">
        <IconButton
          style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}

          onClick={handleDarkMode}
          color="secondary"
          aria-label="upload picture"
          component="label"
        >
          <LightModeIcon />
        </IconButton>
      </Tooltip>
    );
  }
};
export default DarkModeLightModeButton;
