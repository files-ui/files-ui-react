import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import MainPage from "./pages/MainPage";
/* import { ThemeProvider } from "@mui/material/styles";
import { MUItheme } from "./theme/mainTheme"; */

import MainRouter from "./routes/MainRouter";
import { UserProvider } from "./globals/providers/UserProvider";
import { initialUserValue } from "./globals/initialValues/userInitialValue";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider valorInicial={initialUserValue}>
    <MainRouter />
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
