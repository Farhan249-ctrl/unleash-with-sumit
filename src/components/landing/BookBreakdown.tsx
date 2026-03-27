import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Zap, Layers, Target, Eye, RotateCcw, Sparkles, BookOpen } from 'lucide-react';

// 6 Strategic Pillars from Table of Contents
const strategicPillars = [
  {
    id: "pillar-1",
    icon: Shield,
    title: "The Blank Mind Architecture",
    chapter: "Chapter 1",
    headline: "The End of the Frozen Mind",
    description: "Understand exactly why intelligent people struggle most under pressure and how to stop your words from dissolving when it matters.",
    featured: true,
    color: "from-red-500 to-orange-500"
  },
  {
    id: "pillar-2",
    icon: Layers,
    title: "The Universal Clarity Framework",
    chapter: "Chapter 3",
    headline: "The CMC Mastery System",
    description: "Master the missing skill nobody teaches. A plug-and-play framework to organize complex thoughts into clear, structured responses instantly.",
    featured: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "pillar-3",
    icon: Zap,
    title: "High-Pressure Thinking",
    chapter: "Chapter 4",
    headline: "The 30-Second Reset",
    description: "Learn the one rule that saves you when memorization fails. Control the pause to create professional authority in any conversation.",
    featured: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "pillar-4",
    icon: Eye,
    title: "Non-Verbal Authority",
    chapter: "Chapter 6",
    headline: "Visual & Environmental Clarity",
    description: "Structure your appearance like you structure your thoughts. A repeatable system for grooming and presence that signals instant credibility.",
    featured: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "pillar-5",
    icon: RotateCcw,
    title: "The Personal Laboratory",
    chapter: "Chapter 8",
    headline: "The Record & Review Loop",
    description: "The exact system for lifelong mastery. Learn how to separate your vocal, visual, and verbal image to refine your presence daily.",
    featured: true,
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "pillar-6",
    icon: Sparkles,
    title: "The Influence Field Guide",
    chapter: "Bonus",
    headline: "The Story Compression Toolkit",
    description: "Advanced tools for high-stakes impact: The Rule of Three, Contrast Principles, and Point-Reason-Impact frameworks.",
    featured: false,
    color: "from-indigo-500 to-purple-500"
  }
];

const BookBreakdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [unlockedPillars, setUnlockedPillars] = useState<Set<string>>(new Set());

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

  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brand-yellow/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-brand-yellow/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            What You'll <span className="text-[#FACC15]">Learn</span>
          </h2>
          <p className="text-white text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            6 Strategic Pillars derived from the book's Table of Contents — A complete curriculum for communication mastery
          </p>
        </motion.div>

        {/* Golden-Ratio Layout - Desktop */}
        <div className="hidden lg:block relative mx-auto">
          {/* Golden-Silk SVG Paths - Cinematic Connections */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-20" 
            style={{ position: 'absolute', top: 0, left: 0 }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Define Arrowhead Marker */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  fill="#FFFFFF"
                />
              </marker>
            </defs>
            
            {/* Path 1: Book to Pillar 1 (Top Left) */}
            <motion.path
              d="M 500 400 Q 400 350, 300 250"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 2 },
                strokeDashoffset: { duration: 2, delay: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-1'))}
            />
            {/* Path 2: Book to Pillar 2 (Middle Left) */}
            <motion.path
              d="M 500 400 Q 400 400, 300 400"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 0.7, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 2.2 },
                strokeDashoffset: { duration: 2, delay: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-2'))}
            />
            {/* Path 3: Book to Pillar 3 (Bottom Left) */}
            <motion.path
              d="M 500 400 Q 400 450, 300 550"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 0.9, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 2.4 },
                strokeDashoffset: { duration: 2, delay: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-3'))}
            />
            {/* Path 4: Book to Pillar 4 (Top Right) */}
            <motion.path
              d="M 700 400 Q 800 350, 900 250"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 1.1, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 2.6 },
                strokeDashoffset: { duration: 2, delay: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-4'))}
            />
            {/* Path 5: Book to Pillar 5 (Middle Right) */}
            <motion.path
              d="M 700 400 Q 800 400, 900 400"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 1.3, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 2.8 },
                strokeDashoffset: { duration: 2, delay: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-5'))}
            />
            {/* Path 6: Book to Pillar 6 (Bottom Right) */}
            <motion.path
              d="M 700 400 Q 800 450, 900 550"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
              fill="none"
              filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { 
                pathLength: 1,
                strokeDasharray: [0, 100],
                strokeDashoffset: [100, 0]
              } : { 
                pathLength: 0,
                strokeDasharray: 0,
                strokeDashoffset: 0
              }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 1.5, ease: "easeInOut" },
                strokeDasharray: { duration: 0, delay: 3 },
                strokeDashoffset: { duration: 2, delay: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
              }}
              onAnimationComplete={() => setUnlockedPillars(prev => new Set(prev).add('pillar-6'))}
            />
          </svg>

          <motion.div 
            className="grid grid-cols-3 gap-8 items-center relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Stack - Chapters 1, 3, 4 */}
            <div className="space-y-6 flex flex-col justify-center">
              {strategicPillars.slice(0, 3).map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  className={`
                    relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 flex flex-col min-h-[180px] h-full
                    ${pillar.featured 
                      ? 'bg-gradient-to-br ' + pillar.color + ' text-white' 
                      : 'bg-[#121212] border-[#FACC15]/20 hover:border-[#FACC15]/50'
                    }
                    ${unlockedPillars.has(pillar.id) ? 'animate-pulse' : ''}
                  `}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02 
                  }}
                  animate={unlockedPillars.has(pillar.id) ? {
                    boxShadow: ['0 0 0 rgba(251,191,36,0)', '0 0 20px rgba(251,191,36,0.3)', '0 0 0 rgba(251,191,36,0)'],
                  } : {}}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Chapter Badge */}
                    <div className="mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        pillar.featured ? 'bg-white/20 text-white' : 'bg-[#FACC15]/20 text-[#FACC15]'
                      }`}>
                        {pillar.chapter}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center mb-3
                      ${pillar.featured 
                        ? 'bg-white/20' 
                        : 'bg-[#FACC15]/10'
                      }
                    `}>
                      <pillar.icon className={`w-5 h-5 ${pillar.featured ? 'text-white' : 'text-[#FACC15]'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className={`font-display font-bold text-sm mb-2 ${pillar.featured ? 'text-white' : 'text-white'}`}>
                        {pillar.headline}
                      </h3>
                      <p className={`text-xs leading-relaxed mb-2 ${pillar.featured ? 'text-white/90' : 'text-[#E5E7EB]'}`}>
                        {pillar.description}
                      </p>
                      
                      {/* Title */}
                      <div className="mt-auto">
                        <p className={`text-xs font-medium ${pillar.featured ? 'text-white/70' : 'text-[#FACC15]'}`}>
                          {pillar.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central 3D Book */}
            <motion.div 
              className="relative flex justify-center items-center"
              variants={itemVariants}
              animate={{
                y: [0, -10, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Invisible Shield - Masking Zone */}
              <div className="absolute inset-0 z-30 pointer-events-none" style={{ width: '200px', height: '250px' }} />
              
              {/* Golden Glow Behind Book */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-3xl opacity-30 blur-2xl scale-125" />
              
              {/* 3D Book Container - 15% Larger with GPU Optimization */}
              <motion.div
                className="relative z-10 transform-gpu will-change-transform"
                style={{ 
                  transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d"
                }}
                whileHover={{
                  transform: "perspective(1000px) rotateY(-10deg) rotateX(2deg) scale(1.05)"
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <img
                  src="/book-master.png"
                  alt="Master Your Voice Book - Cinematic 3D"
                  className="w-72 h-96 object-cover rounded-2xl shadow-2xl border-4 border-amber-400/30"
                />
                
                {/* Book Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Right Stack - Chapters 6, 8, Bonus */}
            <div className="space-y-6 flex flex-col justify-center">
              {strategicPillars.slice(3, 6).map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  className={`
                    relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 flex flex-col min-h-[180px] h-full
                    ${pillar.featured 
                      ? 'bg-gradient-to-br ' + pillar.color + ' text-white' 
                      : 'bg-[#121212] border-[#FACC15]/20 hover:border-[#FACC15]/50'
                    }
                    ${unlockedPillars.has(pillar.id) ? 'animate-pulse' : ''}
                  `}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02 
                  }}
                  animate={unlockedPillars.has(pillar.id) ? {
                    boxShadow: ['0 0 0 rgba(251,191,36,0)', '0 0 20px rgba(251,191,36,0.3)', '0 0 0 rgba(251,191,36,0)'],
                  } : {}}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Chapter Badge */}
                    <div className="mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        pillar.featured ? 'bg-white/20 text-white' : 'bg-[#FACC15]/20 text-[#FACC15]'
                      }`}>
                        {pillar.chapter}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center mb-3
                      ${pillar.featured 
                        ? 'bg-white/20' 
                        : 'bg-[#FACC15]/10'
                      }
                    `}>
                      <pillar.icon className={`w-5 h-5 ${pillar.featured ? 'text-white' : 'text-[#FACC15]'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className={`font-display font-bold text-sm mb-2 ${pillar.featured ? 'text-white' : 'text-white'}`}>
                        {pillar.headline}
                      </h3>
                      <p className={`text-xs leading-relaxed mb-2 ${pillar.featured ? 'text-white/90' : 'text-[#E5E7EB]'}`}>
                        {pillar.description}
                      </p>
                      
                      {/* Title */}
                      <div className="mt-auto">
                        <p className={`text-xs font-medium ${pillar.featured ? 'text-white/70' : 'text-[#FACC15]'}`}>
                          {pillar.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Book as Hero */}
        <div className="lg:hidden">
          {/* Mobile Book Hero */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Mobile Golden Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-3xl opacity-25 blur-xl scale-110" />
            
            <motion.img
              src="/book-master.png"
              alt="Master Your Voice Book - Mobile Hero"
              className="relative z-10 w-48 h-60 object-cover rounded-2xl shadow-2xl border-4 border-amber-400/30"
              animate={{
                y: [0, -8, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Mobile Pillars Stack - Vertical Order 1-6 */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {strategicPillars.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                className={`
                  relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 flex flex-col min-h-[160px] h-full
                  ${pillar.featured 
                    ? 'bg-gradient-to-br ' + pillar.color + ' text-white' 
                    : 'bg-[#121212] border-[#FACC15]/20 hover:border-[#FACC15]/50'
                  }
                `}
                variants={itemVariants}
                whileHover={{ 
                  y: -4,
                  scale: 1.02 
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Chapter Badge */}
                  <div className="mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      pillar.featured ? 'bg-white/20 text-white' : 'bg-[#FACC15]/20 text-[#FACC15]'
                    }`}>
                      {pillar.chapter}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center mb-3
                    ${pillar.featured 
                      ? 'bg-white/20' 
                      : 'bg-[#FACC15]/10'
                    }
                  `}>
                    <pillar.icon className={`w-5 h-5 ${pillar.featured ? 'text-white' : 'text-[#FACC15]'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className={`font-display font-bold text-sm mb-2 ${pillar.featured ? 'text-white' : 'text-white'}`}>
                      {pillar.headline}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-2 ${pillar.featured ? 'text-white/90' : 'text-[#E5E7EB]'}`}>
                      {pillar.description}
                    </p>
                    
                    {/* Title */}
                    <div className="mt-auto">
                      <p className={`text-xs font-medium ${pillar.featured ? 'text-white/70' : 'text-[#FACC15]'}`}>
                        {pillar.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 text-[#FACC15] px-6 py-3 rounded-full font-display font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>6 Strategic Pillars for Communication Mastery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookBreakdown;
