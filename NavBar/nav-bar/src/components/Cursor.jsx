import React from "react";
import { motion } from "motion/react";

function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
}

export default Cursor;
