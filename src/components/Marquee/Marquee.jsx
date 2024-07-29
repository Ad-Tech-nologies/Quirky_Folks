import React from "react";
import "./Marquee.css";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="marquee-main">
      <div className="marquee-sub">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
        >
          LET QUIRKY HANDLE IT
          <div className="circle"></div>
        </motion.h1>



        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
        >
          LET QUIRKY HANDLE IT
          <div className="circle"></div>

        </motion.h1>
{/* 
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
        >
          LET QUIRKY HANDLE
          <div className="circle"></div>

        </motion.h1> */}
      </div>
    </div>
  );
}

export default Marquee;
