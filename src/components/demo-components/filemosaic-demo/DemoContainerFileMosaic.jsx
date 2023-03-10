import { Paper, Stack, Box } from "@mui/material";
import * as React from "react";

const DemoContainerFileMosaic = ({ children, card }) => {
  return (
    <Paper
      variant="outlined"
      style={{
        padding: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: { xs: card ? "column" : undefined, md: "row" },
          justifyContent: {
            xs: "center",
            md: "space-evenly",
          },
          alignItems: { xs: "center" },
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};
export default DemoContainerFileMosaic;
