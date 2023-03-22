import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoServerSideExpress = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoServerSideExpress;

const splittedCodeJS = `const express = require("express");
const fileUpload = require("express-fileupload");
// ... some code
app.post("/upload-my-file", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        success: false,
        message: "There was no file found in request",
        payload: {},
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      let file = req.files.file;
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      file.mv("./uploads/" + file.name);
      //send response
      res.send({
        success: true,
        message: "File was uploaded successfuly",
        payload: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
          path: "/files/uploads/",
          url: "https://my-ftp-server.com/bjYJGFYgjfVGHVb",
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected problem",
      payload: {},
    });
  }
});`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = ``;

const completeCodeTS = ``;
