import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, TrendingUp, Brain, VolumeX } from 'lucide-react';

// Cinematic Identity Asset Imports
import sumitBefore from '@/assets/identity/sumit-before.jpeg';
import sumitAfter from '@/assets/identity/sumit-after.jpeg';

// High-Impact SVG Transformation Bridge
const HighImpactBridge = ({ isMobile = false }: { isMobile?: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(pathRef, { once: true, margin: '-100px' });

  const pathData = isMobile 
    ? "M 50 20 Q 20 60 50 100 T 50 180" // Mobile: Vertical S-curve
    : "M 10 80 Q 150 10, 290 80"; // Desktop: Dramatic C-curve

  return (
    <motion.div 
      className={`${isMobile ? 'w-full h-48 flex justify-center items-center' : 'w-full h-full flex justify-center items-center'} will-change-transform`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <svg 
        width={isMobile ? "100" : "300"} 
        height={isMobile ? "200" : "100"} 
        className="w-full h-full drop-shadow-xl"
        viewBox={isMobile ? "0 0 100 200" : "0 0 300 100"}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Aggressive Drop Shadow */}
        <defs>
          <filter id="heavyShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.4"/>
          </filter>
          {/* Arrow Marker Definition */}
          <marker
            id="aggressiveArrowhead"
            markerWidth="12"
            markerHeight="12"
            refX="9"
            refY="6"
            orient="auto"
          >
            <polygon
              points="0 0, 12 6, 0 12"
              fill="white"
              filter="url(#heavyShadow)"
            />
          </marker>
        </defs>
        
        {/* Heavy-Duty Vector Path */}
        <motion.path
          ref={pathRef}
          d={pathData}
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeDasharray="15 10"
          strokeLinecap="round"
          markerEnd="url(#aggressiveArrowhead)"
          filter="url(#heavyShadow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

const IdentityShift = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  } as const;

  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            The <span className="text-[#FACC15]">Identity Shift</span>
          </h2>
          <p className="text-[#E5E7EB] text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            From silent thinker to confident communicator — the transformation framework that changed everything
          </p>
        </motion.div>

        {/* Static-Layered Architecture - Desktop */}
        <div className="hidden lg:block">
          <motion.div 
            className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Column: The Silent Thinker (Before) */}
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, x: -30 }}
            >
              <div className="bg-[#121212]/30 border border-white/5 rounded-2xl p-8">
                {/* Real Before Image */}
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden">
                    <img
                      src={sumitBefore}
                      alt="Sumit Before - The Silent Thinker"
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                    />
                  </div>
                  {/* Before Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-4 text-white tracking-wide">
                  The Boy from Gomia, Jharkhand
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Knowledge-rich but voice-poor; ideas trapped inside.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <VolumeX className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Mind went blank under the slightest pressure.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Fear of speaking to people.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Column: High-Impact Transformation Bridge */}
            <div className="w-40 h-full flex justify-center items-center">
              <HighImpactBridge isMobile={false} />
            </div>

            {/* Right Column: The Confident Communicator (After) */}
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, x: 30 }}
            >
              <div className="bg-[#121212]/30 border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.2)] rounded-2xl p-8">
                {/* Real After Image */}
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative z-10">
                    <img
                      src={sumitAfter}
                      alt="Sumit After - The Confident Communicator"
                      className="w-full h-full object-cover filter saturate-125 brightness-110 relative"
                    />
                  </div>
                  {/* After Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-[#FACC15] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-4 text-[#FACC15] tracking-wide">
                  The National Speaker & Author
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Traveled 40 cities across 7 states as a lead trainer.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Built and led a 150-member leadership team.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Published the book that's changing lives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Guard - Centered Below S-Curve */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <p className="font-medium italic text-zinc-400 text-sm max-w-lg mx-auto">
              Confidence is not discovered.<br />
              It is built—one framework at a time.
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout - Flex Column */}
        <div className="lg:hidden">
          <motion.div 
            className="flex flex-col gap-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Before Card */}
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
            >
              <div className="bg-[#121212]/30 border border-white/5 rounded-2xl p-8">
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden">
                    <img
                      src={sumitBefore}
                      alt="Sumit Before - The Silent Thinker"
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      BEFORE
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 text-white tracking-wide">
                  The Boy from Gomia, Jharkhand
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Knowledge-rich but voice-poor; ideas trapped inside.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <VolumeX className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Mind went blank under the slightest pressure.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Fear of speaking to people.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile High-Impact Bridge */}
            <div className="w-full h-48 flex justify-center items-center">
              <HighImpactBridge isMobile={true} />
            </div>

            {/* After Card */}
            <motion.div
              className="relative"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
            >
              <div className="bg-[#121212]/30 border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.2)] rounded-2xl p-8">
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative z-10">
                    <img
                      src={sumitAfter}
                      alt="Sumit After - The Confident Communicator"
                      className="w-full h-full object-cover filter saturate-125 brightness-110 relative"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-[#FACC15] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-bold">
                      AFTER
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 text-[#FACC15] tracking-wide">
                  The National Speaker & Author
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Traveled 40 cities across 7 states as a lead trainer.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Built and led a 150-member leadership team.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                    <p className="text-[#E5E7EB] leading-relaxed">
                      Published the book that's changing lives.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Text - Below Cards */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <p className="font-medium italic text-zinc-400 text-sm max-w-lg mx-auto">
              Confidence is not discovered.<br />
              It is built—one framework at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdentityShift;
