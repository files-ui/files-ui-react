import * as React from "react";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";

const ServerSidePage = () => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={6}>
        <MainContentContainer>
          <MainTitle>Server Side implementations</MainTitle>
          <MainParagraph>
            Some implementations for handling correctly the uploaded files using
            Files UI.
          </MainParagraph>
          <DescParagraph>
            If you think there should be added more of them or you want to add
            your own in any other programming language, please contact us.
          </DescParagraph>
          <section id="expressjs">
            <SubTitle content="Express JS" />
            <DescParagraph>
              The following code is just the main part of a project. Check it up
              in the following{" "}
              <AnchorToTab href="https://github.com/files-ui/files-ui-web-test/tree/master/expressjs">
                here
              </AnchorToTab>
              .
            </DescParagraph>
          </section>
          <section id="springboot">
            <SubTitle content="Java - Spring boot" />{" "}
            <DescParagraph>
              The following code is just the main part of a project. Check it up
              in the following{" "}
              <AnchorToTab href="https://github.com/files-ui/files-ui-web-test/tree/master/springboot">
                here
              </AnchorToTab>
              .
            </DescParagraph>
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
