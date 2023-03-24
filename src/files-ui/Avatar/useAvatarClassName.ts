

/* export const useAvatarClassName = (variant?: "square" | "circle"): [string, string] => {

    const [avatarClassNameContainer, setAvatarClassNameContainer] = React.useState<string>("");
    const [avatarClassNameLayerInfo, setAvatarClassNameLayerInfo] = React.useState<string>("");

    React.useEffect(() => {
        if (variant === "square") {
            setAvatarClassNameContainer("fui-avatar-main-container-image");
            setAvatarClassNameLayerInfo("fui-avatar-layer-info");
        } else {
            setAvatarClassNameContainer("fui-avatar-main-container-image square");
            setAvatarClassNameLayerInfo("fui-avatar-layer-info square");
        }

    }, [variant]);


    return [avatarClassNameContainer, avatarClassNameLayerInfo];
} */
export const setAvatarClassNameContainer = (variant?: "square" | "circle"): string => {
    if (variant === "square") {
        return "fui-avatar-main-container-image square fui-avatar-border";
    } else {
        return "fui-avatar-main-container-image fui-avatar-border";
    }
}
export const setAvatarClassNameLayerInfo = (variant?: "square" | "circle"): string => {
    if (variant === "square") {
        return "fui-avatar-layer-info square fui-avatar-border";
    } else {
        return "fui-avatar-layer-info fui-avatar-border";
    }
}