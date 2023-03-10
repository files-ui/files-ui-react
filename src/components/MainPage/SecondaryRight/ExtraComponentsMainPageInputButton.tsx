import * as React from "react";
import { Stack, Paper } from "@mui/material";
import {
  FileCard,
  ExtFile,
  FullScreen,
  ImagePreview,
  VideoPreview,
  FileInputButton,
} from "../../../files-ui";
import AnchorToTab from "../../util-components/AnchorToTab";
import TypeHighlight from "../../typeHighlight/TypeHighlight";

interface ExtraComponentsMainPageProps {
  darkMode?: boolean;
}
const ExtraComponentsMainPageInputButton: React.FC<
  ExtraComponentsMainPageProps
> = (props: ExtraComponentsMainPageProps) => {
  const { darkMode } = props;
  const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

  const updateFile = (incommingFiles: ExtFile[]) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };

  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        padding: "20px 0",
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        height: "100%",
      }}
    >
      <TypeHighlight>
        <AnchorToTab href="/components/fileinputbutton">
          <h3 style={{ margin: 0 }}>{"<FileInputButton/>"}</h3>
        </AnchorToTab>
      </TypeHighlight>
      <Stack
        direction={"column"}
        spacing={2}
        alignItems="center"
        justifyContent={"space-evenly"}
        sx={{
          flexWrap: "wrap",
          flexGrow:1,
          //height: "100%",
        }}
      >
        {value ? (
          <FileCard {...value} onDelete={removeFile} info />
        ) : (
          <FileInputButton value={value ? [value] : []} onChange={updateFile} />
        )}
        <FileCard {...sampleFileProps} info />
      </Stack>
    </Paper>
  );
};
export default ExtraComponentsMainPageInputButton;

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
