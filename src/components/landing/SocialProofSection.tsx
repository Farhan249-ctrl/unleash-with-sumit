import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Star, Award, CheckCircle, Quote, Users } from 'lucide-react';

// Zero-Failure Local Faculty Asset Imports
import fac1 from '@/assets/faculty/fac-1-aravind.jpeg';
import fac2 from '@/assets/faculty/fac-2-placement.jpeg';
import fac3 from '@/assets/faculty/fac-3-suthendran.jpeg';
import fac4 from '@/assets/faculty/fac-4-brintha.jpeg';
import fac5 from '@/assets/faculty/fac-5-shubathra.jpeg';
import fac6 from '@/assets/faculty/fac-6-librarian.jpeg';

// Hard-Link WhatsApp Testimonial Asset Imports
import wa1 from '@/assets/testimonials/wa-1.jpeg';
import wa2 from '@/assets/testimonials/wa-2.jpeg';
import wa3 from '@/assets/testimonials/wa-3.jpeg';
import wa4 from '@/assets/testimonials/wa-4.jpeg';

// WhatsApp Link
const WHATSAPP_LINK = "https://wa.me/917070669435?text=I%20just%20bought%20the%20book!";

// Tier 1: Academic Authority - 6 Faculty Endorsements
const facultyEndorsements = [
  {
    id: "faculty-1",
    name: "Aravind Sir",
    title: "HOD English Department, KLU",
    institution: "KLU",
    endorsement: "I'm happy to see your growth and how inputs have built confidence within you. Definitely your book will be a testimony of learned experiences and an eyeopener for many. All the very best.",
    verified: true,
    headshot: fac1
  },
  {
    id: "faculty-2", 
    name: "Director of Corp. Relations",
    title: "Placement Head",
    institution: "KLU",
    endorsement: "Communication is the biggest problem in placements; students are not aware. I think this book can really help those students. I will read it and share my feedback.",
    verified: true,
    headshot: fac2
  },
  {
    id: "faculty-3",
    name: "Suthendran Sir",
    title: "Dir. Int. Relations",
    institution: "KLU",
    endorsement: "The book contents are good and readable. Review given before book launch.",
    verified: true,
    headshot: fac3
  },
  {
    id: "faculty-4",
    name: "Dr. Brintha Mam",
    title: "HOD IT",
    institution: "KLU",
    endorsement: "This is a real problem and this book looks unique.",
    verified: true,
    headshot: fac4
  },
  {
    id: "faculty-5",
    name: "Shubathra Mam",
    title: "Head ACIC",
    institution: "KLU",
    endorsement: "This book will really help my son to improve his Communication and it's unique.",
    verified: true,
    headshot: fac5
  },
  {
    id: "faculty-6",
    name: "Gnanasekaran Sir",
    title: "Librarian",
    institution: "KLU",
    endorsement: "Never seen this kind of book in my past 15-20 years in library. Very unique and action oriented. The best thing is it not only talks about English; it gives structure and frameworks.",
    verified: true,
    headshot: fac6
  }
];

// Tier 2: Reader Success - Testimonials and WhatsApp Screenshots
const consolidatedTestimonials = [
  {
    id: "whatsapp-1",
    name: "Founding Reader",
    role: "Success Story",
    message: "I got the missing skill nobody teaches—the structure to communicate clearly. The recording rituals forced me to implement what I learned.",
    timestamp: "2 days ago",
    rating: 5,
    type: "whatsapp",
    screenshot: wa1
  },
  {
    id: "whatsapp-2",
    name: "Founding Reader",
    role: "Success Story",
    message: "For the first time, I felt confident and could control the pause. This book gave me the architecture of my voice.",
    timestamp: "5 days ago",
    rating: 5,
    type: "whatsapp",
    screenshot: wa2
  },
  {
    id: "whatsapp-3",
    name: "Founding Reader",
    role: "Success Story",
    message: "I was able to talk what I was thinking in my brain. It became easy to express my thoughts and the daily tasks were very useful.",
    timestamp: "1 week ago",
    rating: 5,
    type: "whatsapp",
    screenshot: wa3
  },
  {
    id: "whatsapp-4",
    name: "Founding Reader",
    role: "Success Story",
    message: "My fear in speaking to people is gone. The 30-Second Reset practice literal made me feel comfortable.",
    timestamp: "3 days ago",
    rating: 5,
    type: "whatsapp",
    screenshot: wa4
  },
  {
    id: "testimonial-1",
    name: "Farhan",
    role: "Founding Reader",
    text: "I got practices individually. The difference this cohort created is speaking in front of multiple People. Sumit forced implementation which literally most of us wouldn't have tried in our life times.",
    avatar: "FH",
    rating: 5,
    featured: true
  },
  {
    id: "testimonial-2",
    name: "P. Masthan Reddy",
    role: "3rd year student, Kalasalingam University",
    text: "I have many things in my brain but I'm not able to express them outside. Daily tasks were very useful and after sufficient practice now I am able to talk what I am thinking. I attended some Hackathons... it became easy to express my thoughts.",
    avatar: "PM",
    rating: 5,
    featured: false
  }
];

const AcademicCard = ({ data }: { data: typeof facultyEndorsements[0] }) => {
  return (
    <motion.div
      className="bg-[#121212]/60 backdrop-blur-xl border border-[#FACC15]/10 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-700"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* KLU Badge - Elegant Floating Tag */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-[#FACC15]/20 backdrop-blur-sm border border-[#FACC15]/30 px-3 py-1 rounded-full">
          <span className="text-[#FACC15] text-xs font-bold">
            {data.institution}
          </span>
        </div>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={data.headshot}
                alt={`Sumit with ${data.name}`}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Verified Badge Overlay on Photo */}
            {data.verified && (
              <div className="absolute bottom-4 left-4">
                <div className="bg-[#FACC15] rounded-full p-2 shadow-lg">
                  <CheckCircle className="w-4 h-4 text-[#0A0A0A]" />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col justify-center">
            {/* Name and Title */}
            <h3 className="font-display font-bold text-xl md:text-2xl text-[#FACC15] mb-2">
              {data.name}
            </h3>
            <p className="text-[#FFFFFF] text-sm md:text-base font-medium mb-4">
              {data.title}
            </p>
            
            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-4 h-4 text-[#FACC15]/20" />
              <p className="text-[#E5E7EB] text-sm md:text-base leading-relaxed italic font-light pl-4">
                "{data.endorsement}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReaderCard = ({ data }: { data: typeof consolidatedTestimonials[0] }) => {
  if (data.type === 'whatsapp') {
    // WhatsApp Screenshot Card - Smartphone Frame with 30/70 split
    return (
      <motion.div
        className="bg-[#121212]/40 backdrop-blur-xl border border-[#FACC15]/10 rounded-2xl p-4 aspect-square h-full flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Top 30%: Text Hook */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-white" />
            </div>
            <span className="text-[#FACC15] text-xs font-bold">WhatsApp</span>
            <span className="text-[#E5E7EB]/50 text-xs ml-auto">{data.timestamp}</span>
          </div>
          <h3 className="font-display font-bold text-sm text-white mb-1">{data.name}</h3>
          <p className="text-[#E5E7EB] text-xs leading-relaxed">{data.message}</p>
        </div>

        {/* Bottom 70%: Screenshot Image */}
        <div className="flex-1 bg-black rounded-xl p-2 border border-[#FACC15]/20 relative overflow-hidden">
          <img
            src={data.screenshot}
            alt="WhatsApp Screenshot"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Phone Frame Overlay */}
          <div className="absolute inset-0 border-2 border-[#FACC15]/30 rounded-lg pointer-events-none" />
          
          {/* Rating Badge */}
          <div className="absolute bottom-2 right-2 bg-[#FACC15] text-[#0A0A0A] px-2 py-1 rounded-full text-xs font-bold">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span>{data.rating}.0</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  } else {
    // Deep Transformation Text Card
    return (
      <motion.div
        className={`
          relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col
          ${data.featured 
            ? 'bg-[#FACC15] text-[#0A0A0A] border-[#FACC15]' 
            : 'bg-[#121212]/40 backdrop-blur-xl border-[#FACC15]/10'
          }
        `}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Avatar and Name */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg ${
            data.featured ? 'bg-[#0A0A0A] text-[#FACC15]' : 'bg-[#FACC15] text-[#0A0A0A]'
          }`}>
            {data.avatar}
          </div>
          <div className="flex-1">
            <h3 className={`font-display font-bold text-sm mb-1 ${
              data.featured ? 'text-[#0A0A0A]' : 'text-white'
            }`}>
              {data.name}
            </h3>
            <p className={`text-xs font-medium mb-2 ${
              data.featured ? 'text-[#0A0A0A]/80' : 'text-[#E5E7EB]'
            }`}>
              {data.role}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative mb-4">
            <Quote className={`absolute -top-2 -left-2 w-4 h-4 ${
              data.featured ? 'text-[#0A0A0A]/20' : 'text-[#FACC15]/20'
            }`} />
            <p className={`leading-relaxed text-sm italic pl-4 ${
              data.featured ? 'text-[#0A0A0A]/90' : 'text-[#E5E7EB]'
            }`}>
              "{data.text}"
            </p>
          </div>
        </div>

        {/* Featured Badge */}
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

          {/* 1 Column (Mobile) / 2 Columns (Desktop) Grid for Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

          {/* 60/40 Split Architecture - Masterpiece Reader Bento */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column (60%): 2x2 Grid of WhatsApp Screenshots */}
            <div className="lg:w-3/5">
              <div className="grid grid-cols-2 gap-4">
                {consolidatedTestimonials.filter(data => data.type === 'whatsapp').map((data) => (
                  <motion.div
                    key={data.id}
                    variants={itemVariants}
                    className="aspect-square"
                  >
                    <ReaderCard data={data} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column (40%): Vertical Stack of Text Cards */}
            <div className="lg:w-2/5">
              <div className="flex flex-col gap-6 h-full">
                {consolidatedTestimonials.filter(data => data.type !== 'whatsapp').map((data) => (
                  <motion.div
                    key={data.id}
                    variants={itemVariants}
                    className="flex-1"
                  >
                    <ReaderCard data={data} />
                  </motion.div>
                ))}
              </div>
            </div>
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
