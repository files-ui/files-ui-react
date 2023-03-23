
import { FuiAction } from "../types/FuiAction";
import { UserFilesUi } from "../types/UserFilesUi";


export const userReducer = (state: UserFilesUi, action: FuiAction): UserFilesUi => {
  const { type = "", payload = {} } = action;
  console.log("userReducer", state, action);
  switch (type) {
    case "INICIARSESION":
      return { ...state, ...payload };
    case "TURNONLIGHT":
      return { ...state, darkMode: false };
    case "TURNOFFLIGHT":
      return { ...state, darkMode: true };
    default:
      return state;
  }
};

export const userInitializer = () => {
  const usuarioEncontrado = localStorage.getItem("filesuiuser");

  if (usuarioEncontrado !== "udefined" && usuarioEncontrado !== null) {
    return JSON.parse(usuarioEncontrado);
  } else {
    return {};
  }
};
