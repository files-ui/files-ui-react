import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const CodeGeneratorPage = (props) => {
  return (
    <MainLayoutPage selectedIndex={5}>
      <MainContentContainer>
        <MainTitle>Code Generator</MainTitle>
      </MainContentContainer>
      <RightMenuContainer>
        <RightMenu width="240px" items={[]} />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};
export default CodeGeneratorPage;
