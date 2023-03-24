import * as React from "react";
import { getRandomInt } from "../core";

export const useFakeProgress = (time = 1500) => {
    const [progress, setProgress] = React.useState(28);

    React.useEffect(() => {

        const updateProgress = (currProgress: number): number => {
            if (currProgress === 100) {
                return 0;
            }
            const offset = getRandomInt(5, 24);

            const newProgress = currProgress + offset;
            if (newProgress > 100) {
                return 100;
            } else {
                return newProgress;
            }
        };

        const _myInterval = setInterval(() => {
            setProgress((_progress) => updateProgress(_progress));
        }, time);
        console.log("useFakeProgress SET interval", _myInterval);

        return () => {
            console.log("useFakeProgress CLEAR interval", _myInterval);
            clearInterval(_myInterval as NodeJS.Timer);
        };
        // eslint-disable-next-line
    }, []);

    return progress;
}


