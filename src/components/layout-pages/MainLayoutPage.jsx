import { Stack } from "@mui/material";
import * as React from "react";
import NavBarTemplate from "../../templates/NavBarTemplate";

const MainLayoutPage = ({
  children,
  selectedIndex,
}) => {
  return (
    <NavBarTemplate selectedIndex={selectedIndex}>
      <Stack direction={"row"} sx={{ position: "relative" }}>
        {children}
      </Stack>
    </NavBarTemplate>
  );
};
export default MainLayoutPage;
