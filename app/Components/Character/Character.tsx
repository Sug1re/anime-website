"use client";

import React, { useState, useEffect } from "react";
import {
  useTransition,
  animated,
  useSpringRef,
  AnimatedProps,
} from "@react-spring/web";
import styles from "./styles.module.css";

// ページコンポーネントのリスト
const PageA: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
  style,
}) => (
  <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
);

const PageB: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
  style,
}) => (
  <animated.div style={{ ...style, background: "lightblue" }}>B </animated.div>
);

const PageC: React.FC<AnimatedProps<{ style: React.CSSProperties }>> = ({
  style,
}) => (
  <animated.div style={{ ...style, background: "lightgreen" }}>C</animated.div>
);

const pages: React.FC<AnimatedProps<{ style: React.CSSProperties }>>[] = [
  PageA,
  PageB,
  PageC,
];

export default function Character() {
  const [index, setIndex] = useState(0);

  // インデックス変更処理
  const handleClick = () => setIndex((prev) => (prev + 1) % pages.length);

  const transRef = useSpringRef();

  // アニメーションの設定
  const transitions = useTransition(index, {
    ref: transRef,
    keys: index, // 固定キー
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  // アニメーション開始
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center text-9xl"
      onClick={handleClick}
      style={{ cursor: "pointer", overflow: "hidden" }} // クリック可能な見た目に変更
    >
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
