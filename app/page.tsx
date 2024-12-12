"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      localStorage.setItem("windowWidth", window.innerWidth.toString());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // initial 初期状態,
    // animate 変化,
    // exit 最終状態,
    // transition initialとanimateの間
    <main
      // style={{ width: "${width}px" }}
      className=" flex whitespace-nowrap motion"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.5 }}
        // exit={{ opacity: 0 }}
        className=" h-screen w-screen"
      >
        任意のアニメタイトル
      </motion.h1>
      <section className=" h-screen w-screen">
        <h2>概要</h2>
        <p>アニメの基本情報を記載</p>
      </section>
      <section className=" h-screen w-screen">
        <h3>キャラクター紹介</h3>
        <p>キャラクターの詳細情報を記載</p>
      </section>
      <section className=" h-screen w-screen">
        <h4>INTRODUCTION</h4>
        <p>INTRODUCTIONの概要を記載</p>
      </section>
      <section className=" h-screen w-screen">
        <h5>スタッフ情報</h5>
        <p>制作スタッフの情報を記載</p>
      </section>
    </main>
  );
}
