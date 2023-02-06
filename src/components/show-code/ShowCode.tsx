import { ButtonGroup, Stack, Tooltip, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import * as React from "react";
import JSIcon from "../demo-components/icons/JSIcon";
import TSIcon from "../demo-components/icons/TSIcon";
import { Highlighter } from "rc-highlight";
interface ShowCodeProps {
  codeSandboxJS?: string;
  codeSandboxTS?: string;
  codeSplittedJS?: string;
  codeSplittedTS?: string;
  codeCompleteJS?: string;
  codeCompleteTS?: string;
  splittedOnly?:boolean;
}
const ShowCode: React.FC<ShowCodeProps> = (props: ShowCodeProps) => {
  const {
    codeSandboxJS = "https://codesandbox.io/s/dropzone-ui-basic-3j01v",
    codeSandboxTS = "https://codesandbox.io/s/dropzone-ui-basic-3j01v",
    codeCompleteJS,
    codeCompleteTS,
    codeSplittedJS,
    codeSplittedTS,
    splittedOnly=false
  } = props;
  const [showComplete, setShowComplete] = React.useState(false);
  const [showJS, setShowJS] = React.useState(true);

  const code = showComplete
    ? showJS
      ? codeCompleteJS
      : codeCompleteTS
    : showJS
    ? codeSplittedJS
    : codeSplittedTS;

  return (
    <React.Fragment>
     {!splittedOnly && <Stack
        direction={"row"}
        justifyContent="space-between"
        style={{ marginTop: "20px" }}
      >
        <Stack direction={"row"} justifyContent="flex-start">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              size="small"
              style={showJS ? { backgroundColor: "rgba(4, 35, 84, 0.09)" } : {}}
              //startIcon={}
              onClick={() => setShowJS(true)}
            >
              <JSIcon />
            </Button>
            <Button
              size="small"
              style={
                !showJS ? { backgroundColor: "rgba(4, 35, 84, 0.09)" } : {}
              }
              //  endIcon={}
              onClick={() => setShowJS(false)}
            >
              <TSIcon />
            </Button>
          </ButtonGroup>
        </Stack>

        <Stack direction={"row"} justifyContent="flex-end">
          <Tooltip title={showComplete ? "Hide full code" : "Show full code"}>
            <IconButton
              style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
              onClick={() => setShowComplete((showComplete) => !showComplete)}
              //color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <CodeIcon /* htmlColor="white" */ />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Edit in CodeSandBox"}>
            <IconButton
              style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
              onClick={() => {
                window?.open(showJS ? codeSandboxJS : codeSandboxTS, "_blank");
              }}
              //color="secondary"
              aria-label="upload picture"
              component="label"
            >
              <ViewInArIcon /* htmlColor="white" */ />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>}
      <Highlighter
        onCopyToClipboard={(code_) => {
          console.log("code copied to clipboard: ");
          console.log(code_);
        }}
        style={{ margin: "20px 0" }}
      >
        {code}
      </Highlighter>
    </React.Fragment>
  );
};
export default ShowCode;
