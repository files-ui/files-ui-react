import * as React from "react";
import { Dropzone, ExtFile, FileMosaic, Localization } from "../../../files-ui";
import { Autocomplete, TextField } from "@mui/material";

const DemoFileMosaicLocalization = (props: { card: boolean }) => {
  const [localization, setLocalization] = React.useState<
    Localization | undefined
  >(undefined);

  const hadleSelect = (value: LanguageItem | null) => {
    console.log(value);
    setLocalization(value?.value);
  };
  if (props.card) return <></>;
  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        size="small"
        onChange={(e, value) => hadleSelect(value as LanguageItem)}
        id="combo-box-demo"
        options={languages}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.language}
        renderInput={(params) => <TextField {...params} label="Localization" />}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            flexWrap:"wrap"
          }}
        >
           <Dropzone
          /* style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }} */
          localization={localization}
        ></Dropzone>
        </div>
       
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            flexWrap:"wrap"
          }}
        >
          {extFiles.map((extFile, index) => (
            <FileMosaic
              key={index}
              {...extFile}
              localization={localization}
              onDelete={() => {}}
              info
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default DemoFileMosaicLocalization;

interface LanguageItem {
  language: string;
  value: Localization;
}

const languages = [
  { language: "Español: ES-es", value: "ES-es" },
  { language: "English: EN-en", value: "EN-en" },
  { language: "French: FR-fr", value: "FR-fr" },
  { language: "Italian: IT-it", value: "IT-it" },
  { language: "Portuguese: PT-pt", value: "PT-pt" },
  { language: "Russian: RU-ru", value: "RU-ru" },
  { language: "Chinese(simplified): ZH-cn", value: "ZH-cn" },
  { language: "Chinese(traditional): ZH-hk", value: "ZH-hk" },
];
const extFiles: ExtFile[] = [
  {
    id: 0,
    name: "file_localization.docx",
    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 1,
    valid: false,
    name: "file_localization.docx",

    size: 28 * 1024,
    errors: ["pdf not allowed", "file is too big"],
  },
  {
    id: 2,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
  },
  {
    id: 3,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "preparing",
  },
  {
    id: 4,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "uploading",
    progress: 28,
  },
  {
    id: 5,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "aborted",
    uploadMessage: "Upload was aborted",
  },
  {
    id: 6,
    valid: false,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "error",
    uploadMessage: "there was an error on the server",
  },
  {
    id: 7,
    valid: true,
    name: "file_localization.docx",
    size: 28 * 1024,
    uploadStatus: "success",
    uploadMessage: "files-ui <3",
  },
];
