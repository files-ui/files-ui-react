/**
 * Resize an image resolution given maxWidth and maxHeight
 * 
 * Should be called with await
 * @param base64Str a string representation of an imae file
 * @param maxWidth the max width of he image
 * @param maxHeight the max height of he image
 * @returns the resized image
 */
export function resizeImage(
    base64Str: string,
    maxWidth = 135,
    maxHeight = 120
): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        try {
            let img: HTMLImageElement = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas: HTMLCanvasElement = document.createElement('canvas');
                const MAX_WIDTH: number = maxWidth;
                const MAX_HEIGHT: number = maxHeight;
                let width: number = img.width;
                let height: number = img.height;

                if (maxWidth > width && maxHeight > height) {
                    resolve(base64Str);
                } else
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                canvas.width = width
                canvas.height = height
                let ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
                if (ctx) {
                    ctx.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL());

                } else {
                    if (process.env.NODE_ENV === "development") {
                        console.error("An error ocurred when trying to make a thumnail");
                    }
                    reject(undefined);
                }
            }
        } catch (error) {
            if (process.env.NODE_ENV === "development") {
                console.error("An error ocurred when trying to make a thumnail");
            }
            reject(undefined);
        }
    });
}

