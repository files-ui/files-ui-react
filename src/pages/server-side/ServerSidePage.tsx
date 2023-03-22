import { Paper } from "@mui/material";
import * as React from "react";
import CodeDemoServerSideJava from "../../components/demo-components/demo-server-side/CodeDemoServerSideJava";
import CodeDemoServerSideExpress from "../../components/demo-components/demo-server-side/CodeDemoServerSideExpress";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import { FileMosaic } from "../../files-ui";
import { redirect } from "../../utils/redirect";
const ServerSidePage = () => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={6}>
        <MainContentContainer>
          <MainTitle>Server Side implementations</MainTitle>
          <MainParagraph>
            Some implementations to correctly handle uploaded files using Files
            UI.
          </MainParagraph>
          <DescParagraph>
            <ul>
              <li>
                If you think more server-side samples should be added or would
                like to contribute by fixing or adding a new server-side sampler
                in programming languages not yet covered, please contact us.
              </li>
            </ul>
          </DescParagraph>
          <section id="expressjs">
            <SubTitle content="Express JS" />
            <Paper
              variant="outlined"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                padding: "25px",
                justifyContent: "space-evenly",
              }}
            >
              <FileMosaic
                {...logoExpress}
                onClick={() =>
                  redirect(
                    "https://github.com/files-ui/files-ui-web-test/tree/master/expressjs"
                  )
                }
                //{...logoExpress.extraData}
                //smartImgFit={"center"}
              />{" "}
              <DescParagraph>
                The following code is just the main part of a project.
                <br />
                Check it up in the following{" "}
                <AnchorToTab href="https://github.com/files-ui/files-ui-web-test/tree/master/expressjs">
                  link
                </AnchorToTab>
                .



              </DescParagraph>
            </Paper>
            <CodeDemoServerSideExpress splittedOnly/>
          </section>
          <section id="springboot">
            <SubTitle content="Java - Spring boot" />{" "}
            <Paper
              variant="outlined"
              style={{
                display: "flex",
                flexDirection: "revert",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "25px",
              }}
            >
              <FileMosaic
                {...logoJava}
                onClick={() =>
                  redirect(
                    "https://github.com/files-ui/files-ui-web-test/tree/master/springboot"
                  )
                }
              />{" "}
              <DescParagraph>
                The following code is just the main part of a project.
                <br />
                Check it up in the following{" "}
                <AnchorToTab href="https://github.com/files-ui/files-ui-web-test/tree/master/springboot">
                  link
                </AnchorToTab>
                .
              </DescParagraph>
            </Paper>
            <CodeDemoServerSideJava splittedOnly/>
          </section>
        </MainContentContainer>
        <RightMenuContainer>
          <RightMenu width="240px" items={rightMenuItems} />
        </RightMenuContainer>
      </MainLayoutPage>
    </React.Fragment>
  );
};
export default ServerSidePage;

const rightMenuItems = [
  {
    id: 0,
    label: "ExpressJS",
    referTo: "/server-side#expressjs",
  },
  {
    id: 1,
    label: "Spring Boot (Java)",
    referTo: "/server-side#springboot",
  },
];

const logoExpress = {
  id: ":0:",
  //size: 28 * 1024 * 1024,
  type: "image/png",
  imageUrl: "/serverside/nodeexpress.jpg",
  name: "Click me!",

};

const logoJava = {
  id: ":1:",
  //size: 28 * 1024 * 1024,
  type: "image/png",
  imageUrl: "/serverside/springbootjavalogo.png",
  name: "Click me!",
};
