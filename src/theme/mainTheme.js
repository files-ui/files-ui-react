import { createTheme } from "@mui/material/styles";

export const MUItheme = (modeLight = "light") =>
  createTheme({
    palette: {
      mode: modeLight,
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#042354",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#55b4f2",
        // dark: will be calculated from palette.secondary.main,
        //contrastText: '#ffcc00',
      },
    },
    typography: {
      fontFamily: ['"Poppins", sans-serif'],
    },
  });
