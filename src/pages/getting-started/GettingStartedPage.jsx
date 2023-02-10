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
const GettingStartedPage = ({ darkModeOn }) => {
  return (
    <NavBarTemplate>
      <Stack direction={"row"} sx={{ position: "relative" }}>
        <Box
          sx={{
            boxSizing: "border-box",
            marginLeft: { xl: "240px", lg: "0px" },
            marginRight: { lg: "240px" },
            width: {
              lg: `min(1000px, calc(100% - ${240}px))`,
            },
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <Stack sx={{ width: "100%", alignItems: "center" }}>
              <img
                className="fui-logo-img-getting-started"
                src={!darkModeOn ? logo_blue : logoLight}
              />
              <h1>Files UI - Getting started!</h1>
            </Stack>

            <section id="overview">
              <Overview />
            </section>

            <section id="installation">
              <SubTitle content="Installation" />

              <MainParagraph>
                Run one of the following commands to add Files UI to your
                project:
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
         {/*    <section id="usage">
              <DescParagraph>
                <SubTitle content="Usage" />
                The following code snippet demonstrates a simple app that uses
                the Files UI <a href="/components/dropzone">
                  Dropzone
                </a> and <a href="/components/filemosaic">FileMosaic</a>{" "}
                components:
                <BasicDropzoneCodeJS />
              </DescParagraph>
            </section> */}
            <section id="default-font">
              <SubTitle content="Default font" />

              <DescParagraph>
                Files UI components use the Poppins font by default. However,
                you can set your own font-family en each component.
              </DescParagraph>
            </section>
          
          {/*   <section id="basic-example">
              <SubTitle content="Basic example" />
              <DescParagraph>
                Files UI components use the Poppins font by default. However,
                you can set your own font-family en each component.
              </DescParagraph>
              <Paper variant="outlined" style={{ padding: "25px" }}>
                <BasicDemoDropzone />
              </Paper>

              <DescParagraph>
                <code className="code">ExtFile</code> type is explicity used in
                the Typescript example and is implicity used in the JS example
                for handling the metadata that makes possible information
                exchange between the components. For further information of this
                type check out the <a href="/types#ext-file">ExtFile-API. </a>
              </DescParagraph>
              <BasicDropzoneCodeJS />
            </section>
            <section id="advanced-example">
              <SubTitle content="Advanced Example" />
              <DescParagraph>
                Files UI components use the Poppins font by default. However,
                you can set your own font-family en each component.
              </DescParagraph>
              <Paper variant="outlined" style={{ padding: "25px" }}>
                <BasicDemoDropzone />
              </Paper>

              <DescParagraph>
                <code className="code">ExtFile</code> type is explicity used in
                the Typescript example and is implicity used in the JS example
                for handling the metadata that makes possible information
                exchange between the components. For further information of this
                type check out the <a href="/types#ext-file">ExtFile-API. </a>
              </DescParagraph>
              <BasicDropzoneCodeJS />
            </section> */}
          </Box>
        </Box>
        
        <Box
          sx={{
            position: "fixed",
            top: 100,
            right: 0,
            width: "240px",
            display: { lg: "flex", xs: "none" },
          }}
        >
          <RightMenu
            width="240px"
            items={[
              {
                id: 0,
                label: "Overview",
                referTo: "/getting-started/#overview",
              },
              {
                id: 1,
                label: "Installation",
                referTo: "/getting-started/#installation",
              },
              {
                id: 2,
                label: "Peer dependency",
                referTo: "/getting-started/#peer-dependency",
              },
              { id: 3, label: "Usage", referTo: "/getting-started/#usage" },
              {
                id: 3,
                label: "Basic example",
                referTo: "/getting-started/#basic-example",
              },
              {
                id: 3,
                label: "Advanced examples",
                referTo: "/getting-started/#advanced-example",
              },
            ]}
          />
        </Box>
      </Stack>
    </NavBarTemplate>
  );
};
export default GettingStartedPage;
