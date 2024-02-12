'use client';
import { AnimationProps, motion } from 'framer-motion';
import React from 'react';
import { cn } from '~/lib/utils';

interface AnimateDivProps {
  children: React.ReactNode;
  initialProps: AnimationProps['initial'];
  duration?: number;
  delay?: number;
  className?: string;
}
export const AnimateDiv = ({ children, initialProps, duration, delay, className }: AnimateDivProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial={initialProps}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0, transition: { duration: duration ?? 1, delay: delay ?? 0 } }}
    >
      {children}
    </motion.div>
  );
};
