import { useState, useEffect } from 'react';

const initDimensions = {
  height: 0,
  width: 0,
};

export default function useWindowDimensions() {
  function getWindowDimensions(hasWindow) {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(initDimensions);

  useEffect(() => {
    const hasWindow = typeof window !== 'undefined';
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions(hasWindow));
      }

      // Gets window size for the first time
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}
