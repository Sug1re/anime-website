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
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.5 }}
        // exit={{ opacity: 0 }}
        className=" h-screen w-screen"
      >
        <h1>任意のアニメタイトル</h1>
      </motion.section>
      <motion.section className=" h-screen w-screen">
        <h2>概要</h2>
        <p>アニメの基本情報を記載</p>
      </motion.section>
      <motion.section className=" h-screen w-screen">
        <h3>キャラクター紹介</h3>
        <p>キャラクターの詳細情報を記載</p>
      </motion.section>
      <motion.section className=" h-screen w-screen">
        <h4>INTRODUCTION</h4>
        <p>INTRODUCTIONの概要を記載</p>
      </motion.section>
      <motion.section className=" h-screen w-screen">
        <h5>スタッフ情報</h5>
        <p>制作スタッフの情報を記載</p>
      </motion.section> */}
      <section className="mt-44">
        <footer className=" h-screen w-screen">
          <motion.h1
            initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
            animate={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.87, 0.7, 0.1, 1],
            }}
          >
            SHARE
          </motion.h1>
          {/* pタグをbuttonタグに変更でそのサイトに遷移させる*/}
          <div className=" whitespace-nowrap">
            <motion.p
              initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
              animate={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0.87, 0.7, 0.1, 1],
              }}
            >
              X(旧ツイッター)のアイコン
            </motion.p>
            <motion.p
              initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
              animate={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0.87, 0.7, 0.1, 1],
              }}
            >
              FaceBookのアイコン
            </motion.p>
            <motion.p
              initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
              animate={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
              transition={{
                duration: 0.5,
                delay: 2,
                ease: [0.87, 0.7, 0.1, 1],
              }}
            >
              LINEのアイコン
            </motion.p>
          </div>
          <motion.p
            initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
            animate={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
            transition={{
              duration: 0.5,
              delay: 2.5,
              ease: [0.87, 0.7, 0.1, 1],
            }}
          >
            © 2024 アニメ公式サイト
          </motion.p>
          {/* ページのTOPに移動するようにする*/}
          <section className=" mt-72">
            <button>PAGE TOP</button>
          </section>
        </footer>
      </section>
    </main>
  );
}
