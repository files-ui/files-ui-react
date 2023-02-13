import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import MainPage from "./pages/MainPage";
import { ThemeProvider } from "@mui/material/styles";
import { MUItheme } from "./theme/mainTheme";

import MainRouter from "./routes/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <ThemeProvider theme={MUItheme}>
    <MainRouter  />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
