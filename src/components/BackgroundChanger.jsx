// import "./styles.css";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundChanger({children}) {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    if (ref.current) {
      const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current;
        // calculate x and y coordinates
        const x = clientX - element.offsetLeft - element.offsetWidth;
        const y = clientY - element.offsetTop - element.offsetHeight;
        // update state
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#ff6d1f",
        zIndex: "30",
        position: "absolute",
      }}
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "spring",
      }}
    >{children}</motion.div>
  );
}
