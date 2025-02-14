"use client";

import React from "react";
import { motion } from "framer-motion";
import { Introduction, Title } from "../Index";

const BackGroundSchool1 = () => {
  return (
    <div className="relative w-[250vw]">
      {/* 背景 */}
      <motion.section
        className="relative bg-cover bg-center bg-fixed w-full h-screen"
        style={{
          backgroundImage: "url('/backGroundSchool1.jpg')",
        }}
      >
        {/* 半透明オーバーレイ */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* コンテンツ */}
        <div className="relative flex gap-x-20">
          <Title />
          <Introduction />
        </div>
      </motion.section>
    </div>
  );
};

export default BackGroundSchool1;
