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
    // Footer完成!!
    <section className=" font-851">
      <footer
        style={{
          backgroundImage: "url('/backGroundSchool3.jpg')",
        }}
        className=" relative flex flex-col justify-center h-screen text-blue-500 border-l-4 border-l-blue-500 px-4 bg-left bg-cover"
      >
        {/* 半透明オーバーレイ */}
        <div className="absolute inset-0 bg-white/70"></div>

        <motion.h1
          initial={{ x: 16, opacity: 0 }} //初期状態：に右16px、透明
          whileInView={{ x: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.87, 0.7, 0.1, 1],
          }}
          className=" relative font-black text-2xl pb-4"
        >
          SHARE
        </motion.h1>
        <div className=" relative flex flex-col space-y-8 pb-8">
          <motion.a
            initial={{ x: 16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//x.com"
            target="_blank" // リンクを踏んだ時、別タグで開く
            className=" pl-7"
          >
            <i
              className=" fab fa-x-twitter text-4xl"
              aria-label="x-twitter"
            ></i>
          </motion.a>
          <motion.a
            initial={{ x: 16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: [0.87, 0.7, 0.1, 1],
            }}
            href="//facebook.com"
            target="_blank"
            className=" pl-7"
          >
            <i className=" fab fa-facebook text-4xl" aria-label="FaceBook"></i>
          </motion.a>
          <motion.a
            initial={{ x: 16, opacity: 0 }}
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
            initial={{ x: 16, opacity: 0 }}
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
            ></i>
          </motion.a>
        </div>
        <motion.p
          initial={{ x: 16, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3.5,
            ease: [0.87, 0.7, 0.1, 1],
          }}
          className=" relative text-xs font-semibold text-end pb-12 whitespace-nowrap"
        >
          © オダギリ ハジメ/
          <br />
          「描く光、描く影」製作委員会
        </motion.p>
        <div className="  relative space-x-4 ">
          <i className=" fa-solid fa-chevron-left text-xl"></i>
          <button
            onClick={() => scrollToTop("title")}
            className="font-black text-xl"
          >
            PAGE TOP
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
