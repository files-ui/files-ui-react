import * as React from "react";
import { FilesUIConfig } from "./FilesUIConfig";
import { FilesUiContext } from "./FilesUiContext";

const STYLE_ID = "files-ui-font-style";
const FALLBACK_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

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

  // Inject/update a single <style> element for the custom font-family CSS variable
  React.useEffect(() => {
    const fontFamily = config?.fontFamily;
    let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;

    if (fontFamily) {
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = STYLE_ID;
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = `:root { --files-ui-font-family: "${fontFamily}", ${FALLBACK_STACK}; }`;
    } else if (styleEl) {
      styleEl.remove();
    }

    return () => {
      // Cleanup on unmount
      const el = document.getElementById(STYLE_ID);
      if (el) el.remove();
    };
  }, [config?.fontFamily]);

  return (
    <FilesUiContext.Provider value={contextValue}>
      {children}
    </FilesUiContext.Provider>
  );
};
export default FilesUiProvider;
