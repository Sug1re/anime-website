"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section className="relative h-screen w-screen overflow-hidden">
      {/* 黒板の背景画像 */}
      <div className=" flex justify-center items-center w-screen h-screen relative">
        <Image
          src="/黒板.png"
          alt="黒板"
          width={900}
          height={900}
          className=" rounded-xl border-2 border-white"
        />

        {/* テキストコンテンツ */}
        <div className="h-full w-full flex flex-col justify-center items-center text-blue-200 absolute z-10">
          <h3 className="font-black text-xl  mb-4 text-center">
            心の中の色を、絵に描く。友情と成長が交差するアートの物語。
          </h3>
          <p className="mb-4 font-semibold bg-opacity-70 p-4 text-white rounded text-center">
            東京郊外の桜丘高校を舞台に、絵を描くことに情熱を注ぐユウと、
            <br />
            美術部の天才アヤが織りなす青春ストーリー。
            <br />
            自分の才能に自信が持てないユウが、アヤとの距離を感じながらも、仲間と共に様々なイベントに挑戦!!
            <br />
            友情、葛藤、恋愛を通して成長していく二人の物語。
          </p>
          <p className="font-black text-xl  text-center">
            絵を通じ、未来に向かっていくの青春物語が今、始まる。
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
