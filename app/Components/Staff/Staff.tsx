"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// スタッフメンバーの型定義
interface staffMembers {
  role: string;
  name: string;
}

const staffMembers = [
  { role: "原作", name: "オダギリ ハジメ" },
  { role: "監督", name: "遠藤 義信" },
  { role: "シリーズ構成・脚本", name: "小西 仁美" },
  { role: "キャラクターデザイン", name: "鈴木 一郎" },
  { role: "総作画監督", name: "井口 澪" },
  { role: "色彩設計", name: "高野 源一" },
  { role: "美術監督", name: "渡部 みどり" },
  { role: "撮影監督", name: "田所 仁" },
  { role: "CGディレクター", name: "三杉 渉" },
  { role: "編集", name: "神木 愛子" },
  { role: "音響監督", name: "山井 透一" },
  { role: "音楽", name: "八木原 潤" },
  { role: "制作", name: "HoneyLemon" },
  { role: "制作", name: "「描く光、描く影」製作委員会" },
];

export default function Staff() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      id="staff"
      className="relative w-auto h-screen flex items-center justify-center text-blue-500"
    >
      <div className="grid grid-cols-4 gap-8 p-8 relative">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md px-3 py-4 flex flex-col items-center text-center relative"
          >
            {/* 監督のデータの左上にロゴ配置 */}
            {index === 0 && (
              <Image
                src="/Staff.png"
                alt="スタッフのロゴ"
                width={150}
                height={150}
                className="absolute top-[-10px] left-[10px]  transform -translate-x-1/2 -translate-y-1/2"
              />
            )}

            {/* スタッフ紹介 */}
            <h3 className="text-xl font-black mb-2">{staff.role}</h3>
            <p className="font-bold text-gray-700">{staff.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
