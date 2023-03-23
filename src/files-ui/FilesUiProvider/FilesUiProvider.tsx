import * as React from "react";
import { FilesUiContext } from "./FilesUiContext";
import { FilesUiConfig } from "./FilesUiContextType";

interface FilesUiProviderProps {
  children: React.ReactNode;
  config?: FilesUiConfig;
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
