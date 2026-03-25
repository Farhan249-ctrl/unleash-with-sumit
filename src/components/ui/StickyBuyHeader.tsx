import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Clock, AlertCircle } from 'lucide-react';
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
      {/* Thin Blurred Glass Bar - Sticky Urgency with 30-min Timer */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] backdrop-blur-xl border-b-2 border-[#FACC15] shadow-[0_4px_20px_rgba(250,204,21,0.3)]"
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#FACC15]" />
            <motion.span 
              className="font-display font-bold text-sm text-white"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Exclusive Launch Offer: First 50 Buyers Only — Limited Bonuses Inside
            </motion.span>
          </div>
          
          {isClient && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="bg-[#FACC15] px-3 py-1.5 rounded font-mono font-bold text-sm text-black">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-xs text-white/60">:</span>
                <div className="bg-[#FACC15] px-3 py-1.5 rounded font-mono font-bold text-sm text-black">
                  {formatTime(timeLeft.seconds)}
                </div>
              </div>
              <span className="text-xs text-white/60 ml-1">left</span>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="relative">
              <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-[#EF4444] rounded-full animate-ping"></div>
            </div>
            <span className="text-white/80">Limited Bonuses Available</span>
          </div>
        </div>
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
                    Exclusive Launch: ₹349 + Bonuses Worth ₹1496
                  </span>
                  {isClient && (
                    <span className="text-[#FACC15] font-mono text-sm">
                      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </span>
                  )}
                </div>
                
                {/* Single Buy Now Button */}
                <motion.a
                  href={FLIPKART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0A0A0A] font-display font-bold text-sm px-6 py-3 rounded-lg transition-all"
                  whileHover={{ 
                    scale: 1.05,
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyBuyHeader;
