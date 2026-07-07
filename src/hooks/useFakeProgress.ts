import * as React from "react";
import { getRandomInt } from "@files-ui/core";

export const useFakeProgress = (time = 1500) => {
  const [progress, setProgress] = React.useState(28);

  React.useEffect(() => {
    const updateProgress = (currProgress: number): number => {
      if (currProgress === 100) {
        return 0;
      }
      const offset = getRandomInt(5, 24);
      const newProgress = currProgress + offset;
      
      return newProgress > 100 ? 100 : newProgress;
    };

    // Correctly infer the platform-agnostic return type of setInterval
    const _myInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setProgress((_progress) => updateProgress(_progress));
    }, time);

    return () => {
      clearInterval(_myInterval);
    };
  }, [time]);

  return progress;
};