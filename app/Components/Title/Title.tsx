"use client";

import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    // initial 初期状態,
    // whileInView ビューポート内に変化,
    // transition アニメーションの時間と遅延,
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
