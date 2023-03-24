import * as React from "react";
import { FilesUIConfig } from "./FilesUIConfig";
import { FilesUiContext } from "./FilesUiContext";

interface FilesUiProviderProps {
  children: React.ReactNode;
  config?: FilesUIConfig;
}
const FilesUiProvider: React.FC<FilesUiProviderProps> = (
  props: FilesUiProviderProps
) => {
  const { children, config } = props;
  return (
    <FilesUiContext.Provider value={config || {}}>
      {children}
    </FilesUiContext.Provider>
  );
};
export default FilesUiProvider;
