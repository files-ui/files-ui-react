import * as React from "react";

export declare type InputHiddenProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    accept: string;
    inputRef: React.RefObject<HTMLInputElement>;
    multiple: boolean;
}