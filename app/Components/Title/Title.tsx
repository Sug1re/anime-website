"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Title = () => {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    // 3秒後にフェードアウトを開始
    const timer = setTimeout(() => {
      setIsFaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="title"
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* タイトルテキスト */}
      <div className="flex justify-center items-center h-screen w-screen z-10">
        <Image
          src="/タイトルロゴ.png"
          alt="タイトルロゴ"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* キービジュアルのフェードアウト */}
      <motion.div
        className="absolute inset-0 z-0 flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFaded ? 0 : 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/backGroundSky.jpg"
          alt="キービジュアルの余白部分"
          // width={700}
          // height={700}
          layout="fill"
          priority
          className="bg-center bg-cover"
        />
        <motion.div
          className="absolute inset-0 w-full h-full z-0 flex justify-center items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFaded ? 0 : 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/keyVisual.png"
            alt="キービジュアル"
            width={700}
            height={700}
            // layout="fill"
            priority
            className="bg-center bg-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Title;
