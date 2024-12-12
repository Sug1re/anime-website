"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      //   initial={{ y: 100, opacity: 0 }} //初期状態：下に100px、透明
      //   animate={{ y: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
      //   //   transition={{ duration}}

      className=" h-screen w-screen"
    >
      <h1>SHARE</h1>
      {/* pタグをbuttonタグに変更でそのサイトに遷移させる*/}
      <div className=" whitespace-nowrap">
        <p>X(旧ツイッター)のアイコン</p>
        <p>FaceBookのアイコン</p>
        <p>LINEのアイコン</p>
      </div>
      <p>© 2024 アニメ公式サイト</p>
      {/* ページのTOPに移動するようにする*/}
      <section>
        <button>PAGE TOP</button>
      </section>
    </motion.footer>
  );
};

export default Footer;
