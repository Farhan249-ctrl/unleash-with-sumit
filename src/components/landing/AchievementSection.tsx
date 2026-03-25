import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, GraduationCap, MapPin, TrendingUp, Award, Target } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    title: "600+ Participants",
    subtitle: "AI Hackathon",
    description: "Led cutting-edge artificial intelligence competition",
    featured: true,
    color: "bg-[#0A0A0A] border-[#FACC15] text-[#FFFFFF]"
  },
  {
    icon: Target,
    title: "180+ Engineering Students",
    subtitle: "GD & Interview Training",
    description: "Transformed communication skills for technical interviews",
    featured: false,
    color: "bg-[#0A0A0A] border-[#FACC15] text-[#FFFFFF]"
  },
  {
    icon: MapPin,
    title: "40+ Cities",
    subtitle: "Across 7 States",
    description: "Traveled nationwide to deliver workshops",
    featured: false,
    color: "bg-[#0A0A0A] border-[#FACC15] text-[#FFFFFF]"
  },
  {
    icon: TrendingUp,
    title: "20 Lakh+ Turnover",
    subtitle: "Business Generated",
    description: "Created substantial economic impact through communication training",
    featured: false,
    color: "bg-[#0A0A0A] border-[#FACC15] text-[#FFFFFF]"
  },
  {
    icon: Award,
    title: "National Convention Host",
    subtitle: "Chennai",
    description: "Led 300+ audience including founders and co-founders",
    featured: true,
    color: "bg-[#0A0A0A] border-[#FACC15] text-[#FFFFFF]"
  },
  {
    icon: Award,
    number: "15+",
    label: "Industry recognitions",
    description: "Awarded for excellence in education and innovation",
    featured: false,
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Target,
    number: "95%",
    label: "Success rate",
    description: "Students achieving their communication goals",
    featured: false,
    color: "from-indigo-500 to-purple-500"
  }
];

const AchievementSection = () => {
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

  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 25,
        delay: 0.3,
      },
    },
  } as const;

  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-[#FFFFFF]">
            Numbers That <span className="text-[#FACC15]">Matter</span>
          </h2>
          <p className="text-[#EDEDED] text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Real impact metrics from Sumit's journey as a communication expert and entrepreneur
          </p>
        </motion.div>

        {/* Achievement Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={`${achievement.title}-${i}`}
              className={`
                relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300
                ${achievement.featured 
                  ? 'lg:col-span-2 lg:row-span-2' 
                  : ''
                }
                ${achievement.color}
              `}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 100, damping: 20 }
              }}
            >
              <div className="relative z-10">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${achievement.featured 
                    ? 'bg-[#FACC15]' 
                    : 'bg-[#FACC15]/20'
                  }
                `}>
                  <achievement.icon className={`w-6 h-6 ${achievement.featured ? 'text-[#0A0A0A]' : 'text-[#FACC15]'}`} />
                </div>
                <h3 className={`font-display font-bold text-lg mb-2 ${achievement.featured ? 'text-[#FFFFFF]' : 'text-[#FFFFFF]'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm font-medium mb-1 ${achievement.featured ? 'text-[#FACC15]' : 'text-[#EDEDED]'}`}>
                  {achievement.subtitle}
                </p>
                <p className={`text-xs leading-relaxed ${achievement.featured ? 'text-[#EDEDED]' : 'text-[#EDEDED]'}`}>
                  {achievement.description}
                </p>
              </div>
              
              {achievement.featured && (
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
                </div>
              )}
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
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-6 py-3 rounded-full font-display font-semibold">
            <Award className="w-4 h-4" />
            <span>Proven Track Record of Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
