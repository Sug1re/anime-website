"use client";

import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    // initial 初期状態,
    // animate 変化,
    // exit 最終状態,
    // transition initialとanimateの間
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      id="title"
    >
      {/* タイトルテキスト */}
      <h1 className=" h-screen w-screen flex justify-center items-center text-blue-500 font-extrabold text-5xl">
        描く光、描く影
      </h1>
    </motion.section>
  );
};

export default Title;
