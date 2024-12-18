"use client";

import React from "react";
import { motion } from "framer-motion";

const Staff = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      className="w-screen"
    >
      <h5>スタッフ情報</h5>
      <p>制作スタッフの情報を記載</p>
    </motion.section>
  );
};

export default Staff;
