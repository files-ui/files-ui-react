import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";

const AdvancedDropzoneCodeJS = (props) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default AdvancedDropzoneCodeJS;

const splittedCodeJS = `<Dropzone
  onChange={updateFiles}
  minHeight="195px"
  value={extFiles}
  maxFiles={3}
  // FmaxFileSize={2998000 * 20}
  label="Drag'n drop files here or click to browse"
  // accept=".png,image/*, video/*"
  uploadConfig={{
    // autoUpload: true
    url: BASE_URL + "/file/28048465460",
    cleanOnUpload: true,
  }}
  onUploadStart={handleStart}
  onUploadFinish={handleFinish}
  //fakeUpload
  actionButtons={{
    position: "after",
    abortButton: {},
    deleteButton: {},
    uploadButton: {},
  }}
  >
    {extFiles.map((file) => (
      <FileMosaic
        {...file}
        key={file.id}
        onDelete={onDelete}
        onSee={handleSee}
        onWatch={handleWatch}
        onAbort={handleAbort}
        onCancel={handleCancel}
        resultOnTooltip
        preview
        info
      />
    ))}
</Dropzone>
<FullScreen
  open={imageSrc !== undefined}
  onClose={() => setImageSrc(undefined)}
>
  <ImagePreview src={imageSrc} />
</FullScreen>
<FullScreen
  open={videoSrc !== undefined}
  onClose={() => setVideoSrc(undefined)}
>
  <VideoPreview src={videoSrc} autoPlay controls />
</FullScreen>`;
const completeCodeJS = `import {
  Dropzone,
  FileMosaic,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "@files-ui/react";

const BASE_URL =
 "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";

export default function AdvancedDropzoneDemo() {
 const [extFiles, setExtFiles] = React.useState([]);
 const [imageSrc, setImageSrc] = React.useState(undefined);
 const [videoSrc, setVideoSrc] = React.useState(undefined);
 
 const updateFiles = (incommingFiles) => {
   console.log("incomming files", incommingFiles);
   setExtFiles(incommingFiles);
 };
 const onDelete = (id) => {
   setExtFiles(extFiles.filter((x) => x.id !== id));
 };
 const handleSee = (imageSource) => {
   setImageSrc(imageSource);
 };
 const handleWatch = (videoSource) => {
   setVideoSrc(videoSource);
 };
 const handleStart = (filesToUpload) => {
   console.log("advanced demo start upload", filesToUpload);
 };
 const handleFinish = (uploadedFiles) => {
   console.log("advanced demo finish upload", uploadedFiles);
 };
 const handleAbort = (id) => {
   setExtFiles(
     extFiles.map((ef) => {
       if (ef.id === id) {
         return { ...ef, uploadStatus: "aborted" };
       } else return { ...ef };
     })
   );
 };
 const handleCancel = (id) => {
   setExtFiles(
     extFiles.map((ef) => {
       if (ef.id === id) {
         return { ...ef, uploadStatus: undefined };
       } else return { ...ef };
     })
   );
 };
 return (
   <>
     <Dropzone
      onChange={updateFiles}
      minHeight="195px"
      value={extFiles}
      maxFiles={3}
      // FmaxFileSize={2998000 * 20}
      label="Drag'n drop files here or click to browse"
      // accept=".png,image/*, video/*"
      uploadConfig={{
        // autoUpload: true
        url: BASE_URL + "/file/28048465460",
        cleanOnUpload: true,
      }}
      onUploadStart={handleStart}
      onUploadFinish={handleFinish}
      //fakeUpload
      actionButtons={{
        position: "after",
        abortButton: {},
        deleteButton: {},
        uploadButton: {},
      }}
     >
       {extFiles.map((file) => (
         <FileMosaic
           {...file}
           key={file.id}
           onDelete={onDelete}
           onSee={handleSee}
           onWatch={handleWatch}
           onAbort={handleAbort}
           onCancel={handleCancel}
           resultOnTooltip
           alwaysActive
           preview
           info
         />
       ))}
     </Dropzone>
     <FullScreen
       open={imageSrc !== undefined}
       onClose={() => setImageSrc(undefined)}
     >
       <ImagePreview src={imageSrc} />
     </FullScreen>
     <FullScreen
       open={videoSrc !== undefined}
       onClose={() => setVideoSrc(undefined)}
     >
       <VideoPreview src={videoSrc} autoPlay controls />
     </FullScreen>
   </>
 );
}`;

const completeCodeTS = `import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
  FullScreen,
  ImagePreview,
  VideoPreview,
 } from "@files-ui/react";

 const BASE_URL =
 "https://files-ui-express-static-file-storage.vercel.app/39d33dff2d41b522c1ea276c4b82507f96b9699493d2e7b3f5c864ba743d9503";

export default function AdvancedDropzoneDemo() {
 const [extFiles, setExtFiles] = React.useState<ExtFile[]>([]);
 const [imageSrc, setImageSrc] = React.useState<File | string | undefined>(
   undefined
 );
 const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
   undefined
 );
 const updateFiles = (incommingFiles: ExtFile[]) => {
   console.log("incomming files", incommingFiles);
   setExtFiles(incommingFiles);
 };
 const onDelete = (id: FileMosaicProps["id"]) => {
   setExtFiles(extFiles.filter((x) => x.id !== id));
 };
 const handleSee = (imageSource: File | string | undefined) => {
   setImageSrc(imageSource);
 };
 const handleWatch = (videoSource: File | string | undefined) => {
   setVideoSrc(videoSource);
 };
 const handleStart = (filesToUpload: ExtFile[]) => {
   console.log("advanced demo start upload", filesToUpload);
 };
 const handleFinish = (uploadedFiles: ExtFile[]) => {
   console.log("advanced demo finish upload", uploadedFiles);
 };
 const handleAbort = (id: FileMosaicProps["id"]) => {
   setExtFiles(
     extFiles.map((ef) => {
       if (ef.id === id) {
         return { ...ef, uploadStatus: "aborted" };
       } else return { ...ef };
     })
   );
 };
 const handleCancel = (id: FileMosaicProps["id"]) => {
   setExtFiles(
     extFiles.map((ef) => {
       if (ef.id === id) {
         return { ...ef, uploadStatus: undefined };
       } else return { ...ef };
     })
   );
 };
 return (
   <>
     <Dropzone
       onChange={updateFiles}
       minHeight="195px"
       value={extFiles}
       maxFiles={3}
       // FmaxFileSize={2998000 * 20}
       label="Drag'n drop files here or click to browse"
       // accept=".png,image/*, video/*"
       uploadConfig={{
         // autoUpload: true
         url: BASE_URL + "/file/28048465460",
         cleanOnUpload: true,
      }}
       onUploadStart={handleStart}
       onUploadFinish={handleFinish}
       //fakeUpload
       actionButtons={{
         position: "after",
         abortButton: {},
         deleteButton: {},
         uploadButton: {},
      }}
     >
       {extFiles.map((file) => (
         <FileMosaic
           {...file}
           key={file.id}
           onDelete={onDelete}
           onSee={handleSee}
           onWatch={handleWatch}
           onAbort={handleAbort}
           onCancel={handleCancel}
           resultOnTooltip
           alwaysActive
           preview
           info
         />
       ))}
     </Dropzone>
     <FullScreen
       open={imageSrc !== undefined}
       onClose={() => setImageSrc(undefined)}
     >
       <ImagePreview src={imageSrc} />
     </FullScreen>
     <FullScreen
       open={videoSrc !== undefined}
       onClose={() => setVideoSrc(undefined)}
     >
       <VideoPreview src={videoSrc} autoPlay controls />
     </FullScreen>
   </>
 );
}`;
const splittedCodeTS = splittedCodeJS;
