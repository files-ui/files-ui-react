import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import PropsTableApi from "../api/PropsTableApi";

const rightMenuItems = [
  {
    id: 1,
    label: "ExtFile",
    referTo: "/types#extfile",
  },
  {
    id: 2,
    label: "CustomValidateFileResponse",
    referTo: "/types#customvalidatefileresponse",
  },
  {
    id: 3,
    label: "UploadConfig",
    referTo: "/types#uploadconfig",
  },
  {
    id: 4,
    label: "ActionButtons",
    referTo: "/types#actionbuttons",
  },
  {
    id: 5,
    label: "HeaderConfig",
    referTo: "/types#headerconfig",
  },
  {
    id: 6,
    label: "FooterConfig",
    referTo: "/types#footerconfig",
  },
];

const TypesPage = (props) => {
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={6}>
        <MainContentContainer>
          <MainTitle>Types</MainTitle>
          <MainParagraph>
            API reference docs for all the important types related to files UI
            components.
          </MainParagraph>
          <section id="extfile">
            <PropsTableApi rows={[]} title="ExtFile" />
          </section>
          <section id="customvalidatefileresponse">
            <PropsTableApi rows={[]} title="CustomValidateFileResponse" />
          </section>
          <section id="actionbuttons">
            <PropsTableApi rows={[]} title="ActionButtons" />
          </section>
          <section id="uploadconfig">
            <PropsTableApi rows={[]} title="UploadConfig" />
          </section>
          <section id="headerconfig">
            <PropsTableApi rows={[]} title="HeaderConfig" />
          </section>
          <section id="footerconfig">
            <PropsTableApi rows={[]} title="FooterConfig" />
          </section>
        </MainContentContainer>
      </MainLayoutPage>{" "}
      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default TypesPage;
