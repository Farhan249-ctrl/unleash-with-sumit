import { Star, Quote } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Priya S.",
    role: "MBA Student",
    text: "I used to freeze in every GD round. After reading this book, I cleared 3 interviews back to back. This book changed my life.",
    avatar: "PS",
    featured: true,
    rating: 5,
  },
  {
    name: "Rohan K.",
    role: "Engineering Final Year",
    text: "I always thought I was an introvert who can't speak. Sumit's frameworks proved me wrong. Now I volunteer to present.",
    avatar: "RK",
    featured: false,
    rating: 5,
  },
  {
    name: "Ananya M.",
    role: "Working Professional",
    text: "My manager noticed the change in my first meeting after reading this. Direct, clear, confident. Worth every rupee.",
    avatar: "AM",
    featured: true,
    rating: 5,
  },
  {
    name: "Vikram T.",
    role: "UPSC Aspirant",
    text: "The interview prep chapter alone is worth 10x the price. I wish I had this book 2 years ago.",
    avatar: "VT",
    featured: false,
    rating: 5,
  },
  {
    name: "Neha P.",
    role: "Product Manager",
    text: "Finally, a practical guide that doesn't give generic advice. The frameworks are actionable and the results are immediate.",
    avatar: "NP",
    featured: false,
    rating: 5,
  },
  {
    name: "Arjun R.",
    role: "Sales Executive",
    text: "My sales numbers doubled in 2 months. The confidence techniques are pure gold. Every professional needs this book.",
    avatar: "AR",
    featured: true,
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
        delay: 0.3,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 px-4 section-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4">
            Real People. <span className="text-gradient-brand">Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-fluid-lg max-w-2xl mx-auto leading-relaxed">
            Don't take our word for it — hear from readers who transformed their communication and careers
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { number: "2,847+", label: "Happy Readers" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "94%", label: "Success Rate" },
            { number: "3.2x", label: "Confidence Boost" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={itemVariants}
            >
              <div className="font-display text-fluid-3xl font-bold text-brand-yellow">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Asymmetric Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className={`
                relative group
                ${testimonial.featured 
                  ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-brand-yellow to-brand-yellow-glow text-brand-black' 
                  : 'bg-card border border-border hover:border-brand-yellow/50'
                }
                rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300
              `}
              variants={testimonial.featured ? featuredVariants : itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Quote Icon */}
              <div className={`
                absolute top-4 right-4
                ${testimonial.featured ? 'text-brand-black/20' : 'text-brand-yellow/20'}
              `}>
                <Quote className="w-8 h-8" />
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm
                  ${testimonial.featured 
                    ? 'bg-brand-black/20 text-brand-black' 
                    : 'bg-brand-yellow/10 text-brand-yellow'
                  }
                `}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className={`font-display font-bold ${testimonial.featured ? 'text-brand-black' : 'text-foreground'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${testimonial.featured ? 'text-brand-black/70' : 'text-muted-foreground'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star 
                    key={j} 
                    className={`w-4 h-4 ${
                      testimonial.featured 
                        ? 'fill-brand-black text-brand-black' 
                        : 'fill-brand-yellow text-brand-yellow'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`
                leading-relaxed
                ${testimonial.featured 
                  ? 'text-brand-black/90 text-lg' 
                  : 'text-foreground/80'
                }
              `}>
                "{testimonial.text}"
              </p>

              {/* Hover reveal for featured testimonials */}
              {testimonial.featured && (
                <div className="absolute inset-0 bg-brand-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-brand-black">
                    <div className="font-display text-2xl font-bold mb-2">Featured Story</div>
                    <div className="text-sm">Click to read full interview</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-muted-foreground text-fluid-base mb-4">
            Join thousands who've transformed their communication
          </p>
          <div className="inline-flex items-center gap-2 text-brand-yellow font-display font-semibold">
            <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            <span>Limited time offer: ₹349 + exclusive bonuses</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
