import { Box } from "@mui/material";
import * as React from "react";

const MainContentContainer = ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
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
        {children}
        
      </Box>
    </Box>
  );
};
export default MainContentContainer;
