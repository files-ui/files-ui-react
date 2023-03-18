import * as React from "react";
import MainPage from "./../pages/MainPage";
import GettingStartedPage from "./../pages/getting-started/GettingStartedPage";
import ErrorPage from "./../pages/error-page/ErrorPage";
import DropzoneDemoPage from "./../pages/demo/DropzoneDemoPage";
import FileMosaicDemoPage from "./../pages/demo/FileMosaicDemoPage";
import FileCardDemoPage from "./../pages/demo/FileCardDemoPage";
import ServerSidePage from "./../pages/server-side/ServerSidePage";
import CodeGeneratorPage from "./../pages/code-generator/CodeGeneratorPage";
import DropzoneApi from "./../pages/api/DropzoneApi";
import FileMosaicApi from "./../pages/api/FileMosaicApi";
import FileCardApi from "./../pages/api/FileCardApi";
import UsagePage from "./../pages/usage/UsagePage";
import TypesPage from "./../pages/types-page/TypesPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayoutPage from "../components/layout-pages/MainLayoutPage";
import FileReaderPage from "../pages/utilities/FileReaderPage";
import FileUploaderPage from "../pages/utilities/FileUploaderPage";
import AvatarDemoPage from "../pages/demo/AvatarDemoPage";
import FileInputButtonApi from "../pages/api/FileInputButtonApi";
import AvatarApi from "../pages/api/AvatarApi";
import FileInputButtonDemoPage from "../pages/demo/FileInputButtonDemoPage";
import FileDownloadPage from "../pages/download-page/FileDownloadPage";
import FileIconsPage from "../pages/file-icons/FileIconsPage";
import LocalizationPage from "../pages/localization/LocalizationPage";
import VideoPreviewApi from "../pages/api/VideoPreviewApi";
import ImagePreviewApi from "../pages/api/ImagePreviewApi";
import FullScreenApi from "../pages/api/FullScreenApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: (
      <MainLayoutPage>
        <ErrorPage />
      </MainLayoutPage>
    ),
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
    path: "/components",
    element: (
      <MainLayoutPage selectedIndex={2}>
        <Outlet />
      </MainLayoutPage>
    ),
    children: [
      {
        path: "/components/avatar",
        element: <AvatarDemoPage />,
      },
      {
        path: "/components/dropzone",
        element: <DropzoneDemoPage />,
      },
      {
        path: "/components/fileinputbutton",
        element: <FileInputButtonDemoPage />,
      },
      {
        path: "/components/filemosaic",
        element: <FileMosaicDemoPage />,
      },
      {
        path: "/components/filecard",
        element: <FileCardDemoPage />,
      },
    ],
  },
  {
    path: "/api",
    element: (
      <MainLayoutPage selectedIndex={3}>
        <Outlet />
      </MainLayoutPage>
    ),
    children: [
      {
        path: "/api/avatar",
        element: <AvatarApi />,
      },
      {
        path: "/api/fileinputbutton",
        element: <FileInputButtonApi />,
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
        path: "/api/filecard",
        element: <FileCardApi />,
      },
      {
        path: "/api/fullscreen",
        element: <FullScreenApi />,
      },
      {
        path: "/api/imagepreview",
        element: <ImagePreviewApi />,
      },
      {
        path: "/api/videopreview",
        element: <VideoPreviewApi />,
      },
    ],
  },
  {
    path: "/file-icons",
    element: <FileIconsPage />,
  },
  {
    path: "/localization",
    element: <LocalizationPage />,
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
    path: "/types",
    element: <TypesPage />,
  },

  {
    path: "/utilities-methods",
    element: (
      <MainLayoutPage selectedIndex={7}>
        <Outlet />
      </MainLayoutPage>
    ),
    children: [
      {
        path: "/utilities-methods/file-reader",
        element: <FileReaderPage />,
      },
      {
        path: "/utilities-methods/file-uploader",
        element: <FileUploaderPage />,
      },
      {
        path: "/utilities-methods/file-downloader",
        element: <FileDownloadPage />,
      },
    ],
  },
]);

const MainRouter = (props) => {
  return <RouterProvider router={router} />;
};
export default MainRouter;
