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
  const contextValue = React.useMemo<FilesUIConfig>(
    () => config || {},
    [config]
  );
  return (
    <FilesUiContext.Provider value={contextValue}>
      {children}
    </FilesUiContext.Provider>
  );
};
export default FilesUiProvider;
