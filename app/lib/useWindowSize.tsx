"use client"
import { useEffect, useState } from "react";

export default function useWindowSize() {
    const size:{width: number ,height: number} = {
        width: 0,
        height: 0,
    }

    const [windowSize, setWindowSize] = useState(size);
  
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