import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const TypesPage = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={6}>
        <MainContentContainer>
          <MainTitle>Types</MainTitle>
        </MainContentContainer>
      </MainLayoutPage>{" "}
      <RightMenuContainer>
        <RightMenu width="240px" items={[]} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default TypesPage;
