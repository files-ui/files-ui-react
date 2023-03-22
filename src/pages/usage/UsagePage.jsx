import * as React from "react";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainLayoutPage from "../../components/layout-pages/MainLayoutPage";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import BasicDropzoneCodeJS from "../../components/demo-components/dropzone-demo/BasicDropzoneCodeJS";
import Paper from "@mui/material/Paper";
import AdvancedDropzoneDemo from "../../components/demo-components/dropzone-demo/AdvancedDropzoneDemo";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import AdvancedDropzoneCodeJS from "../../components/demo-components/dropzone-demo/AdvancedDropzoneCodeJS";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import MainTitle from "../../components/main-title/MainTitle";
import { scrollHandler } from "../../utils/scrollHandler";
const rightMenuItems = [
  { id: 0, label: "Quick start", referTo: "/usage#quick-start" },
  {
    id: 1,
    label: "Advanced examples",
    referTo: "/usage#advanced-example",
  },
];
const UsagePage = (props) => {
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
    <MainLayoutPage selectedIndex={1}>
      <MainContentContainer>
        <MainTitle>Usage</MainTitle>
        <MainParagraph>
          Learn the basics of working with Files UI components.
        </MainParagraph>

        <section id="quick-start">
          <DescParagraph>
            <SubTitle content="Quick start (Basic exaple)" />
            The following code snippet demonstrates a simple app that uses the
            Files UI <a href="/components/dropzone">Dropzone</a> and{" "}
            <a href="/components/filemosaic">FileMosaic</a> components:
          </DescParagraph>
          <DescParagraph>
            In this demo we set dropzone with the minimun props that allows you
            to get done fast. These props are{" "}
            <CodeHighlight>onChange</CodeHighlight> and{" "}
            <CodeHighlight>value</CodeHighlight> props. This example is the same
            as the one you will find in the{" "}
            <a href="/components/dropzone#basic-dropzone">Basic dropzone</a>{" "}
            section.
          </DescParagraph>{" "}
          <BasicDropzoneCodeJS splittedOnly />
          {/* <Paper variant="outlined" style={{ padding: "25px" }}>
          <BasicDemoDropzone />
        </Paper>{" "} */}
          <DescParagraph>
            You can play around with this code in the interactive Code Sandbox
            demo below. Try adding the <CodeHighlight>accept</CodeHighlight>{" "}
            prop to the Dropzone to see the changes:
          </DescParagraph>
          <iframe
            title="codesandbox"
            src="https://codesandbox.io/embed/dropzone-ui-basic-3j01v"
            //src="https://codesandbox.io/embed/u9sy1h?hidenavigation=1&amp;fontsize=14&amp;view=preview"
            //src="https://codesandbox.io/s/material-ui-u9sy1h"
            style={{
              width: "100%",
              height: "500px",
              border: "0px none",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </section>

        <section id="advanced-example">
          <SubTitle content="Advanced Example" />
          <DescParagraph>
            In this example we set dropzone with the props that allows
            validation and upload. These props are:
            <ul>
              <li>
                For validating: <CodeHighlight>accept</CodeHighlight>,{" "}
                <CodeHighlight>maxFiles</CodeHighlight> and{" "}
                <CodeHighlight>maxFileSize</CodeHighlight>
              </li>
              <li>
                For uploading: <CodeHighlight>uploadConfig</CodeHighlight>
              </li>
              <li>
                For simulating the upload process:{" "}
                <CodeHighlight>fakeUpload</CodeHighlight>
              </li>
            </ul>
          </DescParagraph>

          <Paper variant="outlined" style={{ padding: "25px" }}>
            <AdvancedDropzoneDemo />
          </Paper>
          <AdvancedDropzoneCodeJS />
        </section>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu
          width="240px"
          items={rightMenuItems}
          selectedItemProp={selectedItem}
          setSelected={setSelectedItem}
        />
      </RightMenuContainer>
    </MainLayoutPage>
  );
};
export default UsagePage;
