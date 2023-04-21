import { useState, useEffect } from 'react';

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, ...arguments);
    }, ms);
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(
      function handleResize() {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      },
      0
    );

    window.addEventListener(
      'resize',
      debouncedHandleResize,
      {
        passive: true,
      }
    );
    return () =>
      window.removeEventListener(
        'resize',
        debouncedHandleResize
      );
  }, []);

  return windowDimensions;
}
