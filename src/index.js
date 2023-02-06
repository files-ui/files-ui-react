import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "@mui/material/styles";
import { MUItheme } from "./theme/mainTheme";
import GettingStartedPage from "./pages/getting-started/GettingStartedPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import DropzoneDemoPage from "./pages/demo/DropzoneDemoPage";
import FileMosaicDemoPage from "./pages/demo/FileMosaicDemoPage";
import FileCardDemoPage from "./pages/demo/FileCardDemoPage";
import ServerSidePage from "./pages/server-side/ServerSidePage";
import CodeGeneratorPage from "./pages/code-generator/CodeGeneratorPage";
import DropzoneApi from "./pages/api/DropzoneApi";
import FileMosaicApi from "./pages/api/FileMosaicApi";
import FileCardApi from "./pages/api/FileCardApi";
import TutorialPage from "./pages/tutorials/TutorialPage";
import UsagePage from "./pages/usage/UsagePage";
import TypesPage from "./pages/types-page/TypesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/getting-started",
    element: <GettingStartedPage />,
  },
  {
    path: "/usage",
    element: <UsagePage />,
  },
  {
    path: "/components/dropzone",
    element: <DropzoneDemoPage />,
  },
  {
    path: "/components/filemosaic",
    element: <FileMosaicDemoPage />,
  },
  {
    path: "/components/file-card",
    element: <FileCardDemoPage />,
  },
  {
    path: "/api/dropzone",
    element: <DropzoneApi />,
  },
  {
    path: "/api/filemosaic",
    element: <FileMosaicApi />,
  },
  {
    path: "/api/file-card",
    element: <FileCardApi />,
  },
  {
    path: "/types",
    element: <TypesPage />,
  },
  {
    path: "/server-side",
    element: <ServerSidePage />,
  },
  {
    path: "/code-generator",
    element: <CodeGeneratorPage />,
  },
  {
    path: "/utilities-methods/file-reader",
    element: <CodeGeneratorPage />,
  },
  {
    path: "/utilities-methods/file-uploader",
    element: <CodeGeneratorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch("https://files-ui-express-static-file-storage.vercel.app").then(res=>{
  res.json().then((jsonresponse)=>{
    console.log("API vercel", jsonresponse);
  })
});

root.render(
  <ThemeProvider theme={MUItheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
