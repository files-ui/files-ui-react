import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const ServerSidePage = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={4}>
        <MainContentContainer>
          <MainTitle>Server Side implementatios</MainTitle>
        </MainContentContainer>{" "}
        <RightMenuContainer>
          <RightMenu width="240px" items={[]} />
        </RightMenuContainer>
      </MainLayoutPage>
    </React.Fragment>
  );
};
export default ServerSidePage;
