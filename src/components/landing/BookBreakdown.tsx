import { BookOpen, MessageCircle, Users, Mic, Lightbulb, Shield, Sparkles, Target, Zap, Star, Quote, Award, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const chapters = [
  { 
    icon: Shield, 
    title: "Conquer Stage Fear", 
    desc: "Proven techniques to eliminate nervousness before you speak",
    featured: true,
    color: "from-red-500 to-orange-500"
  },
  { 
    icon: MessageCircle, 
    title: "The STAR Framework", 
    desc: "Structure any answer in 30 seconds flat — interviews, vivas, anywhere",
    featured: false,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Lightbulb, 
    title: "Think on Your Feet", 
    desc: "Stop blanking out. Train your brain to respond instantly",
    featured: false,
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Users, 
    title: "Master Group Dynamics", 
    desc: "Lead meetings and discussions with confidence and authority",
    featured: false,
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Mic, 
    title: "Voice Power", 
    desc: "Develop a commanding presence that demands attention",
    featured: false,
    color: "from-yellow-500 to-amber-500"
  },
  { 
    icon: BookOpen, 
    title: "Daily Practice Rituals", 
    desc: "5-minute daily habits that transform your communication in 30 days",
    featured: true,
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Target,
    title: "Interview Success",
    desc: "Turn interviews into conversations where you naturally shine",
    featured: false,
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Confidence Boosters",
    desc: "Instant techniques to feel confident in any situation",
    featured: true,
    color: "from-orange-500 to-red-500"
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
    <section ref={ref} className="py-24 px-4 bg-rich-black relative overflow-hidden">
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
            What You'll Learn Inside
          </h2>
          <p className="text-soft-gray text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Actionable chapters designed for real-world impact — not textbook theory. Each chapter builds on the previous one for exponential growth.
          </p>
        </motion.div>

        {/* Bento Box Grid - 6C Framework with Strict Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.title}
              className={`
                relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 flex flex-col h-full
                ${chapter.featured 
                  ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-br ' + chapter.color + ' text-white' 
                  : 'bg-rich-black border-gray-200 hover:border-brand-yellow/50'
                }
              `}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 100, damping: 20 }
              }}
            >
              {/* 6C Framework: Clear Icon */}
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-4
                ${chapter.featured ? 'bg-white/20' : 'bg-brand-yellow/10'}
              `}>
                <chapter.icon className={`w-6 h-6 ${chapter.featured ? 'text-white' : 'text-brand-yellow'}`} />
              </div>
              
              {/* 6C Framework: Bold Title */}
              <h3 className={`
                font-display font-bold mb-3
                ${chapter.featured ? 'text-2xl' : 'text-lg text-white'}
              `}>
                {chapter.title}
              </h3>
              
              {/* 6C Framework: 2 Lines High-Impact Description */}
              <p className={`
                leading-relaxed text-sm
                ${chapter.featured ? 'text-white/90' : 'text-soft-gray'}
              `}>
                {chapter.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-6 py-3 rounded-full font-display font-semibold">
            <Target className="w-4 h-4" />
            <span>8 Action-Packed Chapters + 2 Bonus Sections</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookBreakdown;
