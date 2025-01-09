"use client";

import React from "react";
import { motion } from "framer-motion";

const Character = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
    >
      <div className=" h-screen w-screen flex flex-col justify-center items-center">
        <h6>キャラクター紹介</h6>
        <p>キャラクターの詳細情報を記載</p>
      </div>
    </motion.section>
  );
};

export default Character;
