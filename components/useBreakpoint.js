import { useState, useEffect } from "react";

export function useTailwindBreakpoints() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSmUp: windowWidth >= 640,
    isMdUp: windowWidth >= 768,
    isLgUp: windowWidth >= 1024,
    isXlUp: windowWidth >= 1280,
    is2xlUp: windowWidth >= 1536,
  };
}
