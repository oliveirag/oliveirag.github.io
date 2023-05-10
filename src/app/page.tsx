'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

export default function Home() {

    const { scrollYProgress } = useScroll();
    const springName = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 70,
        restDelta: 0.001,
    });

    const springJobTitle = useSpring(scrollYProgress, {
        stiffness: 75,
        damping: 100,
        restDelta: 0.001
    });

    const translateYName = useTransform(
        springName,
        [0, 1],
        [0, -200]
    );

    const translateYJobTitle = useTransform(
        springJobTitle,
        [0, 1],
        [0, -280]
    );

    const opacityPresentation = useTransform(scrollYProgress,
        [0, .2, .4],
        [100, 40, 0]);

    const gradient = useTransform(scrollYProgress,
        [0, 1],
    ["linear-gradient(0deg, rgb(37, 35, 35) 0%, rgb(37, 35, 35) 50%, rgb(37, 35, 35) 100%)",
        "linear-gradient(0deg, rgb(136, 129, 129) 0%, rgb(255, 244, 227) 50%, rgb(222, 213, 208) 100%"]);

  return (
    <main className={styles.main}>
      <motion.div className={styles.page} style={{ background: gradient }}>
          <motion.div className={styles.presentation} style={{ opacity: opacityPresentation }}>Hello, I'm</motion.div>
          <motion.div className={styles.name} style={{ y: translateYName }}>Gabriel Oliveira</motion.div>
          <motion.div className={styles.jobTitle} style={{ y: translateYJobTitle }}>UI Engineer</motion.div>
      </motion.div>
    </main>
  )
}
