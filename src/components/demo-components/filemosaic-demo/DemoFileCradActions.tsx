import * as React from "react";
import {
  ExtFile,
  FileCard,
  FileCardProps,
  FileMosaic,
} from "../../../files-ui";

const sampleFileProps = {
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "sampleFile" + ".jsx",
  valid: true,
};

const DemoFileCardActions = (props: { card?: boolean }) => {
  const handleDelete = (id: string | number | undefined) => {
    console.log("delete button clicked on file: " + id);
  };
  const handleSee = (imageSource: string | undefined) => {
    console.log("watch image:", imageSource);
  };
  const handleWatch = (videoSource: File | string | undefined) => {
    console.log("watch video:", videoSource);
  };
  const handleDownload = (
    fileId: string | number | undefined,
    downloadUrl?: string | undefined
  ) => {
    console.log("download file id", fileId);
    console.log("download url", downloadUrl);
  };
  if (props.card)
    return (
      <>
        <FileCard id={0} {...sampleFileProps} onDelete={handleDelete} />
        <FileCard id={1} {...sampleFileProps} info />
        <FileCard id={2} {...sampleFileProps} onSee={handleSee} imageUrl="https://w0.peakpx.com/wallpaper/635/84/HD-wallpaper-thanos-and-iron-man-avengers-clouds-cloudy-face-to-face-her-iron-man-marvel-thanos-war.jpg" />
        <FileCard
          id={3}
          {...sampleFileProps}
          onWatch={handleWatch}
          videoUrl="https://media.istockphoto.com/id/1198092809/es/v%C3%ADdeo/grupo-de-mujeres-sonriendo-despu%C3%A9s-de-la-sesi%C3%B3n-de-entrenamiento-en-la-ciudad.mp4?s=mp4-640x640-is&k=20&c=K65BpQSq2ez-nqdNI-zeXLzxuLnsev5_bRm5AGdlHHc="
        />
        <FileCard id={4} {...sampleFileProps} downloadUrl="https://media.istockphoto.com/id/1198092809/es/v%C3%ADdeo/grupo-de-mujeres-sonriendo-despu%C3%A9s-de-la-sesi%C3%B3n-de-entrenamiento-en-la-ciudad.mp4?s=mp4-640x640-is&k=20&c=K65BpQSq2ez-nqdNI-zeXLzxuLnsev5_bRm5AGdlHHc=" />
        <FileCard
          id={5}
          {...sampleFileProps}
          onDownload={handleDownload}
          downloadUrl="https://media.istockphoto.com/id/1198092809/es/v%C3%ADdeo/grupo-de-mujeres-sonriendo-despu%C3%A9s-de-la-sesi%C3%B3n-de-entrenamiento-en-la-ciudad.mp4?s=mp4-640x640-is&k=20&c=K65BpQSq2ez-nqdNI-zeXLzxuLnsev5_bRm5AGdlHHc="
        />
      </>
    );
  return (
    <>
      <FileMosaic id={0} {...sampleFileProps} onDelete={handleDelete} />
      <FileMosaic id={1} {...sampleFileProps} info />
      <FileMosaic id={2} {...sampleFileProps} onSee={handleSee} imageUrl="" />
      <FileMosaic
        id={3}
        {...sampleFileProps}
        onWatch={handleWatch}
        videoUrl=""
      />
      <FileMosaic id={4} {...sampleFileProps} downloadUrl="" />
      <FileMosaic
        id={5}
        {...sampleFileProps}
        onDownload={handleDownload}
        downloadUrl=""
      />
    </>
  );
};
export default DemoFileCardActions;
