import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import * as React from "react";

export const useAvatarStyle = (avatarId: string, borderRadius: string | undefined): string | undefined => {
    const [idAvatarStyles, setIdAvatarStyles] = React.useState<string>("");
    const [styleInjected, setStyleInjected] = React.useState<boolean>(false);
    const [classNameBorder, setClassNameBorder] = React.useState<string | undefined>(undefined);
    //console.log("borderRadius",borderRadius);
    /**
     * creates a dynamic css sheet for avatar
     * @param borderRadius the border radius
     * @returns a dynamic css sheet
     */
    const makeDynamicAvatarCSSRules = (avatarId: string, borderRadius: string | undefined): DynamicSheet => {
        const finalIdStyle: string = !borderRadius ? "-default" : `-${avatarId}`;
        const styleSheet: DynamicSheet = DynamiCSS.makeStyleSheet({
            id: "fui-avatar-styles" + finalIdStyle,
            sheetRules: [
                {
                    className: "fui-avatar-border" + finalIdStyle,
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
            //console.log("avatar, deleting init", styleInjected, idAvatarStyles);
            if (styleInjected) {
                //console.log("avatar, catch css delete");

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
        let idStyle: string = "";
        const styleSheet: DynamicSheet = makeDynamicAvatarCSSRules(avatarId, borderRadius);
        //check if default is in DOM
        if (!borderRadius && !styleInjected) {
            if (DynamiCSS.existStyleSheet("fui-avatar-styles-default")) {
                setStyleInjected(true);
                setIdAvatarStyles("fui-avatar-styles-default");
            } else {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                setIdAvatarStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            }
        } else if (!styleInjected) {
            // check if classname was added
            // if yes, edit css
            // if not insert css
            //console.log("avatar, no css, inserting");
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            //console.log("avatar, no css, inserted OK", idStyle);

            setIdAvatarStyles(idStyle);

            if (idStyle !== "") {
                setStyleInjected(true);
            }
        } else {
            //console.log("avatar, catch css, modifiying", idAvatarStyles);
            DynamiCSS.editStyleSheet(idAvatarStyles, styleSheet.sheetRules || []);
        }
        setClassNameBorder("fui-avatar-border-" + avatarId);
        // eslint-disable-next-line
    }, [borderRadius]);




    return classNameBorder;
}


