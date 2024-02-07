import { AnimationProps, motion } from 'framer-motion';
import React from 'react';

interface AnimateDivProps {
  children: React.ReactNode;
  initialProps: AnimationProps['initial'];
}
export const AnimateDiv = ({ children, initialProps }: AnimateDivProps) => {
  return (
    <motion.div
      initial={initialProps}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, translateX: 0, translateY: 0, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  );
};
