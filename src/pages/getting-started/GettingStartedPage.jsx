import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Overview from "../../components/getting-started/Overview";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import NavBarTemplate from "../../templates/NavBarTemplate";
import logoLight from "../../static/files-ui-logo-blue-wbg.png";
import logo_blue from "../../static/files-ui-logo-blue.png";
import "../../styles/GettingStartedPage.scss";
import InstallationNPM from "../../components/getting-started/InstallationNPM";
import InstallationYarn from "../../components/getting-started/InstallationYarn";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import Paper from "@mui/material/Paper";
import BasicDemoDropzone from "../../components/demo-components/dropzone-demo/BasicDropzoneDemo";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
const GettingStartedPage = ({ darkModeOn }) => {
  return (
    <MainLayoutPage selectedIndex={0}>
      <MainContentContainer>
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <img
            className="fui-logo-img-getting-started"
            src={!darkModeOn ? logo_blue : logoLight}
          />
          <MainTitle>Files UI - Getting started!</MainTitle>
        </Stack>
        <section id="overview">
          <Overview />
        </section>

        <section id="installation">
          <SubTitle content="Installation" />

          <MainParagraph>
            Run one of the following commands to add Files UI to your project:
          </MainParagraph>
          <h3>npm:</h3>
          <InstallationNPM />
          <h3>yarn:</h3>
          <InstallationYarn />
        </section>

        <section id="peer-dependency">
          <SubTitle content="Peer dependency" />

          <DescParagraph>
            <code className="code">react </code> {">= 17.0.0 "}and{" "}
            <code className="code">react-dom</code>
            {" >= 17.0.0 "} are peer dependencies.
          </DescParagraph>
        </section>
        <section id="default-font">
          <SubTitle content="Default font" />

          <DescParagraph>
            Files UI components use the Poppins font by default. However, you
            can set your own font-family en each component.
          </DescParagraph>
        </section>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};
export default GettingStartedPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Overview",
    referTo: "/getting-started#overview",
  },
  {
    id: 1,
    label: "Installation",
    referTo: "/getting-started#installation",
  },
  {
    id: 2,
    label: "Peer dependency",
    referTo: "/getting-started#peer-dependency",
  },
  { id: 3, label: "Default font", referTo: "/getting-started#default-font" },
];
