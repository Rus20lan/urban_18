import { useState, useEffect } from 'react';

const SCREEN_MD = 768;
const SCREEN_LG = 1024;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const win = event.target as Window;
      setWidth(win.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {
    width,
    isScreenMd: width <= SCREEN_MD,
    isScreenLG: width <= SCREEN_LG,
  };
};
