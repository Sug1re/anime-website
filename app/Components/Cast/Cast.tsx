"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// キャストの型定義
interface staffMembers {
  role: string;
  name: string;
}

const castMembers = [
  { role: "原作", name: "オダギリ ハジメ" },
  { role: "監督", name: "遠藤 義信" },
  { role: "シリーズ構成・脚本", name: "小西 仁美" },
  { role: "キャラクターデザイン", name: "鈴木 一郎" },
  { role: "総作画監督", name: "井口 澪" },
];

export default function Staff() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
      id="cast"
      className="relative w-screen min-h-screen flex items-center justify-center text-blue-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 relative">
        {castMembers.map((cast, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md px-3 py-4 flex flex-col items-center text-center relative"
          >
            {/* 監督のデータの左上にロゴ配置 */}
            {index === 0 && (
              <Image
                src="/Cast.png"
                alt="スタッフのロゴ"
                width={150}
                height={150}
                className="absolute top-[-10px] left-[10px]  transform -translate-x-1/2 -translate-y-1/2"
              />
            )}

            {/* キャスト紹介 */}
            <h3 className="text-xl font-black mb-2">{cast.role}</h3>
            <p className="font-bold text-gray-700">{cast.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
