import { Stack } from "@mui/material";
import * as React from "react";
import { UserContext } from "../../globals/contexts/UserContext";
import NavBarTemplate from "../../templates/NavBarTemplate";
import "./LayoutPage.scss";

const MainLayoutPage = ({ children, selectedIndex }) => {
  const [usuario, dispatch] = React.useContext(UserContext);
  const darkMode = usuario.darkMode;

  const finalClassName = darkMode
    ? "files-ui-layout darkmode"
    : "files-ui-layout";
  return (
    <NavBarTemplate selectedIndex={selectedIndex}>
      <Stack
        direction={"row"}
        sx={{ position: "relative" }}
        className={finalClassName}
      >
        {children}
      </Stack>
    </NavBarTemplate>
  );
};
export default MainLayoutPage;
