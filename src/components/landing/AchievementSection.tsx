import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, GraduationCap, MapPin, TrendingUp, Award, Target } from 'lucide-react';

// Counter component for animated numbers
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const targetValue = parseInt(value.replace(/\D/g, ''));
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
      
      // Animate counter
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);
    }
  }, [isInView, controls, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {count}{suffix}
    </motion.div>
  );
};

const achievements = [
  {
    icon: Users,
    title: "600+",
    subtitle: "Participants",
    description: "AI Hackathon: Led cutting-edge artificial intelligence competition",
    featured: true,
    position: "top-left"
  },
  {
    icon: Target,
    title: "180+",
    subtitle: "Engineering Students",
    description: "GD & Interview Training: Transformed communication skills for technical interviews",
    featured: false,
    position: "top-right"
  },
  {
    icon: MapPin,
    title: "40+",
    subtitle: "Cities",
    description: "Across 7 States: Traveled nationwide to deliver workshops",
    featured: false,
    position: "middle-left"
  },
  {
    icon: TrendingUp,
    title: "20L+",
    subtitle: "Turnover",
    description: "Business Generated: Created substantial economic impact through communication training",
    featured: false,
    position: "middle-right"
  },
  {
    icon: Award,
    title: "300",
    subtitle: "Founders & Co-Founders",
    description: "National Convention Host: Led audience including founders and co-founders",
    featured: true,
    position: "bottom-left"
  },
  {
    icon: GraduationCap,
    title: "95%",
    subtitle: "Success Rate",
    description: "Goals Achieved: Students achieving their communication goals",
    featured: false,
    position: "bottom-right"
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
          <p className="text-[#E5E7EB] text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Real impact metrics from Sumit's journey as a communication expert and entrepreneur
          </p>
        </motion.div>

        {/* Elite Bento Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
          {achievements.map((achievement, index) => {
            const gridClasses = {
              'top-left': 'lg:col-span-2 lg:row-span-2',
              'top-right': 'lg:col-span-1 lg:row-span-1',
              'middle-left': 'lg:col-span-1 lg:row-span-1',
              'middle-right': 'lg:col-span-1 lg:row-span-1',
              'bottom-left': 'lg:col-span-2 lg:row-span-1',
              'bottom-right': 'lg:col-span-1 lg:row-span-1'
            };

            return (
              <motion.div
                key={achievement.position}
                className={`
                  ${gridClasses[achievement.position as keyof typeof gridClasses]}
                  relative bg-[#121212]/50 backdrop-blur-xl border border-[#FACC15]/10 
                  rounded-2xl p-6 overflow-hidden cursor-pointer
                  transition-all duration-300 hover:border-[#FACC15]/50
                  flex flex-col justify-between h-full
                `}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring" as const, stiffness: 100, damping: 20 }
                }}
              >
                {/* Radial Gradient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.1)_0%,_transparent_70%)] rounded-2xl" />
                
                {/* Premium Precision Corner Dot - Present on Every Card */}
                <div className="absolute top-4 right-4">
                  <div className="w-1 h-1 bg-[#FACC15] rounded-full" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Icon Section */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-[#FACC15]/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                      <achievement.icon className="w-6 h-6 text-[#FACC15]" />
                    </motion.div>
                    {achievement.featured && (
                      <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-display font-black text-3xl lg:text-4xl text-[#FACC15] mb-2">
                      <AnimatedCounter value={achievement.title} />
                    </h3>
                    <p className="font-display font-bold text-lg text-[#FFFFFF] mb-1">
                      {achievement.subtitle}
                    </p>
                    <p className="text-[#E5E7EB]/50 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 text-[#FACC15] px-6 py-3 rounded-full font-display font-semibold">
            <Award className="w-4 h-4" />
            <span>Proven Track Record of Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
