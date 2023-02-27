import { Paper, Stack } from "@mui/material";
import * as React from "react";

const DemoContainerFileMosaic = ({ children }) => {
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
      <Stack
        spacing={4}
        direction="row"
        alignItems={"center"}
        flexWrap="wrap"
        justifyContent={"space-evenly"}
      >
        {children}
      </Stack>
    </Paper>
  );
};
export default DemoContainerFileMosaic;
