import sumitAuthor from "@/assets/sumit-author.jpeg";
import sumitStage from "@/assets/sumit-stage.jpeg";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, Sparkles } from 'lucide-react';

const AuthorSection = () => {
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

  const credentials = [
    { icon: Users, text: "Trained 600+ Students" },
    { icon: Award, text: "15+ Industry Recognitions" },
    { icon: Target, text: "95% Success Rate" },
    { icon: Sparkles, text: "National Speaker" },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-br from-brand-black via-brand-dark to-brand-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            Meet <span className="text-gradient-brand">Sumit</span>
          </h2>
          <p className="text-white/80 text-fluid-lg max-w-2xl mx-auto leading-relaxed">
            From stage fright to national recognition — a journey of transformation that inspired thousands
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Author Image */}
          <motion.div 
            className="flex-shrink-0 relative"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Golden glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-yellow to-brand-yellow-glow rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              
              <motion.img
                src={sumitAuthor}
                alt="Sumit — Author & Communication Coach"
                loading="lazy"
                width={300}
                height={300}
                className="w-64 lg:w-80 h-64 lg:h-80 rounded-2xl object-cover border-4 border-brand-yellow shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
              />
              
              {/* Credentials overlay */}
              <div className="absolute -bottom-4 left-4 right-4 bg-brand-black/90 backdrop-blur-md rounded-xl p-4 border border-brand-yellow/20">
                <div className="grid grid-cols-2 gap-3">
                  {credentials.slice(0, 4).map((cred, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <cred.icon className="w-4 h-4 text-brand-yellow" />
                      <span className="text-xs text-white font-medium">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Author Content */}
          <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="font-display text-2xl font-bold text-brand-yellow mb-4">
                From Silent Student to National Speaker
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-white/90 text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              Sumit wasn't born a confident speaker. He was the kid who knew every answer in class 
              but could never raise his hand. Interviews terrified him. Presentations made him sick.
            </motion.p>
            
            <motion.p 
              className="text-white/90 text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              Then he decided to fix it — not with motivation, but with <strong className="text-brand-yellow font-bold">systems</strong>. 
              Today, he's trained <strong className="text-brand-yellow font-bold">thousands of students</strong> to find their voice, 
              spoken at national events, and built the <strong className="text-brand-yellow font-bold">Unleash with Sumit</strong> brand 
              to help people like you break through.
            </motion.p>
            
            <motion.div 
              className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-4 rounded-r-xl"
              variants={itemVariants}
            >
              <p className="text-brand-yellow font-display font-bold text-lg italic">
                "If I could do it, so can you. This book is your starting point."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Impact Journey Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-fluid-2xl font-bold text-white mb-4">
              Impact Journey
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              From local workshops to national recognition — touching lives across the country
            </p>
          </div>
          
          <motion.div 
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
          >
            <img
              src={sumitStage}
              alt="Sumit speaking on stage at national event"
              loading="lazy"
              width={800}
              height={400}
              className="w-full h-64 lg:h-96 object-cover"
            />
            
            {/* Overlay with stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { number: "40+", label: "Cities" },
                    { number: "7", label: "States" },
                    { number: "600+", label: "Students" },
                    { number: "20L+", label: "Turnover" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-2xl font-bold text-brand-yellow">
                        {stat.number}
                      </div>
                      <div className="text-xs text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
