import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, GraduationCap, MapPin, TrendingUp, Award, Target } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: "600+",
    label: "Participants at AI Hackathon",
    description: "Mentored aspiring innovators through intensive AI challenges",
    featured: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    number: "180+",
    label: "Engineering Students trained",
    description: "Transformed technical communication skills for career success",
    featured: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    number: "40+",
    label: "Cities/7 States visited",
    description: "Delivered impactful workshops across the nation",
    featured: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    number: "20 Lakh+",
    label: "Turnover generated",
    description: "Created measurable economic impact through training programs",
    featured: true,
    color: "from-orange-500 to-red-500"
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
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-brand-black via-brand-dark to-brand-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-yellow/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-brand-yellow/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            Numbers That Matter
          </h2>
          <p className="text-white/80 text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Real impact measured in lives transformed and careers launched. Every number represents a story of growth and achievement.
          </p>
        </motion.div>

        {/* Asymmetric Bento Box Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.label}
              className={`
                relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 group
                ${achievement.featured 
                  ? achievement.label.includes("600+") 
                    ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-br ' + achievement.color + ' text-white' 
                    : 'lg:col-span-2 bg-gradient-to-br ' + achievement.color + ' text-white'
                  : 'bg-brand-dark/50 border-brand-yellow/20 hover:border-brand-yellow/50 hover:shadow-lg'
                }
              `}
              variants={achievement.featured ? featuredVariants : itemVariants}
              whileHover={{ 
                y: -4,
                scale: achievement.featured ? 1.02 : 1.01 
              }}
            >
              {/* Background gradient for featured cards */}
              {achievement.featured && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              )}
              
              <div className="relative z-10">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${achievement.featured 
                    ? 'bg-white/20' 
                    : 'bg-brand-yellow/10'
                  }
                `}>
                  <achievement.icon className={`w-6 h-6 ${achievement.featured ? 'text-white' : 'text-brand-yellow'}`} />
                </div>
                
                <div className="mb-2">
                  <div className={`font-display font-bold ${achievement.featured ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'} mb-1`}>
                    {achievement.number}
                  </div>
                  <h3 className={`font-display font-bold ${achievement.featured ? 'text-lg' : 'text-base'} text-white`}>
                    {achievement.label}
                  </h3>
                </div>
                
                <p className={`
                  leading-relaxed text-sm
                  ${achievement.featured ? 'text-white/90' : 'text-white/70'}
                `}>
                  {achievement.description}
                </p>
              </div>

              {/* Hover overlay for featured cards */}
              {achievement.featured && (
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium">Verified Impact</div>
                  </div>
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
