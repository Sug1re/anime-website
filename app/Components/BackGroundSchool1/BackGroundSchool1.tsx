"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Introduction, Title } from "../Index";

const BackGroundSchool1 = () => {
  // スクロール量を取得
  const { scrollXProgress } = useScroll();

  // 背景の動き（スクロール量の 50% の速度で動かす）
  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"]);
  return (
    <div>
      {/* 背景 */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2.5 }}
        className=" flex min-h-screen bg-school1 bg-cover bg-center object-cover "
      >
        {/* コンテンツ */}
        <div className=" flex">
          <Title />
          <Introduction />
        </div>
      </motion.section>
    </div>
  );
};

export default BackGroundSchool1;
