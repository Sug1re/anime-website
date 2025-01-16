"use client";
import React, { useState, CSSProperties, useEffect } from "react";
import { motion } from "framer-motion";
import { useTransition, animated, AnimatedProps, useSpringRef } from "@react-spring/web";
import styles from "./styles.module.css";

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: "lightgreen" }}>C</animated.div>,
];

const Character = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5, delay: 0.5 }}
    >
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h6>キャラクター紹介</h6>
        <p>キャラクターの詳細情報を記載</p>

        <div className={`flex fill ${styles.container}`} onClick={onClick}>
          {transitions((style, i) => {
            const Page = pages[i];
            return <Page style={style} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Character;