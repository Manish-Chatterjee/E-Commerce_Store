import { useState, useEffect } from 'react';

function WindowSize({ onCallback}) {
  const size = useWindowSize();
  onCallback(size);
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
     
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

export default WindowSize
