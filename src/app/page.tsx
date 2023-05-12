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
        [0, .25],
        [0, -200]
    );

    const translateYJobTitle = useTransform(
        springJobTitle,
        [0, .25],
        [0, -280]
    );

    const opacityPresentation = useTransform(scrollYProgress,
        [0, .05, .08],
        [100, 40, 0]);

    const opacityHobbie = useTransform(scrollYProgress,
        [0, .5, .60],
        [0, 20, 100]);

    const gradient = useTransform(scrollYProgress,
        [0, .25, 0.5],
    ["linear-gradient(0deg, rgb(37, 35, 35) 0%, rgb(37, 35, 35) 50%, rgb(37, 35, 35) 100%)",
        "linear-gradient(0deg, rgb(136, 129, 129) 0%, rgb(255, 244, 227) 50%, rgb(222, 213, 208) 100%",
        "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 244, 227) 70%, rgb(255, 255, 255) 100%"]);

  return (
    <main className={styles.main}>
      <motion.div className={styles.page} style={{ background: gradient }}>
          <motion.div className={styles.presentation} style={{ opacity: opacityPresentation }}>Hello, I'm</motion.div>
          <motion.div className={styles.name} style={{ y: translateYName }}>Gabriel Oliveira</motion.div>
          <div>
              <motion.div className={styles.jobTitle} style={{ y: translateYJobTitle }}>UI Engineer</motion.div>
              <motion.div className={styles.hobbieTitle} style={{ y: translateYJobTitle, opacity: opacityHobbie }}>& Yogi</motion.div>
          </div>
      </motion.div>
    </main>
  )
}
