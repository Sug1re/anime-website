"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.section>
      <div className=" h-screen w-screen flex flex-col justify-center items-center">
        <h3 className=" font-black text-xl text-blue-500 mb-4">
          心の中の色を、絵に描く。友情と成長が交差するアートの物語。
        </h3>
        <p className=" mb-4 font-semibold">
          東京郊外の桜丘高校を舞台に、絵を描くことに情熱を注ぐユウと、
          <br />
          美術部の天才アヤが織りなす青春ストーリー。
          <br />
          自分の才能に自信が持てないユウが、アヤとの距離を感じながらも、仲間と共に様々なイベントに挑戦!!
          <br />
          友情、葛藤、恋愛を通して成長していく二人の物語。
        </p>
        <p className=" font-black text-xl text-blue-500">
          絵を通じ、未来に向かっていくの青春物語が今、始まる。
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;
