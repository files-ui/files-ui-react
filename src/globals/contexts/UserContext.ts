import * as React from "react";
import { FuiAction } from "../types/FuiAction";
import { UserFilesUi } from "../types/UserFilesUi";

export const UserContext: React.Context<[UserFilesUi, React.Dispatch<FuiAction> | undefined]> =
    React.createContext([{} as UserFilesUi, undefined as React.Dispatch<FuiAction> | undefined]);

