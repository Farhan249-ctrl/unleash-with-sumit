import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MapPin, Users, TrendingUp, Brain, VolumeX } from 'lucide-react';

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

        {/* 2-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column: The Silent Thinker (Before) */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-[#121212] rounded-2xl p-8 border border-[#FACC15]/20">
              {/* Grayscale Image Placeholder */}
              <div className="relative mb-6">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <VolumeX className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">Silent Thinker</p>
                    </div>
                  </div>
                </div>
                {/* Before Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BEFORE
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
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
                    Dismissed by others as having 'no fire' or ambition.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Confident Communicator (After) */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-[#121212] rounded-2xl p-8 border border-[#FACC15]/20">
              {/* Full-Color Image Placeholder */}
              <div className="relative mb-6">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#FACC15]/20 to-[#FACC15]/5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-[#0A0A0A]" />
                      </div>
                      <p className="text-[#FACC15] text-sm font-bold">National Speaker</p>
                    </div>
                  </div>
                </div>
                {/* After Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#FACC15] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-bold">
                    AFTER
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 text-[#FACC15]">
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
                    Generated 20 Lakh+ turnover through structured articulation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Bridge UI: Yellow Arrow */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Arrow */}
              <div className="bg-[#FACC15] p-3 rounded-full shadow-lg shadow-[#FACC15]/30">
                <ArrowRight className="w-8 h-8 text-[#0A0A0A]" />
              </div>
              
              {/* Caption */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap">
                <p className="text-[#FACC15] text-sm font-bold text-center max-w-xs">
                  Confidence is not discovered.<br />
                  It is built—one framework at a time.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Bridge UI */}
        <motion.div 
          className="lg:hidden mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-[#FACC15] p-2 rounded-full">
              <ArrowRight className="w-6 h-6 text-[#0A0A0A]" />
            </div>
          </div>
          <p className="text-[#FACC15] text-sm font-bold">
            Confidence is not discovered.<br />
            It is built—one framework at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentityShift;
