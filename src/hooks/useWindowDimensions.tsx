import { useState, useEffect } from "react";
import { ScreenType } from "../constants";

interface UseWindowDimensionsProps {
  screenType: ScreenType | undefined;
  windowWidth: number;
}

const useWindowDimensions = (): UseWindowDimensionsProps => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.INITIAL);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 1300) {
      setScreenType(ScreenType.DESKTOP);
    } else if (windowWidth <= 1300 && windowWidth > 800) {
      setScreenType(ScreenType.TABLET);
    } else {
      setScreenType(ScreenType.MOBILE);
    }
  }, [windowWidth]);

  return { screenType, windowWidth };
};

export default useWindowDimensions;
