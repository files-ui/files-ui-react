import * as React from "react";
import { FileMosaic, FileInputButton } from "../../../files-ui";
import { ExtFile } from "../../../files-ui/core";
interface DemoFileMosaicImgPreviewProps{

}
const sampleFileProps:ExtFile = {
    id: ":0:",
    size: 28 * 1024 * 1024,
    type: "image/png",
    name: "Thor arrives Wakanda.png",
    imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneylatino.com%2Fnovedades%2Favengers-la-escena-postcredito-de-thor-que-fue-clave-en-infinity-war&psig=AOvVaw2wijpnp7AqNfVNPszdMkOw&ust=1677372146505000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj_pqy4r_0CFQAAAAAdAAAAABAQ"
  };
const DemoFileMosaicImgPreview:React.FC<DemoFileMosaicImgPreviewProps> = (props:DemoFileMosaicImgPreviewProps) =>{
    
    const [value, setValue] = React.useState<ExtFile | undefined>(undefined);

    const updateFiles = (incommingFiles:ExtFile[]) => {
      console.log("incomming extFiles", incommingFiles);
  
      setValue(incommingFiles[0]);
    };
    const removeFile = () => {
      setValue(undefined);
    };
    
    return(
        <>
        {value ? (
          <FileMosaic {...value} onDelete={removeFile} alwaysActive info />
        ) : (
          <FileInputButton
            label="Browse File..."
            onChange={updateFiles}
            textDecoration="uppercase"
            accept="image/*"
          />
        )}
        <FileMosaic {...sampleFileProps} onDelete={() => {}} alwaysActive info />
      </>
    )
}
export default DemoFileMosaicImgPreview;