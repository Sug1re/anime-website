"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// キャラクターの型定義
interface Character {
  image: string;
  bgColor: string;
}

const characters: Character[] = [
  {
    image: "/Character/立川 翼.png",
    bgColor: "bg-cyan-200",
  },
  {
    image: "/Character/西條 碧.png",
    bgColor: "bg-blue-200",
  },
  {
    image: "/Character/高梨 モカ.png",
    bgColor: "bg-yellow-200",
  },
  {
    image: "/Character/一ノ瀬 遊真.png",
    bgColor: "bg-red-200",
  },
  {
    image: "/Character/初平 翠.png",
    bgColor: "bg-lime-200",
  },
];

// CharacterCardコンポーネントに型を指定
const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const [isFloating, setIsFloating] = useState(false);
  return (
    <motion.div
      className={`max-w-xs w-full px-2 py-5 border-2 border-gray-300 rounded-xl text-center bg-gray-100 transition-transform transform hover:scale-105 ${character.bgColor}`}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 3.5, delay: 0.5, ease: [0.25, 1, 0.25, 1] }}
      onAnimationComplete={() => setIsFloating(true)} // アニメーション終了時に揺れを開始
      animate={
        isFloating
          ? {
              y: [0, -10, 0, 10, 0], // 上下に揺れる動き
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }
          : {}
      }
    >
      <img src={character.image} className="w-full h-auto rounded-lg mb-4" />
    </motion.div>
  );
};

const Character = () => {
  return (
    <section>
      <div className="p-8 h-screen w-screen flex justify-center items-center">
        <div className="flex justify-center gap-6">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Character;
