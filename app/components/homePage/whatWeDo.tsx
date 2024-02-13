'use client';

import { useAnimation, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const WhatWeDo = () => {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    controls.start({
      x: +scrollPosition * 30, // Adjust the scroll speed as needed
    });

    const maxMoveLimit = 500; // Adjust the maximum allowed movement
    const limitedX = Math.max(-scrollPosition * 30, -maxMoveLimit);

    controls.start({
      x: limitedX,
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, controls]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto gap-7 py-20">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <div className="flex flex-col gap-3 md:gap-10 px-6 md:ml-40">
        <p className="text-primary-green text-4xl md:text-6xl font-bold">WHAT WE DO</p>
        <p className="text-l md:text-xl w-10/12">Specializing in Microsoft&apos;s analytics and data storage platform, high performance data warehouses and data lakes, and Microsoft&apos;s user-friendly ecosystem to surface it. We deliver on customized architecture that puts actionable data in your hands.</p>
      </div>
      <div className="w-full z-2 flex relative justify-end">
        <motion.div
          className="absolute top-0"
          initial={{ translateX: 500, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={controls}
        >
          <img
            src="/what-we-do-lineart-img.png"
            alt="Stock Image Data"
            className="absolute z-10 w-[300px] md:w-[2000px]"
          />
          <img
            src="/what-we-do-main-img.png"
            alt="Stock Image Data"
            className="z-0 w-[300px] md:w-[2000px]"
          />
        </motion.div>
        <img
          src="/what-we-do-img.png"
          alt="Stock Image Data"
          className=" w-[300px] md:w-[2000px]"
        />
      </div>
    </div>
  );
};
