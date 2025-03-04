"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// キャストの型定義
interface staffMembers {
  name: string;
  CV: string;
}

const castMembers = [
  { name: "西條 碧", CV: "勇飛 莉都" }, // 主人公
  { name: "立川 翼", CV: "朝比奈 香緒里" }, // ヒロイン
  { name: "一ノ瀬 遊真", CV: "長瀬 一稀" }, // 主人公の友達
  { name: "高橋 モカ", CV: "天水 ひなき" }, // ヒロインの友達
  { name: "初平 翠", CV: "小鳥 並木" }, // 部長
];

export default function Staff() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      id="cast"
      className="relative w-auto h-screen flex items-center justify-center text-blue-500"
    >
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 relative w-[800px]">
        {castMembers.map((cast, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md px-6 py-4 flex flex-col text-center relative w-[250px] font-851"
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
            <h3 className="text-3xl font-black mb-2">{cast.name}</h3>
            <p className="text-2xl font-bold text-gray-700">{cast.CV}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
