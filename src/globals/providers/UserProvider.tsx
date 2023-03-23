import { UserContext } from "../contexts/UserContext";
import * as React from "react";
import { UserFilesUi } from "../types/UserFilesUi";
import { userInitializer, userReducer } from "../reducers/userReducer";
import { ThemeProvider } from "@emotion/react";
import { MUItheme } from "../../theme/mainTheme";
import { FuiAction } from "../types/FuiAction";
import { FilesUiProvider } from "../../files-ui";

export const UserProvider = (props: {
  children: React.ReactNode;
  valorInicial: UserFilesUi;
}) => {
  const { children, valorInicial } = props;

  const [usuario, dispatch]: [UserFilesUi, React.Dispatch<FuiAction>] =
    React.useReducer(userReducer, valorInicial, userInitializer);

  React.useEffect(() => {
    localStorage.setItem("filesuiuser", JSON.stringify(usuario));
    console.log("filesuiuser", usuario);
  }, [usuario]);

  return (
    <UserContext.Provider value={[usuario, dispatch]}>
      <ThemeProvider theme={MUItheme(usuario.darkMode ? "dark" : "light")}>
        <FilesUiProvider config={{ darkMode: usuario.darkMode }}>
          {children}
        </FilesUiProvider>
      </ThemeProvider>
    </UserContext.Provider>
  );
};
