"use client";

import React from "react";
import Image from "next/image"; // ← これを追加
import { motion } from "framer-motion";

const Title = () => {
  return (
    // initial 初期状態,
    // animate 変化,
    // exit 最終状態,
    // transition initialとanimateの間
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      id="title"
      className="relative h-screen w-screen text-blue-400 "
    >
      {/* 背景の半透明オーバーレイ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2.5 }}
        className="absolute inset-0 bg-school1 bg-cover bg-center before:absolute before:inset-0 before:bg-white/80"
      ></motion.div>

      {/* タイトルテキスト */}
      <h1 className="relative z-50 h-screen w-screen flex justify-center items-center font-extrabold text-5xl">
        描く光、描く影
      </h1>
    </motion.section>
  );
};

export default Title;
