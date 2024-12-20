"use client";

import React from "react";
import { motion } from "framer-motion";

const Staff = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className="flex flex-col items-center justify-center px-36 md:px-0"
    >
      <div className=" grid grid-cols-3 gap-x-28 gap-y-8 px-12">
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">原作</p>
          <p className=" text-lg md:text-2xl font-bold">小坂井 祐莉絵</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">監督</p>
          <p className=" text-lg md:text-2xl font-bold">戸松 遥</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">
            シリーズ構成・脚本
          </p>
          <p className=" text-lg md:text-2xl font-bold">内山 昂輝</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">
            キャラクターデザイン
          </p>
          <p className=" text-lg md:text-2xl font-bold">小坂井 祐莉絵</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">総作画監督</p>
          <p className=" text-lg md:text-2xl font-bold">山下 誠一郎</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">色彩設計</p>
          <p className=" text-lg md:text-2xl font-bold">小坂井 祐莉絵</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">美術監督</p>
          <p className=" text-lg md:text-2xl font-bold">岡本 信彦</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">撮影監督</p>
          <p className=" text-lg md:text-2xl font-bold">M・A・O</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">
            CG ディレクター
          </p>
          <p className=" text-lg md:text-2xl font-bold">近藤 玲奈</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">編集</p>
          <p className=" text-lg md:text-2xl font-bold">山下 大輝</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">音響監督</p>
          <p className=" text-lg md:text-2xl font-bold">近藤 玲奈</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">音楽</p>
          <p className=" text-lg md:text-2xl font-bold">山下 大輝</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">制作</p>
          <p className=" text-lg md:text-2xl font-bold">山下 大輝</p>
        </div>
        <div className=" flex flex-col">
          <p className=" md:text-1xl font-semibold text-red-600">制作</p>
          <p className=" text-lg md:text-2xl font-bold">
            「任意のアニメ」製作委員会
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Staff;
