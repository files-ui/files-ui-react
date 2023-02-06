import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
 import {
  Dropzone,
  FileItem,
  FullScreenPreview,
  VideoPreview,
} from "@dropzone-ui/react"; 
//import {  Dropzone,  FileItem,  FullScreenPreview,  VideoPreview,} from "../../dropzone-ui";
import "./InteractiveCode.scss";
import InteractiveGeneratedCode from "./InteractiveGeneratedCode";
import ElevationSlider from "../../Pages/Components/FileItemProps/ElevationSlider";
import FileSizeSlider from "../../Pages/Components/DropzoneProps/FileSizeSlider";
import FileLimitSlider from "../../Pages/Components/DropzoneProps/FileLimitSlider";
import ElevateAppBar from "../../Templates/ElevateAppBar";
//import FakeFileItem from "../../Components/FakeFileItem/FakeFileItem";

const InteractiveCode = (props) => {
  ////////////////////     DROPZONE PROPS ////////////////
  //color
  const [useColor, setUseColor] = useState(undefined);
  const [color, setColor] = useState("#071e25");
  useEffect(() => {
    if (!useColor) {
      setColor(undefined);
    } else {
      //if (!color) {
      setColor(color);
      //}
    }
  }, [useColor, color]);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  //maxFileSise
  const [maxFileSize, setmaxFileSize] = useState(29300000);
  const handleChangeMaxFileSize = (v) => {
    setmaxFileSize(v);
    // setmaxSize(e.target.value);
  };
  //maxFiles
  const [maxFiles, setMaxFiles] = useState(29300000);
  const handleChangeMaxFiles = (v) => {
    setMaxFiles(v);
    // setmaxSize(e.target.value);
  };
  //label
  const [label, setLabel] = useState("Drop Files here or click to browse");
  const handleChangeLabel = (e) => {
    if (e.target.value.lenght === 0) {
      setLabel(undefined);
    } else setLabel(e.target.value);
  };
  //display
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [videoSrc, setVideoSrc] = useState(undefined);
  const [controls, setControls] = useState(true);
  const [autoplay, setAutoPlay] = useState(true);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  const handleDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  //VIDEOOO PREVIEW
  const handleWatch = (vidSrc) => {
    console.log("handleWatch", vidSrc);
    setVideoSrc(vidSrc);
  };
  //localization
  const [localization, setLocalization] = useState(undefined);
  const hadleSelect = (e, value) => {
    //console.log(value);
    setLocalization(value?.value);
  };
  //accept
  const [accept, setAccept] = useState("image/jpeg,.ts, video/*");
  const handleChangeAccept = (e) => {
    if (e.target.value.lenght === 0) {
      setAccept(undefined);
    } else setAccept(e.target.value);
  };
  //minHeight
  const [minHeight, setMinHeight] = useState("195px");
  const handleMinHeight = (e) => {
    if (e.target.value.lenght === 0) {
      setMinHeight(undefined);
    } else setMinHeight(e.target.value);
  };
  //maxHeight
  const [maxHeight, setMaxHeight] = useState("500px");
  const handleMaxHeight = (e) => {
    if (e.target.value.lenght === 0) {
      setMaxHeight(undefined);
    } else setMaxHeight(e.target.value);
  };
  //view
  const [viewValue, setViewValue] = React.useState("unset");
  const handleCheckView = (e, val) => {
    setViewValue(val);
  };
  const [footerDis, setFooterDis] = React.useState(false);
  const [headerDis, setHeaderDis] = React.useState(false);
  const [clickableDis, setClickableDis] = React.useState(false);
  const [onClean, setOnClean] = React.useState(true);
  const [uploadOnDrop, setUploadOnDrop] = React.useState(false);
  //inner Upload

  //const [innerUpload, setInnerUpload] = useState(false);
  const [url, setUrl] = React.useState(undefined);
  const handleUrl = (e) => {
    if (e.target.value.lenght === 0) {
      setUrl(undefined);
    } else {
      setUrl(e.target.value);
    }
  };
  //method
  const [method, setMethod] = React.useState(undefined);
  const hadleSelectMethod = (e, value) => {
    //console.log("method", value);
    setMethod(value?.method);
  };
  const [fakeupload, setFakeUpload] = React.useState(undefined);
  //const [headerDis, setHeaderDis] = React.useState(false);
  const [behaviour, setBehaviour] = React.useState("unset");
  const handleCheckBehaviour = (e, val) => {
    setBehaviour(val);
  };
  //config
  const defaultHeader = {
    headers: {
      "content-type": "multipart/form-data;",
    },
  };
  const [config, setConfig] = useState(undefined);
  const [useConfig, setUseConfig] = useState(false);
  const handleUseConfig = (v) => {
    if (v) {
      setUseConfig(true);
      setConfig(
        `{\n\t  headers: {\n\t    "Authorization": "Bearer YOUR_BEARER_TOKEN_GOES_HERE",\n\t    "content-type": "multipart/form-data",\n\t  },\n\t}`
      );
    } else {
      setUseConfig(false);
      setConfig(undefined);
    }
  };

  // upload message
  /*  const [uploadingMessage, setUploadingMessage] = useState(
    "....Uploading Files, please wait..."
  ); */
  const [uploadingMessage, setUploadingMessage] = useState(undefined);
  // eslint-disable-next-line
  const handleuploadingMessage = (e) => {
    if (e.target.value.lenght === 0) {
      setUploadingMessage(undefined);
    } else setUploadingMessage(e.target.value);
  };
  /////// NEW
  const [disableScroll, setDisableScroll] = useState(true);
  ////       ////       ////       ////       FILE ITEM
  const [hd, setHd] = React.useState(false);
  const [info, setInfo] = React.useState(true);
  const [preview, setPreview] = React.useState(true);
  const [alwaysActive, setAlwaysActive] = React.useState(true);
  const [resultOnTooltip, setResultOnTooltip] = React.useState(true);
  const [onSee, setOnSee] = React.useState(false);
  const [onDeleteVal, setOnDelete] = React.useState(true);
  const [elevation, setElevation] = React.useState(0);
  return (
    <Fragment>
      <ElevateAppBar />
      <div className="dui-demo-container">
        
        <Dropzone
          //style={{ fontFamily:`"Roboto","Helvetica","Arial",sans-serif` }}
          label={label}
          color={color}
          minHeight={minHeight}
          //maxHeight={maxHeight}
          accept={accept}
          view={viewValue === "unset" ? undefined : viewValue}
          behaviour={behaviour === "unset" ? undefined : behaviour}
          localization={localization}
          onChange={updateFiles}
          value={files}
          footer={footerDis ? false : true}
          header={headerDis ? false : true}
          clickable={clickableDis ? false : true}
          onClean={onClean || undefined}
          maxFileSize={maxFileSize}
          maxFiles={maxFiles}
          //upload
          uploadOnDrop={uploadOnDrop || undefined}
          url={url}
          fakeUploading={fakeupload}
          config={config ? defaultHeader : undefined}
          uploadingMessage={uploadingMessage}
          disableScroll={disableScroll}
        >
          {files.length>0 && files.map((file) => (
            <FileItem
              {...file}
              key={file.id}
              onDelete={onDeleteVal ? handleDelete : undefined}
              onSee={onSee ? handleSee : undefined}
              localization={localization}
              alwaysActive={alwaysActive || undefined}
              resultOnTooltip={resultOnTooltip || undefined}
              preview={preview ? preview : undefined}
              //onlyImage
              info={info ? info : undefined}
              hd={hd ? hd : undefined}
              elevation={elevation}
              onWatch={handleWatch}
            />
          ))}
        </Dropzone>
        <FullScreenPreview
          imgSource={imageSrc}
          openImage={imageSrc}
          onClose={(e) => handleSee(undefined)}
        />
        <VideoPreview
          videoSrc={videoSrc}
          openVideo={videoSrc}
          onClose={(e) => handleWatch(undefined)}
          controls={controls}
          autoplay={autoplay}
        />
        {/**
         * /////////////////////////////    CONTROLS    ////////////////////////////////////
         */}
        <Grid container style={{ padding: "15px 0" }} spacing={1}>
          <Grid item md={9} xs={12}>
            <h3>{"Dropzone props"}</h3>
            <Paper elevation={3} style={{ padding: "15px" }}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <h4 style={{ margin: "10px 5px 0 0" }}>{"Validation"}</h4>
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Accept"}
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    //label="Outlined"
                    variant="outlined"
                    onChange={handleChangeAccept}
                    value={accept}
                  />
                  <FileSizeSlider onChange={handleChangeMaxFileSize} />
                  <FileLimitSlider onChange={handleChangeMaxFiles} />

                  <h4 style={{ margin: "10px 5px 0 0" }}>Upload process</h4>
                  <FormLabel component="h2" style={{ marginTop: "8px" }}>
                    {"Start upload on drop"}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e, ch) => {
                          setUploadOnDrop(ch);
                        }}
                      />
                    }
                    label="uploadOnDrop"
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Url of server"}
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    label="url"
                    variant="outlined"
                    onChange={handleUrl}
                    value={url}
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Method (POST by default)"}
                  </FormLabel>
                  <Autocomplete
                    //disablePortal
                    autoSelect
                    size="small"
                    //style={{ width: "80%" }}
                    //fullWidth
                    onChange={hadleSelectMethod}
                    id="combo-box-demo"
                    options={[
                      { method: "POST" },
                      { method: "PATCH" },
                      { method: "PUT" },
                    ]}
                    getOptionLabel={(option) => option.method}
                    renderInput={(params) => (
                      <TextField {...params} label="method" />
                    )}
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Aditional configuration (e.g. headers, bearer token)"}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e, ch) => {
                          handleUseConfig(ch);
                        }}
                      />
                    }
                    label="Add config"
                  />
                  {useConfig && (
                    <TextField
                      id="outlined-multiline-flexible"
                      label="config"
                      multiline
                      fullWidth
                      minRows={3}
                      value={config}
                      disabled
                      //onChange={handleConfig}
                    />
                  )}
                  {/*  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                  {"Uploading Message"}
                </FormLabel>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  size="small"
                  label="uploadingMessage"
                  variant="outlined"
                  onChange={handleuploadingMessage}
                  value={uploadingMessage}
                /> */}
                  <h4 style={{ margin: "10px 5px 0 0" }}>
                    Fake upload (simulate upload process on development)
                  </h4>
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {
                      "Enable fake uploading. It needs a fake url string prop to show the 'upload button'"
                    }
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={fakeupload}
                        onChange={(e, ch) => {
                          setFakeUpload(ch);
                        }}
                      />
                    }
                    label="enable fakeUpload"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <h4 style={{ margin: "10px 5px 0 0" }}>{"Language"}</h4>
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Localization"}
                  </FormLabel>
                  <Autocomplete
                    //disablePortal
                    autoSelect
                    size="small"
                    //style={{ width: "80%" }}
                    //fullWidth
                    onChange={hadleSelect}
                    id="combo-box-demo"
                    options={languages}
                    getOptionLabel={(option) => option.idiom}
                    renderInput={(params) => (
                      <TextField {...params} label="Localization" />
                    )}
                  />
                  <h4 style={{ margin: "10px 5px 0 0" }}>
                    {"Behaviour on drop files"}
                  </h4>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ marginTop: "8px" }}>
                      {
                        'Add files or replace the file list ( "add" by default )'
                      }
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="view"
                      name="row-radio-buttons-group"
                      onChange={handleCheckBehaviour}
                      value={behaviour}
                    >
                      <FormControlLabel
                        value="add"
                        control={<Radio />}
                        label="add"
                      />
                      <FormControlLabel
                        value="replace"
                        control={<Radio />}
                        label="replace"
                      />
                      <FormControlLabel
                        value={"unset"}
                        control={<Radio />}
                        label="unset"
                      />
                    </RadioGroup>
                  </FormControl>
                  <h4 style={{ margin: "10px 5px 0 0" }}>
                    {"Display settings"}
                  </h4>
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"Custom Label"}
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    //label="Outlined"
                    variant="outlined"
                    onChange={handleChangeLabel}
                    value={label}
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"minHeight"}
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    //label="Outlined"
                    variant="outlined"
                    onChange={handleMinHeight}
                    value={minHeight}
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {"maxHeight"}
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    size="small"
                    //label="Outlined"
                    variant="outlined"
                    onChange={handleMaxHeight}
                    value={maxHeight}
                  />
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ marginTop: "8px" }}>
                      {"View (FileItems layout)"}
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      onChange={handleCheckView}
                      value={viewValue}
                    >
                      <FormControlLabel
                        disabled={disableScroll}
                        value="list"
                        control={<Radio />}
                        label="list"
                      />
                      <FormControlLabel
                        disabled={disableScroll}
                        value="grid"
                        control={<Radio />}
                        label="grid"
                      />
                      <FormControlLabel
                        disabled={disableScroll}
                        value={"unset"}
                        control={<Radio />}
                        label="unset"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {`Disable scrollbar: ( for optimizing display when using "resultOnTooltip prop on FileItem")`}
                  </FormLabel>
                  <a href="https://codesandbox.io/s/dropzone-ui-fileitem-resultontooltip-h6hu7">
                    <img
                      src="https://img.shields.io/badge/new-feature-green.svg"
                      alt="npm latest package"
                    />
                  </a>

                  <FormControlLabel
                    control={
                      <Switch
                        checked={disableScroll}
                        onChange={(e, ch) => {
                          setDisableScroll(ch);
                        }}
                      />
                    }
                    label={"disableScroll"}
                  />
                  <FormLabel component="legend" style={{ marginTop: "8px" }}>
                    {`Theme color: ( ${useColor ? color : "unset"} )`}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={useColor}
                        onChange={(e, ch) => {
                          setUseColor(ch);
                        }}
                      />
                    }
                    label={useColor ? "disable color" : "enable color"}
                  />
                  {useColor && (
                    <div>
                      <input
                        placeholder="color"
                        onChange={handleChangeColor}
                        type="color"
                      />
                      {color}
                    </div>
                  )}
                  <FormLabel component="h2" style={{ marginTop: "8px" }}>
                    {"Clean not valid files button"}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={onClean}
                        onChange={(e, ch) => {
                          setOnClean(ch);
                        }}
                      />
                    }
                    label="onClean"
                  />
                  <FormLabel component="h2" style={{ marginTop: "8px" }}>
                    {"Enable/disable clickable"}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={clickableDis}
                        onChange={(e, ch) => {
                          setClickableDis(ch);
                        }}
                      />
                    }
                    label="clickable"
                  />
                  <FormLabel component="h2">
                    {"Footer and header (true by def.)"}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e, ch) => {
                          setHeaderDis(ch);
                        }}
                      />
                    }
                    label="disable header"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        onChange={(e, ch) => {
                          setFooterDis(ch);
                        }}
                      />
                    }
                    label="disable footer"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={3} xs={12}>
            <h3>{"FileItem props"}</h3>
            <Paper elevation={3} style={{ padding: "15px" }}>
              <h4 style={{ margin: "10px 5px 0 0" }}>Display</h4>
              <FormLabel component="h2" style={{ marginTop: "8px" }}>
                {"Show info layer"}
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={info}
                    onChange={(e, ch) => {
                      setInfo(ch);
                    }}
                  />
                }
                label="info"
              />
              <FormLabel component="h2" style={{ marginTop: "8px" }}>
                {
                  "Always active (show actions and buttons if true. If false, show only on hover)"
                }
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={alwaysActive}
                    onChange={(e, ch) => {
                      setAlwaysActive(ch);
                    }}
                  />
                }
                label="alwaysActive"
              />
              <FormLabel component="h2" style={{ marginTop: "8px" }}>
                {
                  "Display Result on layer (if true) otherwise, on tooltip on Hover"
                }
              </FormLabel>
              <a href="https://codesandbox.io/s/dropzone-ui-fileitem-resultontooltip-h6hu7">
                <img
                  src="https://img.shields.io/badge/new-feature-green.svg"
                  alt="npm latest package"
                />
              </a>
              <FormControlLabel
                control={
                  <Switch
                    checked={resultOnTooltip}
                    onChange={(e, ch) => {
                      setResultOnTooltip(ch);
                    }}
                  />
                }
                label="resultOnTooltip"
              />
              resultOnTooltip
              <h4 style={{ margin: "10px 5px 0 0" }}>
                {"Preview (inside FileItem)"}
              </h4>
              <FormLabel component="legend" style={{ marginTop: "8px" }}>
                {"Show image preview on FleItem if valid"}
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={preview}
                    onChange={(e, ch) => {
                      setPreview(ch);
                    }}
                  />
                }
                label="preview"
              />
              <h4 style={{ margin: "10px 5px 0 0" }}>Full Screen Preview</h4>
              <FormLabel component="legend" style={{ marginTop: "8px" }}>
                {" Preview button and add handler"}
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={onSee}
                    onChange={(e, ch) => {
                      setOnSee(ch);
                    }}
                  />
                }
                label="onSee"
              />
              <FormLabel component="h2" style={{ marginTop: "8px" }}>
                {"Show preview in HD"}
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={hd}
                    onChange={(e, ch) => {
                      setHd(ch);
                    }}
                  />
                }
                label="hd"
              />
              <h4 style={{ margin: "10px 5px 0 0" }}>Delete File</h4>
              <FormLabel component="legend" style={{ marginTop: "8px" }}>
                {'Show "delete file" button and add handler'}
              </FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={onDeleteVal}
                    onChange={(e, ch) => {
                      setOnDelete(ch);
                    }}
                  />
                }
                label="onDelete"
              />{" "}
              <ElevationSlider onChange={(v) => setElevation(v)} />
            </Paper>
          </Grid>
        </Grid>
        <InteractiveGeneratedCode
          {...{
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
          }}
        />
      </div>
    </Fragment>
  );
};
export default InteractiveCode;

const languages = [
  { idiom: "Español: ES-es", value: "ES-es" },
  { idiom: "English: EN-en", value: "EN-en" },
  { idiom: "French: FR-fr", value: "FR-fr" },
  { idiom: "Portuguese: PT-pt", value: "PT-pt" },
  { idiom: "Russian: RU-ru", value: "RU-ru" },
  { idiom: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { idiom: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
