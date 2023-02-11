import { Stack, Box } from "@mui/material";
import * as React from "react";
import NavBarTemplate from "../../templates/NavBarTemplate";

const MainLayoutPage = ({ mainContent, rightMenu, children, selectedIndex }) => {
  return (
    <NavBarTemplate selectedIndex={selectedIndex}>
      <Stack direction={"row"} sx={{ position: "relative" }}>
        <Box
          sx={{
            overflow:"hidden",
            boxSizing: "border-box",
            marginLeft: { xl: "240px", lg: "0px" },
            marginRight: { lg: "240px" },
            width: {
              lg: `min(1000px, calc(100% - ${240}px))`,
             
            },
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              //backgroundColor:"grey"
            }}
          >
            {mainContent || children}
          </Box>
        </Box>

        <Box
          sx={{
            position: "fixed",
            top: 100,
            right: 0,
            width: "240px",
            display: { lg: "flex", xs: "none" },
          }}
        >
          {rightMenu}
        </Box>
      </Stack>
    </NavBarTemplate>
  );
};
export default MainLayoutPage;
