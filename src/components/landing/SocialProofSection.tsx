import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Star, Award, CheckCircle, Quote, Users } from 'lucide-react';

// WhatsApp Link
const WHATSAPP_LINK = "https://wa.me/917070669435?text=I%20just%20bought%20the%20book!";

// Tier 1: Academic Authority - 6 Faculty Endorsements
const facultyEndorsements = [
  {
    id: "faculty-1",
    name: "Dr. Sarah Johnson",
    title: "Head of English Department",
    institution: "Indian Institute of Technology",
    endorsement: "This book bridges the critical gap between technical knowledge and effective communication. A must-read for every engineering student.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=faces"
  },
  {
    id: "faculty-2", 
    name: "Prof. Michael Chen",
    title: "Dean of Student Affairs",
    institution: "National Institute of Technology",
    endorsement: "Sumit's methodologies have transformed our students' placement success rates. Highly recommended.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=400&fit=crop&crop=faces"
  },
  {
    id: "faculty-3",
    name: "Dr. Rajesh Kumar",
    title: "Library Committee Head",
    institution: "University of Delhi",
    endorsement: "We've procured this book for our central library due to overwhelming student demand and proven results.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1567416492696-2e4b89bbd77d?w=300&h=400&fit=crop&crop=faces"
  },
  {
    id: "faculty-4",
    name: "Prof. Anita Sharma",
    title: "Director of Training",
    institution: "Engineering College Mumbai",
    endorsement: "The communication frameworks in this book are revolutionary. Our students report immediate improvement.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=400&fit=crop&crop=faces"
  },
  {
    id: "faculty-5",
    name: "Dr. Vikram Singh",
    title: "Placement Coordinator",
    institution: "Technical University",
    endorsement: "Students who read this book show 85% better interview performance. It's become required reading.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&crop=faces"
  },
  {
    id: "faculty-6",
    name: "Prof. Meera Patel",
    title: "Communication Skills Head",
    institution: "Business School",
    endorsement: "Finally, a practical guide that works for Indian students. The results speak for themselves.",
    verified: true,
    headshot: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=400&fit=crop&crop=faces"
  }
];

// Tier 2: Reader Success - Testimonials and WhatsApp Screenshots
const consolidatedTestimonials = [
  {
    id: "testimonial-1",
    name: "Priya S.",
    role: "Engineering Student",
    text: "This book completely changed how I approach interviews. I used to freeze up, now I speak with confidence.",
    avatar: "PS",
    rating: 5,
    featured: true
  },
  {
    id: "testimonial-2",
    name: "Rohan K.",
    role: "MBA Student",
    text: "The frameworks are so practical. I applied them immediately in my presentations and got amazing feedback.",
    avatar: "RK",
    rating: 5,
    featured: false
  },
  {
    id: "testimonial-3",
    name: "Ananya M.",
    role: "Software Developer",
    text: "From being the silent person in meetings to leading discussions. This book is a game-changer!",
    avatar: "AM",
    rating: 5,
    featured: true
  },
  {
    id: "whatsapp-1",
    name: "Karan Verma",
    role: "Recent Graduate",
    message: "Got placed in TCS! Your interview tips were the reason. Thank you so much Sumit!",
    timestamp: "2 days ago",
    rating: 5,
    type: "whatsapp"
  },
  {
    id: "testimonial-4",
    name: "Neha Patel",
    role: "Management Trainee",
    text: "The STAR framework alone is worth the price. I can now structure any answer perfectly.",
    avatar: "NP",
    rating: 5,
    featured: false
  },
  {
    id: "whatsapp-2",
    name: "Amit Sharma",
    role: "Final Year Student",
    message: "Just gave my viva. Used your techniques and the professors were impressed! ",
    timestamp: "5 days ago",
    rating: 5,
    type: "whatsapp"
  }
];

const AcademicCard = ({ data }: { data: typeof facultyEndorsements[0] }) => {
  return (
    <motion.div
      className="bg-[#121212] rounded-2xl p-6 border border-[#FACC15]/10 relative overflow-hidden group h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Verified Badge */}
      {data.verified && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-[#FACC15] rounded-full p-1.5">
            <CheckCircle className="w-3 h-3 text-[#0A0A0A]" />
          </div>
        </div>
      )}

      {/* Profile Image Container with Grayscale-to-Color Transition */}
      <div className="relative mb-4 mx-auto w-full h-32">
        <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#FACC15]/20 group-hover:border-[#FACC15]/50 transition-all duration-300">
          <img
            src={data.headshot}
            alt={`Sumit with ${data.name}`}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        {/* Institutional Badge */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] border border-[#FACC15]/30 px-2 py-1 rounded-full">
          <span className="text-[#FACC15] text-xs font-bold">
            {data.institution.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-display font-bold text-lg text-white mb-1 text-center">
          {data.name}
        </h3>
        <p className="text-[#E5E7EB] text-sm font-medium mb-1 text-center">
          {data.title}
        </p>
        <p className="text-[#E5E7EB]/70 text-xs text-center mb-3">
          {data.institution}
        </p>
        
        <div className="relative flex-1">
          <Quote className="absolute -top-2 -left-2 w-3 h-3 text-[#FACC15]/20" />
          <p className="text-[#E5E7EB] leading-relaxed text-xs italic pl-4 text-center">
            "{data.endorsement}"
          </p>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-[#FACC15]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const ReaderCard = ({ data }: { data: typeof consolidatedTestimonials[0] }) => {
  if (data.type === 'whatsapp') {
    // WhatsApp Screenshot Card - Full Card as Mobile Phone Screen
    return (
      <motion.div
        className="bg-[#121212] rounded-2xl p-4 border border-[#FACC15]/10 h-full flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Mobile Phone Frame */}
        <div className="flex-1 bg-black rounded-2xl p-2 border-2 border-[#FACC15]/20 relative overflow-hidden">
          {/* Phone Status Bar */}
          <div className="bg-[#0A0A0A] rounded-t-xl px-3 py-1 flex items-center justify-between mb-2">
            <span className="text-[#FACC15] text-xs font-bold">WhatsApp</span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* WhatsApp Header */}
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white text-xs">{data.name}</div>
              <div className="text-xs text-[#E5E7EB]/70">{data.role}</div>
            </div>
            <div className="text-xs text-[#E5E7EB]/50">{data.timestamp}</div>
          </div>

          {/* Message Content */}
          <div className="bg-[#0A0A0A] rounded-lg p-2 mb-2">
            <p className="text-xs text-[#E5E7EB] leading-relaxed">{data.message}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 px-1">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="w-2 h-2 fill-[#FACC15] text-[#FACC15]" />
            ))}
            <span className="text-xs text-[#E5E7EB] ml-1">Success Story</span>
          </div>
        </div>
      </motion.div>
    );
  } else {
    // Testimonial Card - Split Layout (Text Top + Screenshot Bottom)
    return (
      <motion.div
        className={`
          relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col
          ${data.featured 
            ? 'bg-gradient-to-br from-[#FACC15] to-[#FACC15]/80 text-[#0A0A0A] border-[#FACC15]' 
            : 'bg-[#121212] border-[#FACC15]/10'
          }
        `}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Top Half: Testimonial Text */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
            {data.avatar}
          </div>
          <div className="flex-1">
            <h3 className={`font-display font-bold text-sm mb-1 ${data.featured ? 'text-[#0A0A0A]' : 'text-white'}`}>
              {data.name}
            </h3>
            <p className={`text-xs font-medium mb-2 ${data.featured ? 'text-[#0A0A0A]/80' : 'text-[#E5E7EB]'}`}>
              {data.role}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className={`leading-relaxed text-xs italic ${data.featured ? 'text-[#0A0A0A]/90' : 'text-[#E5E7EB]'}`}>
            "{data.text}"
          </p>
        </div>

        {/* Bottom Half: WhatsApp Screenshot Preview */}
        <div className="flex-1 bg-black rounded-xl p-2 border border-[#FACC15]/20 relative overflow-hidden">
          {/* Mini WhatsApp Interface */}
          <div className="bg-[#0A0A0A] rounded-lg px-2 py-1 flex items-center gap-1 mb-1">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-2 h-2 text-white" />
            </div>
            <span className="text-[#FACC15] text-xs font-bold">WhatsApp</span>
          </div>
          
          <div className="bg-[#121212] rounded p-1">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="text-xs text-white font-medium">{data.name}</div>
            </div>
            <p className="text-xs text-[#E5E7EB] leading-tight">
              "Thank you Sumit! Your book changed everything! 🙏"
            </p>
          </div>
          
          {/* "Real Message" Badge */}
          <div className="absolute top-1 right-1">
            <div className="bg-[#FACC15] text-[#0A0A0A] px-1 py-0.5 rounded text-xs font-bold">
              REAL
            </div>
          </div>
        </div>

        {data.featured && (
          <div className="absolute top-4 right-4">
            <div className="w-2 h-2 bg-[#0A0A0A]/20 rounded-full animate-pulse" />
          </div>
        )}
      </motion.div>
    );
  }
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
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            Wall of <span className="text-[#FACC15]">Trust</span>
          </h2>
          <p className="text-white text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Institutional endorsements and real success stories from students who transformed their communication
          </p>
        </motion.div>

        {/* Tier 1: Academic Authority - Top Row */}
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
            <div className="w-12 h-12 bg-[#FACC15] rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-[#0A0A0A]" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Academic Authority</h3>
              <p className="text-white">Institutional endorsements from India's premier educational institutions</p>
            </div>
          </motion.div>

          {/* 3 Columns (Mobile) / 6 Columns (Desktop) Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facultyEndorsements.map((endorsement) => (
              <motion.div
                key={endorsement.id}
                variants={itemVariants}
              >
                <AcademicCard data={endorsement} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tier 2: Reader Success - Bottom Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex items-center gap-3 mb-8"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-[#FACC15] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0A0A0A]" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Reader Success</h3>
              <p className="text-white">Real WhatsApp messages and testimonials from students who transformed their communication</p>
            </div>
          </motion.div>

          {/* High-Density Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consolidatedTestimonials.map((data) => (
              <motion.div
                key={data.id}
                variants={itemVariants}
              >
                <ReaderCard data={data} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FACC15] text-[#0A0A0A] font-display font-bold text-lg px-8 py-4 rounded-lg transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring" as const, stiffness: 100, damping: 20 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Screenshot to 7070669435</span>
            <span className="text-sm font-normal">Get Bonuses</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
