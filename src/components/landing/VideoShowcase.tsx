import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Play, Youtube, Instagram, ChevronUp, ChevronDown } from 'lucide-react';

const ReelCard = ({ reel, isActive, onActivate }: { 
  reel: { id: string; url: string; thumbnail: string; title: string }; 
  isActive: boolean;
  onActivate: (id: string) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  // Sub-Component Slave-Logic
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        try {
          videoRef.current.muted = false;
          videoRef.current.play();
          setIsPlaying(true);
          setIsPaused(false);
        } catch (err) {
          console.log("Auto-play prevented:", err);
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
        setIsPaused(true);
      }
    }
  }, [isActive]);

  const handlePlay = () => {
    onActivate(reel.id);
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <div 
      className="snap-start relative group h-full"
      data-reel-id={reel.id}
    >
      <div 
        className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-black cursor-pointer"
        onClick={handleVideoToggle}
      >
        <video
          ref={videoRef}
          src={reel.url}
          poster={reel.thumbnail}
          preload="none"
          muted={true}
          loop={true}
          playsInline={true}
          autoPlay={reel.id === 'reel-1' ? true : false}
          className="w-full h-full object-cover bg-neutral-900"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {!isPlaying && (
          <>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
              <button
                onClick={handlePlay}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Play className="w-5 h-5 text-white" />
              </button>
            </div>
            {/* Additional Video Play Affordance Icon */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

const NavigationArrows = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const scrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: -containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
      <button
        onClick={scrollUp}
        className="w-10 h-10 rounded-full bg-[#FACC15] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <button
        onClick={scrollDown}
        className="w-10 h-10 rounded-full bg-[#FACC15] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reelContainerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);

  // Single Intersection Observer - Prevents State Conflicts
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            // Section is not visible - stop all media
            setActiveId(null);
            setIsYouTubePlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const reelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const reelId = entry.target.getAttribute('data-reel-id');
          if (entry.isIntersecting && entry.intersectionRatio > 0.6 && reelId) {
            setActiveId(reelId);
            setIsYouTubePlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    // Observe section for exit protocol
    if (ref.current) {
      sectionObserver.observe(ref.current);
    }

    // Observe individual reels
    const reelElements = reelContainerRef.current?.querySelectorAll('[data-reel-id]');
    reelElements?.forEach(el => reelObserver.observe(el));

    return () => {
      if (ref.current) {
        sectionObserver.unobserve(ref.current);
      }
      reelElements?.forEach(el => reelObserver.unobserve(el));
    };
  }, []);

  // YouTube-to-Reel Bridge
  const handleYouTubePlay = () => {
    setActiveId('youtube');
    setIsYouTubePlaying(true);
  };

  const handleReelActivate = (reelUrl: string) => {
    setActiveId(reelUrl);
    setIsYouTubePlaying(false);
  };

  const videoData = [
    { id: 'reel-1', url: '/videos/reel-1.mp4', thumbnail: '/reel-1-thumb.png', title: 'Stage Fear Transformation' },
    { id: 'reel-2', url: '/videos/reel-2.mp4', thumbnail: '/reel-2-thumb.png', title: 'Interview Confidence Boost' },
    { id: 'reel-3', url: '/videos/reel-3.mp4', thumbnail: '/reel-3-thumb.png', title: 'Communication Mastery' }
  ];

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

  return (
    <section ref={ref} className="px-4 bg-[#0A0A0A] relative overflow-hidden" style={{ paddingTop: '5rem !important', marginTop: '-40px !important' }}>
      {/* Golden Radial Glow for Cinematic Polish */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/3 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          style={{ paddingTop: '0 !important', marginTop: '-80px !important' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-display text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            The Voice of Authority
          </h2>
          <p className="text-white text-fluid-lg max-w-3xl mx-auto leading-relaxed">
            Witness how architecture of communication transforms presence, impact, and influence.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="lg:col-span-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video bg-[#121212] rounded-2xl overflow-hidden border border-[#FACC15]/20">
              {isYouTubePlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/V-7lgtdIFqs?autoplay=1"
                  title="Mastering the Stage"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div onClick={handleYouTubePlay} className="absolute inset-0 w-full h-full cursor-pointer">
                  <img
                    src={'https://img.youtube.com/vi/V-7lgtdIFqs/maxresdefault.jpg'}
                    alt="Mastering the Stage"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-between p-4">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                      <Youtube className="w-4 h-4 text-[#FACC15]" />
                      <span className="text-white text-xs font-medium">Mastering Public Presence</span>
                    </div>
                    <div className="self-end">
                      <div className="bg-gradient-to-t from-black/80 to-transparent p-4 backdrop-blur-sm rounded-2xl mb-2">
                        <h3 className="font-display text-xl font-bold text-white mb-1">
                          Mastering the Stage: The CMC Framework in Action
                        </h3>
                        <p className="text-white/80 text-sm">
                          Watch complete CMC Framework demonstration
                        </p>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-[#FACC15] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Cinema-Scope Golden Radial Spotlight */}
              <div className="absolute inset-0 rounded-[2rem]" style={{
                background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, rgba(0,0,0,1) 70%)'
              }} />
              <div 
                ref={reelContainerRef}
                className="relative aspect-[9/16] w-full max-w-[340px] h-[600px] overflow-y-scroll snap-y snap-mandatory rounded-[2rem] border-4 border-white/10 shadow-2xl"
              >
                {videoData.map((reel, index) => (
                  <ReelCard 
                    key={reel.id}
                    reel={reel}
                    isActive={activeId === reel.id}
                    onActivate={handleReelActivate}
                  />
                ))}
              </div>
              <NavigationArrows containerRef={reelContainerRef} />
            </div>
          </motion.div>

          {/* Perfect Center Social Portals */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-16 mx-auto lg:col-span-12">
            {/* Button 1: YouTube */}
            <button className="w-64 border-2 border-red-500/30 bg-zinc-950 px-8 py-4 rounded-2xl text-white font-bold tracking-widest hover:scale-105 hover:bg-red-500/10 transition-all shadow-xl">
              WATCH ON YOUTUBE
            </button>
            {/* Button 2: Instagram */}
            <button className="w-64 border-2 border-yellow-500/30 bg-zinc-950 px-8 py-4 rounded-2xl text-white font-bold tracking-widest hover:scale-105 hover:bg-yellow-500/10 transition-all shadow-xl">
              SEE ON INSTAGRAM
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
