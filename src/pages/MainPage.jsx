import * as React from "react";
import "../styles/MainPage.scss";
import logoLight from "../static/files-ui-logo-blue-wbg.png";
import logo_blue from "../static/files-ui-logo-blue.png";
import logo_blue_dark from "../static/files-ui-logo-blue-dark.png";
import DropzoneMainPage from "../components/DropzoneMainPage";

import GettingStarted from "../components/MainPage/GettingStarted";
import MainNavBar from "../components/MainPage/MainNavBar";
import MainFooter from "../components/MainPage/MainFooter";
import FileMosaicImageVideoPreviews from "../components/MainPage/MainRight/FileMosaicImageVideoPreviews";
//import FileCard from "../files-ui/components/file-item/components/FileCard/FileCard";
import { Divider } from "@mui/material";

const MainPage = ({ darkMode }) => {
  const [darkModeOn, setDarkModeOn] = React.useState(false);

  const handleDarkMode = () => {
    setDarkModeOn((darkModeOn) => !darkModeOn);
  };

  return (
    <div className={`files-uimain-container${darkModeOn ? ` darkmode` : ""}`}>
      <MainNavBar
        darkModeOn={darkModeOn}
        logo_blue={logo_blue}
        logo_blue_dark={logo_blue_dark}
        handleDarkMode={handleDarkMode}
      />
      <main className="filesui-main">
        <div className="fui-main-left">
          <div className={"filesui-main-logo-container"}>
            {!darkMode ? (
              <img className="fui-logo-img" src={logo_blue} />
            ) : (
              <img className="fui-logo-img" src={logo_blue_dark} />
            )}
          </div>

          {/*  <Badges /> */}

          <h1
            className={!darkModeOn ? "fui-logo-text" : "fui-logo-text darkmode"}
          >
            File Uploads with{" "}
            <span className="gradient-span">Superiorly designed</span>{" "}
            components
          </h1>

          <p className="fui-description">
            Make the file upload task easy for developers and end-users.
          </p>

          <GettingStarted darkModeOn={darkModeOn} />
        </div>
        <div className="fui-main-right">
          <DropzoneMainPage darkMode={darkModeOn} />
          <Divider sx={{ borderColor: darkMode ? "#121212" : undefined }} />
          <FileMosaicImageVideoPreviews darkMode={darkModeOn} />
        </div>
      </main>

      <MainFooter />
    </div>
  );
};
export default MainPage;

{
  /* return (
    <div style={containerMainStyle}>
      <div style={contenedorMosaicStyle}>
        <FileItemMock mosaic />
      </div>
      <div style={{ ...contenedorMosaicStyle, backgroundColor: "#042354" }}>
        <FileItemMock mosaic darkMode={true} />
      </div>
      <div style={contenedorMosaicStyle}>
        <FileItemMock />
      </div>
      <div style={{ ...contenedorMosaicStyle, backgroundColor: "#042354" }}>
        <FileItemMock darkMode={true} />
      </div>
      <div style={contenedorCardStyle}>
        <FileCardMock />
      </div>
      <div style={{ ...contenedorCardStyle, backgroundColor: "#042354" }}>
        <FileCardMock darkMode={true} />
      </div> 
    </div>
  );*/
}
