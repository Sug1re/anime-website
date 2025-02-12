"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Title = () => {
  return (
    // initial 初期状態,
    // whileInView ビューポート内に変化,
    // transition アニメーションの時間と遅延,
    <motion.section
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 3.5, delay: 0.5 }}
      id="title"
    >
      {/* タイトルテキスト */}
      <div className="flex justify-center items-center h-screen w-screen">
        <Image
          src="/タイトルロゴ.png"
          alt="タイトルロゴ"
          width={500}
          height={500}
        />
      </div>
    </motion.section>
  );
};

export default Title;
