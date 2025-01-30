"use client";

import React from "react";
import { motion } from "framer-motion";

const Staff = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className=" whitespace-nowrap"
    >
      <div className=" h-screen w-screen flex flex-col items-center justify-center">
        <div className=" grid grid-cols-3 gap-x-24 gap-y-6">
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">原作</p>
            <p className=" text-lg md:text-1xl font-bold">オダギリ ハジメ</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">監督</p>
            <p className=" text-lg md:text-1xl font-bold">遠藤 義信</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">
              シリーズ構成・脚本
            </p>
            <p className=" text-lg md:text-1xl font-bold">小西 仁美</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">
              キャラクターデザイン
            </p>
            <p className=" text-lg md:text-1xl font-bold">井口 澪</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">総作画監督</p>
            <p className=" text-lg md:text-1xl font-bold">高野 源一</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">色彩設計</p>
            <p className=" text-lg md:text-1xl font-bold">渡部 みどり</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">美術監督</p>
            <p className=" text-lg md:text-1xl font-bold">田所 仁</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-gl font-semibold text-red-600">撮影監督</p>
            <p className=" text-lg md:text-1xl font-bold">三杉 渉</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">
              CG ディレクター
            </p>
            <p className=" text-lg md:text-1xl font-bold">神木 愛子</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">編集</p>
            <p className=" text-lg md:text-1xl font-bold">山井 透一</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">音響監督</p>
            <p className=" text-lg md:text-1xl font-bold">八木原 潤</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">音楽</p>
            <p className=" text-lg md:text-1xl font-bold">大染 士郎</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">制作</p>
            <p className=" text-lg md:text-1xl font-bold">HoneyLemon</p>
          </div>
          <div className=" flex flex-col">
            <p className=" md:text-lg font-semibold text-red-600">制作</p>
            <p className=" text-lg md:text-1xl font-bold">
              「任意のアニメ」製作委員会
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Staff;
