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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        delay: 0.6,
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content - Pyramid Principle */}
          <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
            <motion.div 
              className="inline-block"
              variants={itemVariants}
            >
              <p className="text-brand-yellow font-display text-xs font-bold tracking-widest uppercase mb-6 letter-spacing-wider">
                Unleash with Sumit
              </p>
            </motion.div>
            
            {/* Main Headline - Largest */}
            <motion.h1 
              className="font-display text-fluid-4xl lg:text-fluid-5xl font-black leading-tight mb-4 text-white"
              variants={itemVariants}
            >
              You Know the Answer.
            </motion.h1>
            
            {/* Medium-weight Yellow Sub-headline */}
            <motion.h2 
              className="font-display text-fluid-2xl lg:text-fluid-3xl font-semibold leading-tight mb-6 text-brand-yellow"
              variants={itemVariants}
            >
              But You Can't Say It.
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-fluid-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              The book that turns your silent knowledge into spoken confidence. Stop freezing. Start speaking.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
              variants={itemVariants}
            >
              <motion.a
                href={FLIPKART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-brand-gradient text-brand-black font-display font-bold text-lg px-8 py-4 rounded-lg overflow-hidden"
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
                className="group inline-flex items-center justify-center gap-2 border-2 border-brand-yellow text-brand-yellow font-display font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-brand-yellow hover:text-brand-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
              >
                <ExternalLink className="w-5 h-5" />
                Buy on Amazon
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 justify-center lg:justify-start text-brand-yellow/90 text-sm"
              variants={itemVariants}
            >
              <Clock className="w-4 h-4" />
              <span className="font-medium">Limited bonuses available — don't miss out</span>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex items-center gap-4 mt-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="text-sm text-white/80">
                <strong>4.8/5</strong> from 2,847+ readers
              </span>
            </motion.div>
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
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.4)",
                }}
                whileHover={{
                  rotateY: 15,
                  scale: 1.05,
                  transition: { type: "spring" as const, stiffness: 100, damping: 20 },
                }}
              >
                <video
                  src={bookVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={() => setIsVideoLoaded(true)}
                  style={{ minHeight: '500px' }}
                />
                
                {/* Loading placeholder */}
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-brand-yellow/20 flex items-center justify-center rounded-2xl">
                    <Play className="w-12 h-12 text-brand-yellow" />
                  </div>
                )}
                
                {/* Premium overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-2xl pointer-events-none"
                  style={{ transform: "translateZ(1px)" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
