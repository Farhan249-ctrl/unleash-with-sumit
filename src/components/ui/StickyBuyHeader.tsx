import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";
const AMAZON_LINK = "https://amzn.in/d/0izWwgtM";

// 30 minutes in milliseconds
const THIRTY_MINUTES = 30 * 60 * 1000;

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const StickyBuyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // 30-minute countdown state
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 30, seconds: 0 });
  const [targetTime, setTargetTime] = useState<number>(0);

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true);
    // Set initial target time (30 minutes from now)
    setTargetTime(Date.now() + THIRTY_MINUTES);
  }, []);

  // Countdown timer logic with auto-reset
  useEffect(() => {
    if (!isClient || targetTime === 0) return;

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        // Reset timer to 30 minutes when it hits zero
        const newTargetTime = Date.now() + THIRTY_MINUTES;
        setTargetTime(newTargetTime);
        return { minutes: 30, seconds: 0 };
      }

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient, targetTime]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
      
      // Show after scrolling past hero section and scrolling up
      setIsVisible(currentScrollY > window.innerHeight * 0.8 && direction === 'up');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const formatTime = (value: number) => String(value).padStart(2, '0');

  return (
    <>
      {/* Bio-Hazard Red Alert Bar - High-Stakes Psychology */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: [1, 1.01, 1]
        }}
        transition={{ 
          type: "spring" as const, stiffness: 100, damping: 20,
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b-2 border-[#FACC15] shadow-[0_4px_20px_rgba(239,68,68,0.5)] will-change-transform animate-pulse"
        style={{
          background: 'linear-gradient(to right, rgba(127, 29, 29, 0.9), rgba(0, 0, 0, 0.95), rgba(127, 29, 29, 0.9))'
        }}
      >
        {/* Glass-Amber Separator - Vertical Divider */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-zinc-800 opacity-50" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-zinc-800 opacity-50" />
        <motion.div
          animate={{
            boxShadow: ['0 4px 20px rgba(239,68,68,0.5)', '0 4px 40px rgba(239,68,68,0.8)', '0 4px 20px rgba(239,68,68,0.5)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="container mx-auto py-3 px-4"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1.5fr'
          }}
        >
          {/* Left Sector - Curiosity */}
          <div className="hidden md:flex items-center gap-3 border-r border-zinc-800 pr-4">
            <motion.span 
              className="font-display font-bold text-sm text-white text-left"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              � OFFER UNLOCKED: The Communication Blueprint is yours for ₹349—until the clock hits zero.
            </motion.span>
          </div>
          
          {/* Center Sector - Masterclass Clock */}
          {isClient && (
            <motion.div 
              className="flex items-center justify-center"
              animate={{
                x: [0, 1, 0, -1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: 10,
                repeatDelay: 9.5,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-1">
                <motion.div 
                  className="px-4 py-2 rounded-lg font-mono font-bold text-sm bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                  key={timeLeft.minutes}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.05, ease: "easeOut" }}
                >
                  {formatTime(timeLeft.minutes)}
                </motion.div>
                <motion.span 
                  className="text-xs text-yellow-400 font-bold"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  :
                </motion.span>
                <motion.div 
                  className="px-4 py-2 rounded-lg font-mono font-bold text-sm bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                  key={timeLeft.seconds}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.05, ease: "easeOut" }}
                >
                  {formatTime(timeLeft.seconds)}
                </motion.div>
              </div>
              <span className="text-xs text-white/60 ml-1">left</span>
            </motion.div>
          )}
          
          {/* Right Sector - Live Social Proof */}
          <div className="flex flex-row items-center justify-end gap-4 border-l border-zinc-800 pl-4">
            <div className="relative">
              <motion.div
                className="w-2 h-2 bg-[#EF4444] rounded-full"
                animate={{
                  boxShadow: ['0 0 10px rgba(239,68,68,0.8)', '0 0 20px rgba(239,68,68,1)', '0 0 10px rgba(239,68,68,0.8)']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-0 w-2 h-2 bg-[#EF4444] rounded-full animate-ping"></div>
              <div className="absolute -left-4 top-0">
                <motion.span 
                  className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold"
                  animate={{
                    boxShadow: ['0 0 10px rgba(239,68,68,0.5)', '0 0 15px rgba(239,68,68,0.8)', '0 0 10px rgba(239,68,68,0.5)']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  LIVE
                </motion.span>
              </div>
            </div>
            <span className="text-white/80 text-sm font-medium">Limited Bonuses Available</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Sticky Buy Header - Single Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#FACC15]/30"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">
                    Exclusive Launch: <span className="text-gray-500 line-through">₹1,845</span> <span className="text-[#FACC15] font-bold text-lg animate-pulse">₹349</span> + Bonuses Worth ₹1496
                  </span>
                  {isClient && (
                    <span className="text-[#FACC15] font-mono text-sm">
                      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </span>
                  )}
                </div>
                
                {/* Magnetic Black Hole CTA with Focus Thief Arrow */}
                <div className="flex items-center gap-2">
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white will-change-transform"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, 3, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                  <motion.a
                    href={FLIPKART_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0A0A0A] font-display font-bold text-sm px-6 py-3 rounded-lg transition-all shadow-[0_0_40px_rgba(251,191,36,0.4)] will-change-transform"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, 1, -1, 0],
                      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyBuyHeader;
