/**
 * Resize an image resolution given maxWidth and maxHeight
 * 
 * Should be called with await
 * @param base64Str a string representation of an imae file
 * @param maxWidth the max width of he image
 * @param maxHeight the max height of he image
 * @returns the resized image
 */
export function getImageOrientation(
    imageSource: string | undefined,
): Promise<"landscape" | "portrait" > {
    return new Promise((resolve, reject) => {
        if (!imageSource || imageSource.length === 0) {
            reject("landscape");
            return;
        }
        try {
            let img: HTMLImageElement = new Image();
            img.src = imageSource;
            img.onload = () => {
                let width: number = img.width;
                let height: number = img.height;
                if (width > height) {
                    resolve("landscape");
                } else {
                    resolve("portrait");
                }
            }
        } catch (error) {
            if (process.env.NODE_ENV === "development") {
                console.error("An error ocurred when trying to get the image orientation");
            }
            reject("landscape");
        }
    });
}

