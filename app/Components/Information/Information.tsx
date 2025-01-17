"use client";

import React from "react";
import { motion } from "framer-motion";

const Information = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
    >
      <div className=" h-screen w-screen flex flex-col justify-center items-center">
        <h3>概要</h3>
        <p>アニメの基本情報を記載</p>
      </div>
    </motion.section>
  );
};

export default Information;
