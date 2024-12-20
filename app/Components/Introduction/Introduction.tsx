"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 3.5, delay: 0.5 }}
      className=" w-screen flex flex-col items-center justify-center pr-40 "
    >
      <h2>INTRODUCTION</h2>
      <p>INTRODUCTIONの概要を記載</p>
    </motion.section>
  );
};

export default Introduction;
