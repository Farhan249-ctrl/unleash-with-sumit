import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Star, Award, Building, CheckCircle, Quote } from 'lucide-react';

// Consolidated testimonials from TestimonialsSection.tsx
const consolidatedTestimonials = [
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
  }
];

const WhatsAppScreenshots = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "MBA Student",
    message: "Sumit sir, your STAR framework helped me clear 3 interviews back to back! Got placed at Deloitte 🎉",
    timestamp: "2 days ago",
    rating: 5
  },
  {
    id: 2,
    name: "Rohan Kumar",
    role: "Engineering Final Year",
    message: "The confidence techniques actually work! Presented in front of 200 people today without freezing 🚀",
    timestamp: "1 week ago",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Mehta",
    role: "Working Professional",
    message: "My manager noticed the change immediately. Thank you for the practical approach!",
    timestamp: "3 days ago",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Thakur",
    role: "UPSC Aspirant",
    message: "Interview prep chapter is gold. Cleared my mains interview with confidence 🙏",
    timestamp: "5 days ago",
    rating: 5
  },
  {
    id: 5,
    name: "Neha Patel",
    role: "Product Manager",
    message: "Finally found a communication guide that doesn't give generic advice. Real frameworks!",
    timestamp: "1 week ago",
    rating: 5
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Sales Executive",
    message: "Sales numbers doubled in 2 months. The confidence techniques are pure gold 💪",
    timestamp: "4 days ago",
    rating: 5
  }
];

const facultyEndorsements = [
  {
    name: "Dr. Sarah Johnson",
    title: "Head of English Department",
    institution: "Indian Institute of Technology",
    endorsement: "This book bridges the critical gap between technical knowledge and effective communication. A must-read for every engineering student.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1494790108757-9c3976e5d5e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Prof. Michael Chen",
    title: "Dean of Student Affairs",
    institution: "National Institute of Technology",
    endorsement: "Sumit's methodologies have transformed our students' placement success rates. Highly recommended.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Rajesh Kumar",
    title: "Library Committee Head",
    institution: "University of Delhi",
    endorsement: "We've procured this book for our central library due to overwhelming student demand and proven results.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const WhatsAppCard = ({ data }: { data: typeof WhatsAppScreenshots[0] }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* WhatsApp-style header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-sm">{data.name}</div>
          <div className="text-xs text-gray-500">{data.role}</div>
        </div>
        <div className="text-xs text-gray-400">{data.timestamp}</div>
      </div>

      {/* Message content */}
      <div className="bg-gray-50 rounded-xl p-3 mb-3">
        <p className="text-sm text-gray-800 leading-relaxed">{data.message}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-xs text-gray-500 ml-1">Success Story</span>
      </div>
    </motion.div>
  );
};

const FacultyCard = ({ data }: { data: typeof facultyEndorsements[0] }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-brand-yellow to-brand-yellow-glow rounded-2xl p-6 text-brand-black relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Professional Headshot */}
          <div className="flex-shrink-0">
            <img
              src={data.headshot}
              alt={data.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-brand-black/20"
            />
            {/* University Badge */}
            <div className="absolute -bottom-1 -right-1 bg-brand-black text-brand-yellow text-xs px-2 py-1 rounded-full font-bold">
              {data.institution.split(' ')[0]}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-display font-bold text-lg mb-1">{data.name}</h3>
            <p className="text-brand-black/80 font-medium text-sm mb-1">{data.title}</p>
            <p className="text-brand-black/70 text-xs">{data.institution}</p>
            {data.verified && (
              <div className="flex items-center gap-1 mt-2">
                <CheckCircle className="w-3 h-3" />
                <span className="text-xs font-medium">Verified Endorsement</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 w-4 h-4 text-brand-black/20" />
          <p className="text-brand-black/90 leading-relaxed text-sm italic pl-4">
            "{data.endorsement}"
          </p>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-brand-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-brand-black">
          <Award className="w-8 h-8 mx-auto mb-2" />
          <div className="text-sm font-medium">Institutional Approval</div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ data }: { data: typeof consolidatedTestimonials[0] }) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-300
        ${data.featured 
          ? 'bg-gradient-to-br from-brand-yellow to-brand-yellow-glow text-brand-black' 
          : 'bg-white border-gray-200 hover:border-brand-yellow/50'
        }
      `}
      style={{ aspectRatio: '16/9' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring" as const, stiffness: 100, damping: 20 }
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-brand-black font-bold">
          {data.avatar}
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg mb-1 text-gray-900">
            {data.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium mb-2">
            {data.role}
          </p>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-sm italic">
            "{data.text}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialProofSection = () => {
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
    <section ref={ref} className="py-24 px-4 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            Wall of Trust
          </h2>
          <p className="text-[#EDEDED] text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Real success stories from students and institutional endorsements from India's premier educational institutions
          </p>
        </motion.div>

        {/* Top Tier: Academic Authority */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-3 mb-8"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-brand-black" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Endorsed by Academia</h3>
              <p className="text-[#EDEDED]">Institutional recognition from India's premier educational institutions</p>
            </div>
          </motion.div>

          {/* Premium Horizontal Row for Faculty Endorsements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facultyEndorsements.map((endorsement, i) => (
              <motion.div
                key={endorsement.name}
                variants={itemVariants}
                custom={i}
              >
                <FacultyCard data={endorsement} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Tier: Reader Success - Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-3 mb-8"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-brand-black" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Reader Success</h3>
              <p className="text-[#EDEDED]">Real WhatsApp messages and testimonials from students who transformed their communication</p>
            </div>
          </motion.div>

          {/* Bento Grid for Testimonials and WhatsApp Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Consolidated Testimonials */}
            {consolidatedTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                custom={i}
              >
                <TestimonialCard data={testimonial} />
              </motion.div>
            ))}
            
            {/* WhatsApp Screenshots */}
            {WhatsAppScreenshots.map((data) => (
              <WhatsAppCard key={data.id} data={data} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
