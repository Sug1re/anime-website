"use client";

import React from "react";
import { motion } from "framer-motion";

const Cast = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
    >
      <div className=" h-screen w-screen flex flex-col justify-center items-center px-44">
        {/*　フォントを変更する */}
        <h5 className=" text-3xl md:text-4xl pb-5">CAST</h5>
        <div className=" grid grid-cols-4 gap-x-28 gap-y-8">
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">堀 京子</p>
            <p className=" text-lg md:text-2xl font-bold">戸松 遥</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">宮村 伊澄</p>
            <p className=" text-lg md:text-2xl font-bold">内山 昂輝</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">石川 透</p>
            <p className=" text-lg md:text-2xl font-bold">山下 誠一郎</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">吉川 由紀</p>
            <p className=" text-lg md:text-2xl font-bold">小坂井 祐莉絵</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">仙石 翔</p>
            <p className=" text-lg md:text-2xl font-bold">岡本 信彦</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">綾崎 レミ</p>
            <p className=" text-lg md:text-2xl font-bold">M・A・O</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">河野 桜</p>
            <p className=" text-lg md:text-2xl font-bold">近藤 玲奈</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">井浦 秀</p>
            <p className=" text-lg md:text-2xl font-bold">山下 大輝</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">柳 明音</p>
            <p className=" text-lg md:text-2xl font-bold">福山 潤</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">進藤 晃一</p>
            <p className=" text-lg md:text-2xl font-bold">八代 拓</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">
              沢田 ほのか
            </p>
            <p className=" text-lg md:text-2xl font-bold">麻倉 もも</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-1xl font-semibold text-red-600">堀 京介</p>
            <p className=" text-lg md:text-2xl font-bold">小野 大輔</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cast;
