import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-yellow-glow to-brand-yellow z-50 origin-left"
        style={{ scaleX }}
      />
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-brand-black/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium z-40"
        >
          <span className="text-brand-yellow">Keep reading</span> • You're doing great
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
