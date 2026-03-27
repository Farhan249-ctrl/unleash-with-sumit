import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-yellow-500/30 will-change-transform"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto max-w-lg px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-zinc-500 line-through text-sm">~~₹1,845~~</span>
              <motion.span 
                className="text-[#FACC15] font-bold text-xl"
                animate={{ 
                  textShadow: ['0 0 10px rgba(251,191,36,0.5)', '0 0 20px rgba(251,191,36,0.8)', '0 0 10px rgba(251,191,36,0.5)']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ₹349
              </motion.span>
            </div>
            <motion.span 
              className="text-xs text-zinc-400 uppercase tracking-wider"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              OFFER ENDS WITH TIMER
            </motion.span>
          </div>
          
          {/* Magnetic Yellow Button with Focus-Thief Arrow */}
          <div className="relative">
            {/* Radial Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-yellow-400/30"
              animate={{
                scale: [1, 1.2, 1.4, 1],
                opacity: [0.8, 0.4, 0.2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            <motion.a
              href={FLIPKART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#FACC15] text-[#0A0A0A] font-display font-bold text-sm px-6 py-3 rounded-lg transition-all will-change-transform z-10"
              animate={{
                boxShadow: ['0 0 40px rgba(251,191,36,0.25)', '0 0 60px rgba(251,191,36,0.4)', '0 0 40px rgba(251,191,36,0.25)']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 100, damping: 20 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { type: "spring", stiffness: 100, damping: 20 }
              }}
            >
              {/* Focus-Thief Arrow */}
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white will-change-transform"
                animate={{
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 1.5,
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
              <ShoppingCart className="w-4 h-4" />
              <span>Buy Now</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
