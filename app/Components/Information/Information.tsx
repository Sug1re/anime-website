"use client";

import React from "react";
import { motion } from "framer-motion";

const Information = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className=" w-screen flex flex-col items-center justify-center px-36 md:px-0 "
    >
      <h3>概要</h3>
      <p>アニメの基本情報を記載</p>
    </motion.section>
  );
};

export default Information;
