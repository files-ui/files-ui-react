import { Paper } from "@mui/material";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import CodeDemoDownload2 from "../../components/demo-components/demo-download/CodeDemoDownload";
import CodeDemoDownload1 from "../../components/demo-components/demo-download/CodeDemoDownload1";
import CodeDemoDownload3 from "../../components/demo-components/demo-download/CodeDemoDownload3";
import DemoDownload1 from "../../components/demo-components/demo-download/DemoDownload1";
import DemoDownload2 from "../../components/demo-components/demo-download/DemoDownload2";
import DemoDownload3 from "../../components/demo-components/demo-download/DemoDownload3";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import AnchorToTab from "../../components/util-components/AnchorToTab";
import { scrollHandler } from "../../utils/scrollHandler";

const FileDownloadPage = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () =>
      scrollHandler(rightMenuItems, setSelectedItem)
    );
    return () => {
      window.removeEventListener("scroll", () =>
        scrollHandler(rightMenuItems, setSelectedItem)
      );
    };
  }, []);
  return (
    <React.Fragment>
      <MainLayoutPage selectedIndex={9}>
        <MainContentContainer>
          <MainTitle>File Download</MainTitle>
          <MainParagraph>
            In this page you will find some demos for downloading files with{" "}
            <CodeHighlight>{"<FileMosaic/>"}</CodeHighlight> and{" "}
            <CodeHighlight>{"<FileCard/>"}</CodeHighlight> components.
          </MainParagraph>
          <section id="samehost">
            <SubTitle content="Same origin URL" />
            <DescParagraph>
              When only <CodeHighlight>downloadUrl</CodeHighlight> is specified,
              FileMosaic will perform the download only for{" "}
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">
                same-origin URLs
              </AnchorToTab>{" "}
              since it uses the{" "}
              <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes">
                anchor
              </AnchorToTab>{" "}
              tag under the hood.
            </DescParagraph>
            <Paper
              variant="outlined"
              style={{
                padding: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <DemoDownload1 />
            </Paper>
            <CodeDemoDownload1 />
          </section>
          <section id="differenthost1">
            <SubTitle content="Different origin URL and 'downloadUrl' prop specified" />
            <DescParagraph>
              When only <CodeHighlight>downloadUrl</CodeHighlight> is specified
              and if the resource is located in any other host (on Stean for
              instance), the component will open a new tab and display the
              content.
            </DescParagraph>
            <Paper
              variant="outlined"
              style={{
                padding: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <DemoDownload2 />
            </Paper>
            <CodeDemoDownload2 />
          </section>
          <section id="differenthost2">
            <SubTitle content="Different origin URL and 'onDownload' prop specified" />
            <DescParagraph>
              For avoiding the behaviour described above, you can do you own
              download implementation by overriding the download function by
              setting the <CodeHighlight>onDownload</CodeHighlight> prop. There
              is an example of how to do it with pure javascript.
              <br />
              The approach we use here can be summerized in 4 steps:
              <ol>
                <li>
                  Make a GET request with{" "}
                  <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/fetch">
                    fetch API
                  </AnchorToTab>{" "}
                  (you can use{" "}
                  <AnchorToTab href="https://axios-http.com/">
                    axios
                  </AnchorToTab>{" "}
                  or any other way to fetch resources from internet).
                </li>
                <li>
                  Create an{" "}
                  <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL">
                    Object URL
                  </AnchorToTab>{" "}
                  from the{" "}
                  <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">
                    Blob
                  </AnchorToTab>{" "}
                  file.
                </li>
                <li>
                  Create an{" "}
                  <AnchorToTab href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes">
                    anchor tag
                  </AnchorToTab>{" "}
                  set the attributes, append it to the document, and click it
                  programatically.
                </li>
                <li>
                  Finally, revoke the Object URL and remove the anchor from
                  document.
                </li>
              </ol>
              
            </DescParagraph>
            <Paper
              variant="outlined"
              style={{
                padding: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <DemoDownload3 />
            </Paper>
            <CodeDemoDownload3 />
          </section>{" "}
          <section id="api">
            <SubTitle content="API" />
            <DescParagraph>
              See the documentation below for a complete reference to all of the
              props available to the components mentioned here.
            </DescParagraph>
            <ul>
              <li>
                <AnchorToTab href="/api/filemosaic">
                  {"<FileMosaic/>"}
                </AnchorToTab>
              </li>
              <li>
                <AnchorToTab href="/api/filecard">{"<FileCard/>"}</AnchorToTab>
              </li>
            </ul>
          </section>
        </MainContentContainer>
      </MainLayoutPage>

      <RightMenuContainer>
        <RightMenu
          width="240px"
          items={rightMenuItems}
          selectedItemProp={selectedItem}
          setSelected={setSelectedItem}
        />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileDownloadPage;

const rightMenuItems = [
  {
    id: 0,
    label: "Same host",
    referTo: "/file-download#samehost",
  },
  {
    id: 1,
    label: "Different host 1",
    referTo: "/file-download#differenthost1",
  },
  {
    id: 2,
    label: "Different host 2",
    referTo: "/file-download#differenthost2",
  },
  {
    id: 3,
    label: "Components API",
    referTo: "/file-download#api",
  },
];
