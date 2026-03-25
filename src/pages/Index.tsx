import HeroSection from "@/components/landing/HeroSection";
import AchievementSection from "@/components/landing/AchievementSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import BookBreakdown from "@/components/landing/BookBreakdown";
import IdentityShift from "@/components/landing/IdentityShift";
import AuthorSection from "@/components/landing/AuthorSection";
import BonusSection from "@/components/landing/BonusSection";
import HowItWorks from "@/components/landing/HowItWorks";
import StrongCTA from "@/components/landing/StrongCTA";
import ObjectionSection from "@/components/landing/ObjectionSection";
import FinalCTA from "@/components/landing/FinalCTA";
import ExitSection from "@/components/landing/ExitSection";
import StickyCTA from "@/components/landing/StickyCTA";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StickyBuyHeader from "@/components/ui/StickyBuyHeader";
import VideoShowcase from "@/components/landing/VideoShowcase";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <ScrollProgress />
      <StickyBuyHeader />
      <HeroSection />
      <AchievementSection />
      <SocialProofSection />
      <VideoShowcase />
      <BookBreakdown />
      <IdentityShift />
      <AuthorSection />
      <BonusSection />
      <HowItWorks />
      <StrongCTA />
      <ObjectionSection />
      <FinalCTA />
      <ExitSection />
      <StickyCTA />
    </div>
  );
};

export default Index;
