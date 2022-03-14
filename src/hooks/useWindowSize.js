import React, { useEffect, useState } from "react";
import ExecutionEnviornment from "@docusaurus/ExecutionEnvironment";

export default function useWindowSize() {
  
  const [size, setSize] = useState(ExecutionEnviornment.canUseDOM ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {
    width: 1024,
    height: 768
  });

  if (ExecutionEnviornment.canUseDOM) {
    const onWindowSizeChange = () => {
      console.log(window);
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };

    useEffect(() => {
      window.addEventListener("resize", onWindowSizeChange);
      return () => window.removeEventListener("resize", onWindowSizeChange);
    }, []);
  }
  return size;
}