"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className="relative h-screen w-screen "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2.5 }}
        className="absolute inset-0 bg-school1 bg-cover bg-center before:absolute before:inset-0 before:bg-white/80"
      ></motion.div>

      <div className="relative z-50 h-screen w-screen flex flex-col justify-center items-center">
        <h3 className=" font-bold text-xl text-blue-400 mb-4">
          心の中の色を、絵に描く。友情と成長が交差するアートの物語。
        </h3>
        <p className=" mb-4 font-semibold">
          東京郊外の桜丘高校を舞台に、絵を描くことに情熱を注ぐユウと、
          <br />
          美術部の天才アヤが織りなす青春ストーリー。
          <br />
          ユウは自分の才能に自信が持てず、アヤとの距離を感じながらも、仲間たちと共に様々なプロジェクトに挑戦していく。
          <br />
          友情、葛藤、恋愛を通して成長していく二人の物語が描かれる。
        </p>
        <p className=" font-bold text-xl text-blue-400">
          絵を通じ、未来に向かっていくの青春物語が今、始まる。
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;
