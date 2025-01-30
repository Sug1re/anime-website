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

"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { red } from "tailwindcss/colors";

const Character = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };
  return (
    <section>
      <div
        className=" h-screen w-screen flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: red[500], // tailwindCss のカラー指定を使用
            borderRadius: 8,
            ...springs,
          }}
        />
      </div>
    </section>
  );
};

export default Character;
