import heroBg from "@/assets/hero-bg.jpeg";
import bookVideo from "@/assets/book.mp4";
import { ShoppingCart, ExternalLink, Clock, Star, Play } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";
const AMAZON_LINK = "https://amzn.in/d/0izWwgtM";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  } as const;

  const bookVariants = {
    hidden: { opacity: 0, rotateY: -15 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  } as const;

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark radial gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/90" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content - Pyramid Principle */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-fluid-4xl lg:text-fluid-5xl font-bold mb-6 text-white leading-tight">
              Stop Being the <span className="text-[#FACC15]">Smartest Person in the Room</span><br />
              Who Stays Silent.
            </h1>
            <p className="text-[#FFFFFF] text-fluid-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              You know the answers. You have the preparation. But when the moment comes, the words dissolve. 
              It's time to build the <span className="text-[#FACC15] font-bold">architecture of your voice</span>.
            </p>
            
            {/* Trust Signal */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FACC15] fill-[#FACC15]" />
                <span className="text-white font-medium">200+ Founding Readers</span>
              </div>
              <div className="text-white/60 text-sm">•</div>
              <div className="text-white/80 text-sm">Limited Launch Edition</div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href={FLIPKART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#0A0A0A] font-display font-bold text-lg px-8 py-4 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <ShoppingCart className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Buy Now — ₹349</span>
              </motion.a>
              
              <motion.a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 border-2 border-[#FACC15] text-[#FACC15] font-display font-bold text-lg px-8 py-4 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
              >
                <div className="absolute inset-0 bg-[#FACC15] opacity-0 group-hover:opacity-20 transition-opacity" />
                <ExternalLink className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Buy on Amazon</span>
              </motion.a>
            </div>
          </motion.div>

          {/* 3D Video Book Mockup - High-End Frame */}
          <motion.div 
            className="flex-shrink-0 relative"
            variants={bookVariants}
            style={{ perspective: "1000px" }}
          >
            <div className="relative group">
              {/* Premium Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl" />
              
              {/* Soft Reflection Underneath */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-brand-yellow/20 to-transparent blur-xl rounded-full" />
              
              {/* Video container with 3D transform */}
              <motion.div
                className="relative w-72 lg:w-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-yellow/30"
                whileHover={{
                  rotateY: 15,
                }}
              >
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/90">
                    <div className="w-8 h-8 border-2 border-brand-yellow/30 border-t-brand-yellow rounded-full animate-spin" />
                  </div>
                )}
                <video
                  className="w-full h-full object-cover"
                  src={bookVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}
                />
                
                {/* Play Button Overlay */}
                {!isPlaying && isVideoLoaded && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-brand-black ml-1" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
              {/* Premium overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-2xl pointer-events-none"
                style={{ transform: "translateZ(1px)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
