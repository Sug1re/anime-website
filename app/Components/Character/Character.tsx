// "use client";

// import React, { useState } from "react";
// import { useTransition, animated, AnimatedProps } from "@react-spring/web";
// import styles from "./styles.module.css";

// // ページコンポーネントの定義
// const PageA: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
//   style,
// }) => (
//   <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
// );

// const PageB: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
//   style,
// }) => (
//   <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
// );

// const PageC: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
//   style,
// }) => (
//   <animated.div style={{ ...style, background: "lightgreen" }}>C</animated.div>
// );

// const pages: React.FC<AnimatedProps<{ style: React.CSSProperties }>>[] = [
//   PageA,
//   PageB,
//   PageC,
// ];

// export default function Character() {
//   const [index, setIndex] = useState(0);

//   // インデックス変更処理
//   const handleClick = () => setIndex((prev) => (prev + 1) % pages.length);

//   // アニメーションの設定
//   const transitions = useTransition(index, {
//     from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
//   });

//   return (
//     <div
//       className="w-screen min-h-screen flex items-center justify-center text-9xl"
//       onClick={handleClick}
//       style={{ cursor: "pointer", overflow: "hidden" }}
//     >
//       {transitions((style, i) => {
//         const Page = pages[i];
//         return <Page key={i} style={style} />;
//       })}
//     </div>
//   );
// }
// "use client";

// import React from "react";
// import { animated } from "@react-spring/web";
// import { red } from "tailwindcss/colors";

// const Information = () => {
//   return (
//     <section>
//       <div className=" h-screen w-screen flex flex-col justify-center items-center">
//         <animated.div
//           style={{
//             width: 80,
//             height: 80,
//             background: red[500], // tailwindCss のカラー指定を使用
//             borderRadius: 8,
//           }}
//         ></animated.div>
//       </div>
//     </section>
//   );
// };

// export default Information;

"use client";

import React from "react";
import { motion } from "framer-motion";

// キャラクターの型定義
interface Character {
  name: string;
  description: string;
  image: string;
}

const characters: Character[] = [
  {
    name: "Naruto Uzumaki",
    description:
      "Naruto is a ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
    image: "https://example.com/naruto.jpg", // 画像URL
  },
  {
    name: "Sakura Haruno",
    description:
      "Sakura is a skilled medical ninja and a key member of Team 7.",
    image: "https://example.com/sakura.jpg", // 画像URL
  },
  {
    name: "Sasuke Uchiha",
    description:
      "Sasuke is a skilled ninja with a tragic past, seeking revenge on his brother.",
    image: "https://example.com/sasuke.jpg", // 画像URL
  },
];

// CharacterCardコンポーネントに型を指定
const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <motion.div
      className="max-w-xs w-full p-5 border-2 border-gray-300 rounded-xl text-center bg-gray-100 transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
      <p className="text-sm text-gray-600">{character.description}</p>
    </motion.div>
  );
};

const App = () => {
  return (
    <section>
      <div className="p-8 h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-8">
          Anime Character Introductions
        </h1>
        <div className="flex justify-center gap-6 flex-wrap">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
