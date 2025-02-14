"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cast, Character, Staff } from "../Index";

const BackGroundSchool2 = () => {
  return (
    <div className="relative w-[400vw] lg:w-[300vw]">
      {/* 背景 */}
      <motion.section
        className="relative bg-cover bg-center bg-fixed w-full h-screen"
        style={{
          backgroundImage: "url('/backGroundSchool2.jpg')",
        }}
      >
        {/* 半透明オーバーレイ */}
        <div className="absolute inset-0 bg-white/40 "></div>

        {/* コンテンツ */}
        <div className="relative flex gap-x-20 lg:gap-x-80 ml-40">
          <Staff />
          <Cast />
          <Character />
        </div>
      </motion.section>
    </div>
  );
};

export default BackGroundSchool2;
