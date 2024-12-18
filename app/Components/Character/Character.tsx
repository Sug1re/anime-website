"use client";

import React from "react";
import { motion } from "framer-motion";

const Character = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className=" w-screen"
    >
      <h4>キャラクター紹介</h4>
      <p>キャラクターの詳細情報を記載</p>
    </motion.section>
  );
};

export default Character;
