import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import * as React from "react";
import CodeHighlight from "../../components/codeHighlight/CodeHighlight";
import DescParagraph from "../../components/demo-components/desc-paragraph/DescParagraph";
import BasicFileMosaicDemo from "../../components/demo-components/filemosaic-demo/BasicFileMosaicDemo";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import MainParagraph from "../../components/paragraph-main/MainParagraph";
import RightMenu from "../../components/RightMenu/RightMenu";
import TypeHighlight from "../../components/typeHighlight/TypeHighlight";
import NavBarTemplate from "../../templates/NavBarTemplate";

const FileMosaicDemoPage = (props) => {
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
            <h1 style={{ fontSize: "2.25rem" }}>FileMosaic</h1>
            <MainParagraph>
              File mosaics are compact elements that represent a file in the UI.
              They can be used for just showing general info of the file, or
              either allow the user to interact with them.
            </MainParagraph>
            <DescParagraph>
              This widget allow users to see information of Files and / or
              trigger actions.
            </DescParagraph>
            <Alert severity="info">
              While included here as a standalone component, the most common use
              will be as a result of the "onChange" event of {"<Dropzone/>"} or{" "}
              {"<InputButton/>"} components, so some of the behavior
              demonstrated here is not shown in context.{" "}
            </Alert>

            <section id="basic-filemosaic">
              <SubTitle content="Basic FileMosaic" />
              <DescParagraph>
                The <CodeHighlight>FileMosaic</CodeHighlight> supports
                displaying information from <TypeHighlight>File</TypeHighlight>{" "}
                object or individual props.
              </DescParagraph>

              <Paper
                variant="outlined"
                style={{
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack spacing={2} direction="row" alignItems={"center"}>
                  
                <BasicFileMosaicDemo />
                </Stack>
              </Paper>
              <p></p>
              {/* <BasicDropzoneCodeJS /> */}
            </section>
            <section id="image-preview">
              <SubTitle content="Image preview" />
              <DescParagraph>
                By setting the <CodeHighlight>preview</CodeHighlight> prop to{" "}
                <TypeHighlight>true</TypeHighlight> the component will show a
                image preview using the <CodeHighlight>imageUrl</CodeHighlight>
                prop or by reading the <TypeHighlight>File</TypeHighlight>{" "}
                object if given (file prop).
              </DescParagraph>

              <Paper variant="outlined" style={{ padding: "25px" }}>
                {/* <BasicDemoDropzone /> */}
              </Paper>
              <p></p>
              {/* <BasicDropzoneCodeJS /> */}
            </section>
            <section id="validation">
              <SubTitle content="Validation" />
              <DescParagraph>
                The <CodeHighlight>valid</CodeHighlight> prop can be set to{" "}
                <TypeHighlight>true</TypeHighlight>,{" "}
                <TypeHighlight>false</TypeHighlight> or{" "}
                <TypeHighlight>undefined</TypeHighlight>
              </DescParagraph>

              <Paper variant="outlined" style={{ padding: "25px" }}>
                {/* <BasicDemoDropzone /> */}
              </Paper>
              <p></p>
              {/* <BasicDropzoneCodeJS /> */}
            </section>
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
          <RightMenu width="240px" items={rightMenuItems} />
        </Box>
      </Stack>
    </NavBarTemplate>
  );
};
export default FileMosaicDemoPage;
const rightMenuItems = [
  {
    id: 0,
    label: "Basic file mosaic",
    referTo: "/components/file-mosaic/#basic-filemosaic",
  },
  {
    id: 1,
    label: "Image Preview",
    referTo: "/components/file-mosaic/#file-mosaic-image-preview",
  },
  {
    id: 2,
    label: "Validation",
    referTo: "/components/file-mosaic/#file-mosaic-validation",
  },
  {
    id: 3,
    label: "Uploading",
    referTo: "/components/file-mosaic/#file-mosaic-uploading",
  },
  {
    id: 4,
    label: "Localization",
    referTo: "/components/file-mosaic/#file-mosaic-localization",
  },
  {
    id: 5,
    label: "Previews",
    referTo: "/components/file-mosaic/#file-mosaic-previews",
  },
  {
    id: 6,
    label: "Actions",
    referTo: "/components/file-mosaic/#actions",
  },
  {
    id: 7,
    label: "Default previews",
    referTo: "/components/file-mosaic/#default-previews",
  },
  {
    id: 8,
    label: "Dark mode",
    referTo: "/components/file-mosaic/#dark-mode",
  },
];
