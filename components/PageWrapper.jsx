"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {usePathname, useRouter} from 'next-intl/client';
import "@styles/globals.css"

const container = {
    show: {
      transition: {
        delayChildren: 10,
        staggerDirection: -1
      },
    },
  };

export function PageWrapper  ({ children, setLoading })  {
const pathname = usePathname();
const router = useRouter();
const [isLoading, setIsLoading] = useState(true);



  return (
    <AnimatePresence mode="wait"  >

        <motion.div 
        
        variants={container}
        >
      <motion.div 
        key={pathname}
      >
        {children}

        <motion.div
          className="slide-in"

          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1}}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

      </motion.div>
      </motion.div>
    </AnimatePresence>
    )

};