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

  // フェードアウトしている間スクロールを無効化
  useEffect(() => {
    if (!isFaded) {
      document.body.style.overflow = "hidden"; // スクロールを無効にする
    } else {
      document.body.style.overflow = "auto"; // スクロールを有効にする
    }
  }, [isFaded]);

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
        className="absolute inset-0 w-full min-h-[100vh] z-0 flex justify-center items-center bg-blue-400/70"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFaded ? 0 : 1 }}
        transition={{ duration: 2 }}
      >
        <div className=" border-4 border-blue-400">
          <Image
            src="/keyVisual.png"
            alt="キービジュアル"
            width={700}
            height={700}
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Title;
