"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cast, Character, Staff } from "../Index";

const BackGroundSchool2 = () => {
  return (
    <div className="relative w-[300vw]">
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
        <div className="relative flex">
          <Staff />
          <Cast />
          <Character />
        </div>
      </motion.section>
    </div>
  );
};

export default BackGroundSchool2;
