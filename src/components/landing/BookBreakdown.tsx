import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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

        {/* Strategic Pillars Grid - 6 Pillars with Symmetric Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {strategicPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              className={`
                relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 flex flex-col min-h-[250px] h-full
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
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${pillar.featured 
                    ? 'bg-white/20' 
                    : 'bg-[#FACC15]/10'
                  }
                `}>
                  <pillar.icon className={`w-6 h-6 ${pillar.featured ? 'text-white' : 'text-[#FACC15]'}`} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className={`font-display font-bold text-lg mb-2 ${pillar.featured ? 'text-white' : 'text-white'}`}>
                    {pillar.headline}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-3 ${pillar.featured ? 'text-white/90' : 'text-[#E5E7EB]'}`}>
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

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

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
