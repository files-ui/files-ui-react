import * as React from "react";
import "../styles/MainPage.scss";
import logo_blue from "../static/files-ui-logo-blue.png";
import logo_blue_dark from "../static/files-ui-logo-blue-dark.png";
import DropzoneMainPage from "../components/demo-components/main-page/DropzoneMainPage";

import GettingStarted from "../components/MainPage/GettingStarted";
import MainNavBar from "../components/MainPage/MainNavBar";
import MainFooter from "../components/MainPage/MainFooter";
import FileMosaicImageVideoPreviews from "../components/MainPage/MainRight/FileMosaicImageVideoPreviews";
import { Divider } from "@mui/material";
import ExtraComponentsMainPage from "../components/MainPage/SecondaryRight/ExtraComponentsMainPage";
import ExtraComponentsMainPageInputButton from "../components/MainPage/SecondaryRight/ExtraComponentsMainPageInputButton";
import ExtraComponentsMainPageAvatar from "../components/MainPage/SecondaryRight/ExtraComponentsMainPageAvatar";
import { UserContext } from "../globals/contexts/UserContext";

const MainPage = ({ darkMode }) => {
  const [usuario, dispatch] = React.useContext(UserContext);

  // const [darkModeOn, setDarkModeOn] = React.useState(false);
  const darkModeOn = usuario.darkMode;
  console.log("userReducer darkModeOn", darkModeOn);

  const handleDarkMode = () => {
    // setDarkModeOn((darkModeOn) => !darkModeOn);
    if (!darkModeOn) dispatch({ type: "TURNOFFLIGHT" });
    else dispatch({ type: "TURNONLIGHT" });
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
              <img
                className="fui-logo-img"
                src={logo_blue}
                alt={"files-ui-logo-blue"}
              />
            ) : (
              <img
                className="fui-logo-img"
                src={logo_blue_dark}
                alt={"files-ui-logo-dark"}
              />
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
      <section
        id="more-components"
        className={
          darkModeOn
            ? "files-ui-secondary-container darkmode"
            : "files-ui-secondary-container"
        }
      >
        <div className="secondary-content">
          <h2
            className={!darkModeOn ? "fui-logo-text" : "fui-logo-text darkmode"}
          >
            Yes! There are even more components
          </h2>
          <div className="secondary-content-flex">
            <div className="secondary-item">
              <ExtraComponentsMainPage darkMode={darkModeOn} />
            </div>
            <div className="secondary-item">
              <ExtraComponentsMainPageInputButton darkMode={darkModeOn} />
            </div>
            <div className="secondary-item">
              <ExtraComponentsMainPageAvatar darkMode={darkModeOn} />
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};
export default MainPage;
