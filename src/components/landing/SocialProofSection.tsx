import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Star, CheckCircle, Quote } from 'lucide-react';

// Faculty Asset Imports
import fac1 from '@/assets/faculty/fac-1-aravind.jpeg';
import fac2 from '@/assets/faculty/fac-2-placement.jpeg';
import fac3 from '@/assets/faculty/fac-3-suthendran.jpeg';
import fac4 from '@/assets/faculty/fac-4-brintha.jpeg';
import fac5 from '@/assets/faculty/fac-5-shubathra.jpeg';
import fac6 from '@/assets/faculty/fac-6-librarian.jpeg';

// WhatsApp Testimonial Asset Imports
import wa1 from '@/assets/testimonials/wa-1.jpeg';
import wa2 from '@/assets/testimonials/wa-2.jpeg';
import wa3 from '@/assets/testimonials/wa-3.jpeg';
import wa4 from '@/assets/testimonials/wa-4.jpeg';

// WhatsApp Link
const WHATSAPP_LINK = "https://wa.me/917070669435?text=I%20just%20bought%20the%20book!";

// Faculty Endorsements Data
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

// Testimonials Data
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

// Academic Card Component
const AcademicCard = ({ data }: { data: typeof facultyEndorsements[0] }) => {
  return (
    <motion.div
      className="bg-[#121212]/60 backdrop-blur-xl border border-[#FACC15]/10 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-700"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* KLU Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-[#FACC15]/20 backdrop-blur-sm border border-[#FACC15]/30 px-3 py-1 rounded-full">
          <span className="text-[#FACC15] text-xs font-bold">
            {data.institution}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={data.headshot}
                alt={`Sumit with ${data.name}`}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Verified Badge */}
            {data.verified && (
              <div className="absolute bottom-4 left-4">
                <div className="bg-[#FACC15] rounded-full p-2 shadow-lg">
                  <CheckCircle className="w-4 h-4 text-[#0A0A0A]" />
                </div>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
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

// Reader Card Component
const ReaderCard = ({ data }: { data: typeof consolidatedTestimonials[0] }) => {
  if (data.type === 'whatsapp') {
    return (
      <motion.div
        className="bg-[#121212]/40 backdrop-blur-xl border border-[#FACC15]/10 rounded-2xl p-4 aspect-square h-full flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Header */}
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

        {/* Screenshot */}
        <div className="flex-1 bg-black rounded-xl p-2 border border-[#FACC15]/20 relative overflow-hidden">
          <img
            src={data.screenshot}
            alt="WhatsApp Screenshot"
            className="w-full h-full object-cover rounded-lg"
          />
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
    return (
      <motion.div
        className={`
          relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col min-h-[350px] justify-between
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
        {/* Header */}
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

// Main SocialProofSection Component
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
    <section ref={ref} className="py-8 px-4 pb-16 bg-[#0A0A0A] relative overflow-hidden" style={{ paddingBottom: '4rem !important', marginBottom: '0 !important', paddingTop: '0 !important' }}>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Social Proof Grid with Enhanced Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-0 max-w-7xl mx-auto"
          style={{
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          }}
        >
          {/* Sovereign Badge Architecture */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 text-center mb-20 relative"
          >
            {/* Ghost-Text Liquidation - Remove visual noise */}
            
            {/* Sovereign Badge with Spotlight Glow */}
            <div className="relative inline-block py-12 px-8">
              {/* Background Spotlight Glow */}
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-2xl -z-10"></div>
              
              {/* Clean Typography */}
              <h2 className="relative font-sans-serif font-bold text-4xl md:text-6xl tracking-tighter mb-0">
                <span className="text-white">WALL OF</span>
                <span className="text-yellow-500 font-black ml-2">TRUST</span>
              </h2>
              
              {/* Academic Sub-heading */}
              <p className="uppercase tracking-[0.25em] text-zinc-500 mt-3">
                ACADEMIC AUTHORITY FROM KLU'S FINEST EDUCATORS
              </p>
            </div>
          </motion.div>

          {/* Faculty Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 text-center mb-8"
          >
            <p className="text-[#FACC15] text-sm md:text-base font-bold tracking-[0.2em] uppercase border-b-2 border-[#FACC15] pb-2 mb-12 inline-block">
              Academic Authority from KLU's Finest Educators
            </p>
          </motion.div>

          {/* Faculty Endorsements */}
          {facultyEndorsements.map((faculty) => (
            <motion.div key={faculty.id} variants={itemVariants}>
              <AcademicCard data={faculty} />
            </motion.div>
          ))}

          {/* What Readers Say - Left-Heavy Asymmetric Layout */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 text-left mb-8 relative"
          >
            {/* Heading to the left */}
            <h3 className="text-2xl md:text-3xl font-black mb-4 inline-block">
              Direct Results: Unfiltered Success Stories
            </h3>
            
            {/* Verified Testimonials badge on the right */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-bold">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Testimonials</span>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Screenshots */}
          {consolidatedTestimonials.filter(t => t.type === 'whatsapp').map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <ReaderCard data={testimonial} />
            </motion.div>
          ))}

          {/* Farhan Card - Final Testimonial */}
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <ReaderCard data={consolidatedTestimonials.find(t => t.id === "testimonial-1")!} />
          </motion.div>

          {/* Masthan Card - Final Testimonial */}
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <ReaderCard data={consolidatedTestimonials.find(t => t.id === "testimonial-2")!} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
