import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ExternalLink, Clock, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";
const AMAZON_LINK = "https://amzn.in/d/0izWwgtM";

// Target date: 2 weeks from now for "Placement Season Launch"
const TARGET_DATE = new Date();
TARGET_DATE.setDate(TARGET_DATE.getDate() + 14);

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <div className="flex items-center gap-2 text-red-500">
        <AlertCircle className="w-4 h-4" />
        <span className="font-bold">Launch Extended - Limited Time!</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <div className="bg-brand-black/20 px-2 py-1 rounded font-mono font-bold text-sm">
          {String(days).padStart(2, '0')}
        </div>
        <span className="text-xs">D</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-brand-black/20 px-2 py-1 rounded font-mono font-bold text-sm">
          {String(hours).padStart(2, '0')}
        </div>
        <span className="text-xs">H</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-brand-black/20 px-2 py-1 rounded font-mono font-bold text-sm">
          {String(minutes).padStart(2, '0')}
        </div>
        <span className="text-xs">M</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-brand-black/20 px-2 py-1 rounded font-mono font-bold text-sm">
          {String(seconds).padStart(2, '0')}
        </div>
        <span className="text-xs">S</span>
      </div>
    </div>
  );
};

const StickyBuyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  return (
    <>
      {/* Thin Blurred Glass Bar - Sticky Urgency */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-rich-black/80 backdrop-blur-xl border-b border-brand-yellow/20"
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-brand-yellow" />
            <span className="font-display font-bold text-sm text-white">Placement Season Launch</span>
          </div>
          
          {isClient && isCountdownActive && (
            <Countdown
              date={TARGET_DATE}
              renderer={CountdownRenderer}
              onComplete={() => setIsCountdownActive(false)}
            />
          )}
          
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-soft-gray">Limited Bonuses Available</span>
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
            className="fixed bottom-0 left-0 right-0 z-40 bg-rich-black/90 backdrop-blur-xl border-t border-brand-yellow/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">Placement Season Special: ₹349 + Exclusive Bonuses</span>
                </div>
                
                {/* Single Buy Now Button */}
                <motion.a
                  href={FLIPKART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gradient text-brand-black font-display font-bold text-sm px-6 py-3 rounded-lg transition-all"
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
