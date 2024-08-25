import { motion } from 'framer-motion';
import React, { PropsWithChildren, ReactNode } from 'react';

interface IAnimateEnterProps {
  children?: ReactNode | Array<ReactNode> | undefined;
  className?: string;
}

export const AnimateEnter: React.FC<PropsWithChildren<IAnimateEnterProps>> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      viewport={{
        once: true,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};
