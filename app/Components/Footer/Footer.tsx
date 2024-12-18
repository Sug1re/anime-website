"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // ページ内の移動　=　scrollIntViewメソッド使用
  const scrollToTop = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start" }); // behavior:スクロール速度,block:縦方向の表示位置,inline:横方向の表示位置
    }
  };
  return (
    <section className=" bg-black text-red-600 border-l-4 border-l-red-600">
      <footer className=" pt-28 px-4">
        <motion.h1
          initial={{ x: 100, opacity: 0 }} //初期状態：下に100px、透明
          whileInView={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.87, 0.7, 0.1, 1],
          }}
          className=" font-black pl-7 pb-7 text-2xl "
        >
          SHARE
        </motion.h1>
        <div className=" whitespace-nowrap flex flex-col space-y-6">
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//x.com"
            target="_blank"
            className=" pl-7"
          >
            <i
              className=" fab fa-x-twitter text-4xl"
              aria-label="x-twitter"
            ></i>
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//facebook.com"
            target="_blank" // リンクを踏んだ時、別タグで開く
            className=" pl-7"
          >
            <i className=" fab fa-facebook text-4xl" aria-label="FaceBook"></i>{" "}
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 2,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//line.me"
            target="_blank"
            className=" pl-7"
          >
            <i className=" fab fa-line text-4xl" aria-label="LINE"></i>
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 2.5,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//instagram.com"
            target="_blank"
            className=" pl-7"
          >
            <i
              className=" fab fa-instagram text-4xl"
              aria-label="INSTAGRAM"
            ></i>{" "}
          </motion.a>
        </div>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3.5,
            ease: [0.87, 0.7, 0.1, 1],
          }}
          className=" pt-24 font-semibold"
        >
          © 2024 アニメ公式サイト
        </motion.p>
        <div className=" space-x-4">
          <i className=" fa-solid fa-chevron-left text-xl"></i>
          <button
            onClick={() => scrollToTop("title")}
            className=" pt-24 font-black text-xl"
          >
            PAGE TOP
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
