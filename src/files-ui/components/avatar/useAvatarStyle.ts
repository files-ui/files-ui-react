import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";

export const useAvatarStyle = (borderRadius: string | undefined): boolean => {
    const [idAvatarStyles, setIdAvatarStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);

    /**
     * creates a dynamic css sheet for avatar
     * @param borderRadius the border radius
     * @returns a dynamic css sheet
     */
    const makeDynamicAvatarCSSRules = (borderRadius: string | undefined): DynamicSheet => {
        const styleSheet: DynamicSheet = DynamiCSS.makeStyleSheet({
            id: "avatar-styles",
            sheetRules: [
                {
                    className: "fui-avatar-border",
                    rules: {
                        borderRadius: `${borderRadius || "6px"} !important`,
                    }
                },
            ]
        });
        return styleSheet;
    }

    React.useEffect(() => {
        return () => {
            console.log("avatar, deleting init", styleInjected, idAvatarStyles);
            if (styleInjected) {
                console.log("avatar, catch css delete");

                DynamiCSS.removeStyleSheet(idAvatarStyles);
            }
            setIdAvatarStyles("");
            setStyleInjected(false);
        }
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        /*      if (!borderRadius) {
                 DynamiCSS.removeStyleSheet(idAvatarStyles);
                 return;
             } */
        let idStyle: string = "avatar-styles";
        const styleSheet: DynamicSheet = makeDynamicAvatarCSSRules(borderRadius);
        // check if classname was added
        // if yes, edit css
        // if not insert css
        if (!styleInjected) {
            console.log("avatar, no css, inserting");
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            console.log("avatar, no css, inserted OK", idStyle);

            setIdAvatarStyles(idStyle);

            if (idStyle !== "") {
                setStyleInjected(true);
            }
        } else {
            console.log("avatar, catch css, modifiying", idAvatarStyles);
            DynamiCSS.editStyleSheet(idAvatarStyles, styleSheet.sheetRules || []);
        }
        // eslint-disable-next-line
    }, [borderRadius]);


    /*  React.useEffect(() => {
 
         return () => {
             console.log("avatar, deleting init", styleInjected, idAvatarStyles);
             if (styleInjected) {
                 console.log("avatar, catch css delete");
 
                 DynamiCSS.removeStyleSheet(idAvatarStyles);
             }
             setIdAvatarStyles("");
             setStyleInjected(false);
         }
     }, [idAvatarStyles, styleInjected]); */

    return styleInjected;
}


