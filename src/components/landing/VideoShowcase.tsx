import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Youtube, Instagram, Smartphone, Loader2 } from 'lucide-react';

// Custom CSS for scrollbar hiding
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Video data configuration with metadata
const videoData = {
  youtube: {
    id: "V-7lgtdIFqs",
    title: "Mastering the Stage: The CMC Framework in Action",
    platform: "YouTube",
    label: "Mastering Public Presence"
  },
  reels: [
    {
      id: "DWO1F-CkkNU",
      title: "Stage Fear Transformation",
      platform: "Instagram Reel",
      label: "The Psychology of Tone"
    },
    {
      id: "DUFLa29EtXv", 
      title: "Interview Confidence Boost",
      platform: "Instagram Reel",
      label: "Instant Confidence Drills"
    },
    {
      id: "DUTEl9JksHY",
      title: "Communication Mastery",
      platform: "Instagram Reel",
      label: "Commanding the Stage"
    }
  ],
  shorts: {
    id: "NgJeSlHWdFk",
    title: "30-Second Communication Reset",
    platform: "YouTube Shorts",
    label: "Quick Impact Techniques"
  }
};

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Inject custom scrollbar styles
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = scrollbarHideStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

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

  const handlePlayVideo = (videoId: string) => {
    setActiveVideoId(videoId);
  };

  const ShimmerLoader = () => (
    <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#121212] animate-pulse rounded-2xl">
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 text-[#FACC15] animate-spin" />
      </div>
    </div>
  );

  const PlayButtonOverlay = ({ onPlay }: { onPlay: () => void }) => (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      onClick={onPlay}
    >
      <div className="bg-[#FACC15]/90 rounded-full p-4 backdrop-blur-sm pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Play className="w-8 h-8 text-[#0A0A0A]" fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  );

  // Mobile Reel Card Component
  const MobileReelCard = ({ reel, handlePlayVideo }: { 
    reel: typeof videoData.reels[0]; 
    handlePlayVideo: (id: string) => void; 
  }) => (
    <div className="relative aspect-[9/16] bg-[#121212] rounded-2xl overflow-hidden border border-[#FACC15]/20">
      {activeVideoId !== `reel-${reel.id}` ? (
        <>
          {/* Poster Image Shield */}
          <img
            src={`https://instagram.com/p/${reel.id}/media/`}
            alt={reel.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
            {/* Top: Label */}
            <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
              <Instagram className="w-3 h-3 text-[#FACC15]" />
              <span className="text-white text-xs font-medium">{reel.label}</span>
            </div>
            
            {/* Bottom: Title + Play Button */}
            <div className="self-end">
              <div className="bg-gradient-to-t from-black/80 to-transparent p-3 backdrop-blur-sm rounded-2xl mb-2">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  {reel.title}
                </h4>
              </div>
              
              <PlayButtonOverlay onPlay={() => handlePlayVideo(`reel-${reel.id}`)} />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.instagram.com/reel/${reel.id}/embed/`}
          title="Sumit in Action"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );

  // Mobile Shorts Card Component
  const MobileShortsCard = ({ shorts, handlePlayVideo }: { 
    shorts: typeof videoData.shorts; 
    handlePlayVideo: (id: string) => void; 
  }) => (
    <div className="relative aspect-[9/16] bg-[#121212] rounded-2xl overflow-hidden border border-[#FACC15]/20">
      {activeVideoId !== `shorts-${shorts.id}` ? (
        <>
          {/* Poster Image Shield */}
          <img
            src={`https://img.youtube.com/vi/${shorts.id}/maxresdefault.jpg`}
            alt={shorts.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
            {/* Top: Label */}
            <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
              <Youtube className="w-3 h-3 text-[#FACC15]" />
              <span className="text-white text-xs font-medium">{shorts.label}</span>
            </div>
            
            {/* Bottom: Title + Play Button */}
            <div className="self-end">
              <div className="bg-gradient-to-t from-black/80 to-transparent p-3 backdrop-blur-sm rounded-2xl mb-2">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  {shorts.title}
                </h4>
              </div>
              
              <PlayButtonOverlay onPlay={() => handlePlayVideo(`shorts-${shorts.id}`)} />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${shorts.id}?autoplay=1`}
          title="Sumit in Action"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );

  // Desktop Reel Card Component
  const DesktopReelCard = ({ reel, handlePlayVideo }: { 
    reel: typeof videoData.reels[0]; 
    handlePlayVideo: (id: string) => void; 
  }) => (
    <div className="relative bg-[#121212] backdrop-blur-md rounded-2xl overflow-hidden border border-[#FACC15]/20">
      <div className="relative aspect-[9/16]">
        {activeVideoId !== `reel-${reel.id}` ? (
          <>
            {/* Poster Image Shield */}
            <img
              src={`https://instagram.com/p/${reel.id}/media/`}
              alt={reel.title}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
              {/* Top: Label */}
              <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                <Instagram className="w-3 h-3 text-[#FACC15]" />
                <span className="text-white text-xs font-medium">{reel.label}</span>
              </div>
              
              {/* Bottom: Title + Play Button */}
              <div className="self-end">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3 backdrop-blur-sm rounded-2xl mb-2">
                  <h4 className="font-display text-sm font-bold text-white mb-1">
                    {reel.title}
                  </h4>
                </div>
                
                <PlayButtonOverlay onPlay={() => handlePlayVideo(`reel-${reel.id}`)} />
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.instagram.com/reel/${reel.id}/embed/`}
            title="Sumit in Action"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );

  // Desktop Shorts Card Component
  const DesktopShortsCard = ({ shorts, handlePlayVideo }: { 
    shorts: typeof videoData.shorts; 
    handlePlayVideo: (id: string) => void; 
  }) => (
    <div className="relative bg-[#121212] backdrop-blur-md rounded-2xl overflow-hidden border border-[#FACC15]/20">
      <div className="relative aspect-[9/16]">
        {activeVideoId !== `shorts-${shorts.id}` ? (
          <>
            {/* Poster Image Shield */}
            <img
              src={`https://img.youtube.com/vi/${shorts.id}/maxresdefault.jpg`}
              alt={shorts.title}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
            
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
              {/* Top: Label */}
              <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                <Youtube className="w-3 h-3 text-[#FACC15]" />
                <span className="text-white text-xs font-medium">{shorts.label}</span>
              </div>
              
              {/* Bottom: Title + Play Button */}
              <div className="self-end">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3 backdrop-blur-sm rounded-2xl mb-2">
                  <h4 className="font-display text-sm font-bold text-white mb-1">
                    {shorts.title}
                  </h4>
                </div>
                
                <PlayButtonOverlay onPlay={() => handlePlayVideo(`shorts-${shorts.id}`)} />
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${shorts.id}?autoplay=1`}
            title="Sumit in Action"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );

  const SmartphoneFrame = ({ children, title }: { children: React.ReactNode; title: string }) => (
    <div className="relative bg-black rounded-3xl p-2 border-2 border-[#FACC15]/20 shadow-2xl shadow-[#FACC15]/10">
      {/* Phone Notch */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10 pointer-events-none"></div>
      
      {/* Phone Screen */}
      <div className="relative overflow-hidden rounded-2xl">
        {children}
        
        {/* Phone Status Bar */}
        <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-4 py-1 flex items-center justify-between z-10">
          <span className="text-white text-xs font-medium">{title}</span>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FACC15]/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-white">
            The Voice of <span className="text-[#FACC15]">Authority</span>
          </h2>
          <p className="text-white text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Witness how the architecture of communication transforms presence, impact, and influence.
          </p>
        </motion.div>

        {/* Main Video Grid - 70/30 Split Dashboard */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Primary YouTube Feature - Left 70% (Desktop) */}
          <motion.div
            className="lg:col-span-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video bg-[#121212] rounded-2xl overflow-hidden border border-[#FACC15]/20">
              {activeVideoId !== 'youtube' ? (
                <>
                  {/* Poster Image Shield */}
                  <img
                    src={`https://img.youtube.com/vi/${videoData.youtube.id}/maxresdefault.jpg`}
                    alt={videoData.youtube.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
                    {/* Top: Label */}
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-[#FACC15]" />
                      <span className="text-white text-xs font-medium">{videoData.youtube.label}</span>
                    </div>
                    
                    {/* Bottom: Title + Play Button */}
                    <div className="self-end">
                      <div className="bg-gradient-to-t from-black/80 to-transparent p-4 backdrop-blur-sm rounded-2xl mb-2">
                        <h3 className="font-display text-xl font-bold text-white mb-1">
                          {videoData.youtube.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          Watch complete CMC Framework demonstration
                        </p>
                      </div>
                      
                      <PlayButtonOverlay onPlay={() => handlePlayVideo('youtube')} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoData.youtube.id}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=1`}
                    title="Sumit in Action"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </>
              )}
            </div>
          </motion.div>

          {/* Supporting Reels - Right 30% (Desktop) */}
          <motion.div
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <h3 className="font-display text-lg font-bold text-[#FACC15] mb-4">
              Quick Wins
            </h3>
            
            {/* Scrollable Vertical Sidebar for Desktop */}
            <div className="lg:h-[400px] lg:overflow-y-auto lg:space-y-6 lg:pr-2 border border-[#FACC15]/20 rounded-2xl bg-[#0A0A0A] p-4 scrollbar-hide">
              {/* Mobile: Horizontal Snap-Scroll Row */}
              <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
                {videoData.reels.map((reel) => (
                  <div key={`mobile-${reel.id}`} className="flex-shrink-0 w-64">
                    <MobileReelCard reel={reel} handlePlayVideo={handlePlayVideo} />
                  </div>
                ))}
                
                {/* Mobile: YouTube Shorts */}
                <div key={`mobile-shorts-${videoData.shorts.id}`} className="flex-shrink-0 w-64">
                  <MobileShortsCard shorts={videoData.shorts} handlePlayVideo={handlePlayVideo} />
                </div>
              </div>
              
              {/* Desktop: Vertical Stack */}
              <div className="hidden lg:block space-y-6">
                {videoData.reels.map((reel) => (
                  <DesktopReelCard key={`desktop-${reel.id}`} reel={reel} handlePlayVideo={handlePlayVideo} />
                ))}
                
                {/* Desktop: YouTube Shorts */}
                <DesktopShortsCard key={`desktop-shorts-${videoData.shorts.id}`} shorts={videoData.shorts} handlePlayVideo={handlePlayVideo} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://instagram.com/unleashwithsumit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0A0A0A] font-display font-bold px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            See More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
