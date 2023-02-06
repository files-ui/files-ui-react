
import { Highlighter } from "rc-highlight";
import React, { Fragment, useEffect, useState } from "react";
//import { Highlighter } from "../../HIGHLIGHTER";

const InteractiveGeneratedCode = (props) => {
  const {
    accept,
    maxHeight,
    localization,
    minHeight,
    hd,
    info,
    preview,
    alwaysActive,
    onSee,
    onDeleteVal,
    viewValue,
    footerDis,
    headerDis,
    elevation,
    url,
    method,
    behaviour,
    uploadingMessage,
    config,
    uploadOnDrop,
    fakeupload,
    label,
    maxFileSize,
    maxFiles,
    onClean,
    color,
    clickableDis,
    resultOnTooltip,
    disableScroll,
  } = props;
  const [code, setCode] = useState("");
  const makeAccept = (accept) => {
    if (!accept || accept.length === 0) {
      return ``;
    }
    return `\n\taccept={"${accept}"}\n`;
  };
  const makeLocalization = (localization, item) => {
    if (!localization || localization.length === 0) {
      return ``;
    }
    if (item) {
      return `\n\t    localization={"${localization}"}\n`;
    }
    return `\n\tlocalization={"${localization}"}\n`;
  };
  const makeMinHeight = (minHeight) => {
    if (!minHeight || minHeight.length === 0) {
      return ``;
    }
    return `\n\tminHeight={"${minHeight}"}\n`;
  };
  const makeMaxHeight = (maxHeight) => {
    if (!maxHeight || maxHeight.length === 0) {
      return ``;
    }
    return `\n\tmaxHeight={"${maxHeight}"}\n`;
  };
  const makeView = (viewValue) => {
    if (viewValue === "unset") {
      return ``;
    }
    return `\n\tviewValue={"${viewValue}"}\n`;
  };
  const makeFooter = (footerDis) => {
    if (!footerDis) {
      return ``;
    }
    return `\n\tfooter={${!footerDis}}\n`;
  };
  const makeHeader = (headerDis) => {
    if (!headerDis) {
      return ``;
    }
    return `\n\theader={${!headerDis}}\n`;
  };
  function makeUrl(url) {
    if (!url) {
      return ``;
    }
    return `\n\turl={"${url}"}\n`;
  }
  function makeMethod(method) {
    if (!method) {
      return ``;
    }
    return `\n\tmethod={"${method}"}\n`;
  }
  function makeBehaviour(behaviour) {
    if (behaviour === "unset") {
      return ``;
    }
    return `\n\tbehaviour={"${behaviour}"}\n`;
  }
  function makeUploadingMessage(uploadingMessage) {
    //console.log("upload message", uploadingMessage);
    if (!uploadingMessage) {
      return ``;
    }
    return `\n\tuploadingMessage={"${uploadingMessage}"}\n`;
  }
  function makeConfig(config) {
    if (!config) {
      return ``;
    }
    return `\n\tconfig={${config}}\n`;
  }

  function makeUploadOnDrop(uploadOnDrop) {
    if (!uploadOnDrop) {
      return ``;
    }
    return `\n\tuploadOnDrop\n`;
  }
  function makeFakeUpload(fakeupload) {
    if (!fakeupload) {
      return ``;
    }
    return `\n\tfakeupload\n`;
  }
  function makeLabel(label) {
    if (!label) {
      return ``;
    }
    return `\n\tlabel={"${label}"}\n`;
  }
  function makeMaxFileSize(maxFileSize) {
    if (!maxFileSize) {
      return ``;
    }
    return `\n\tmaxFileSize={${maxFileSize}}\n`;
  }
  function makeMaxFiles(maxFiles) {
    if (!maxFiles) {
      return ``;
    }
    return `\n\tmaxFiles={${maxFiles}}\n`;
  }
  function makeonClean(onClean) {
    if (!onClean) {
      return ``;
    }
    return `\n\tonClean\n`;
  }
  function makeColor(color) {
    if (!color) {
      return ``;
    }
    return `\n\tcolor={"${color}"}\n`;
  }
  function makeClickable(clickable) {
    if (!clickable) {
      return ``;
    }
    return `\n\tclickable={"${clickable}"}\n`;
  }
  function makeDisableScroll(disableScroll) {
    if (!disableScroll) {
      return ``;
    }
    return `\n\tdisableScroll\n`;
  }
  ////////////////// FILE ITEM
  function makeHd(hd) {
    if (hd) {
      return `\n\t    hd\n`;
    } else {
      return ``;
    }
  }
  function makePreview(preview) {
    if (preview) {
      return `\n\t    preview\n`;
    } else {
      return ``;
    }
  }
  function makeInfo(info) {
    if (info) {
      return `\n\t    info\n`;
    } else {
      return ``;
    }
  }
  function makeAlwaysActive(alwaysActive) {
    if (alwaysActive) {
      return `\n\t    alwaysActive\n`;
    } else {
      return ``;
    }
  }
  function makeOnSee(onSee) {
    if (onSee) {
      return `\n\t    onSee={handleSee}\n`;
    } else {
      return ``;
    }
  }
  function makeOnDelete(onDeleteVal) {
    if (onDeleteVal) {
      return `\n\t    onDelete={handleDelete}\n`;
    } else {
      return ``;
    }
  }
  const makeElevation = (elevation) => {
    if (!elevation || elevation === 0) {
      return ``;
    } else {
      return `\n\t    elevation={${elevation}}\n`;
    }
  };
  function makeResultOnTooltip(resultOnTooltip) {
    if (resultOnTooltip) {
      return `\n\t    resultOnTooltip\n`;
    } else {
      return ``;
    }
  }
  //////// MAIN CODE
  const makeCode = (
    accept,
    maxHeight,
    localization,
    minHeight,
    hd,
    info,
    preview,
    alwaysActive,
    onSee,
    onDeleteVal,
    viewValue,
    footerDis,
    headerDis,
    elevation,
    url,
    method,
    behaviour,
    uploadingMessage,
    config,
    uploadOnDrop,
    fakeupload,
    label,
    maxFileSize,
    maxFiles,
    onClean,
    color,
    clickableDis,
    resultOnTooltip,disableScroll,
  ) => {
    return (
      `
  import { Dropzone, FileItem${
    onSee ? ", FullScreenPreview " : " "
  }} from "@dropzone-ui/react";
  import { useState } from "react";
  export default function App() {
    const [files, setFiles] = useState([]);` +
      makeImgSrcState(onSee) +
      `
    const updateFiles = (incommingFiles) => {
      console.log("incomming files", incommingFiles);
      setFiles(incommingFiles);
    };` +
      makeOnDeleteHandler(onDeleteVal) +
      makeHandleSee(onSee) +
      `
    return (
      <Dropzone
        onChange={updateFiles}
        value={files}` +
      makeClickable(clickableDis) +
      makeonClean(onClean) +
      makeAccept(accept) +
      makeMaxFileSize(maxFileSize) +
      makeMaxFiles(maxFiles) +
      makeLabel(label) +
      makeMinHeight(minHeight) +
      makeMaxHeight(maxHeight) +
      makeLocalization(localization) +
      makeView(viewValue) +
      makeFooter(footerDis) +
      makeHeader(headerDis) +
      makeUrl(url) +
      makeMethod(method) +
      makeUploadingMessage(uploadingMessage) +
      makeBehaviour(behaviour) +
      makeConfig(config) +
      makeUploadOnDrop(uploadOnDrop) +
      makeColor(color) +
      makeFakeUpload(fakeupload) +
      makeDisableScroll(disableScroll)+
      `
      >
        {files.length>0 && files.map((file) => (
          <FileItem
            {...file}
            key={file.id}` +
      makeOnDelete(onDeleteVal) +
      makeOnSee(onSee) +
      makeAlwaysActive(alwaysActive) +
      makeLocalization(localization, true) +
      makePreview(preview) +
      makeInfo(info) +
      makeHd(hd) +
      makeElevation(elevation) +
      makeResultOnTooltip(resultOnTooltip) +
      `
          />
        ))}` +
      //makeFullScreenOnseeComponent(onSee) +
      `
      </Dropzone>
      ${makeFullScreenOnseeComponent(onSee)}
    );
  }
      `
    );
  };
  useEffect(() => {
    const codeGenerated = makeCode(
      accept,
      maxHeight,
      localization,
      minHeight,
      hd,
      info,
      preview,
      alwaysActive,
      onSee,
      onDeleteVal,
      viewValue,
      footerDis,
      headerDis,
      elevation,
      url,
      method,
      behaviour,
      uploadingMessage,
      config,
      uploadOnDrop,
      fakeupload,
      label,
      maxFileSize,
      maxFiles,
      onClean,
      color,
      clickableDis,
      resultOnTooltip,disableScroll,
    );
    setCode(codeGenerated);
    // eslint-disable-next-line
  }, [
    accept,
    maxHeight,
    localization,
    minHeight,
    hd,
    info,
    preview,
    alwaysActive,
    onSee,
    onDeleteVal,
    viewValue,
    footerDis,
    headerDis,
    elevation,
    url,
    method,
    behaviour,
    uploadingMessage,
    config,
    uploadOnDrop,
    fakeupload,
    label,
    maxFileSize,
    maxFiles,
    onClean,
    color,
    clickableDis,
    resultOnTooltip,disableScroll
  ]);
  return (
    <Fragment>
      <Highlighter
        style={{ margin: "10px 0", backgroundColor: "#010409" }}
        onCopyToClipboard={(code_) => {
          //console.log("copied: " + code_);
        }}
      >
        {code}
      </Highlighter>
    </Fragment>
  );
};
export default InteractiveGeneratedCode;
function makeOnDeleteHandler(onDelete) {
  if (!onDelete) {
    return ``;
  }
  return `
    const onDelete = (id) => {
      setFiles(files.filter((x) => x.id !== id));
    };`;
}
function makeHandleSee(onSee) {
  if (!onSee) {
    return ``;
  }
  return `\n    const handleSee = (imageSource) => {
      setImageSrc(imageSource);
    };\n`;
}
function makeImgSrcState(onSee) {
  if (!onSee) {
    return ``;
  }
  return `\n    const [imageSrc, setImageSrc] = useState(undefined);\n`;
}

function makeFullScreenOnseeComponent(onSee) {
  if (!onSee) {
    return ``;
  }
  return `\n       <FullScreenPreview
          imgSource={imageSrc}
          openImage={imageSrc}
          onClose={(e) => handleSee(undefined)}
       />\n`;
}
