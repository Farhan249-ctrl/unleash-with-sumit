import { MessageCircle, User, Clock, Youtube, Globe, Timer, Target } from "lucide-react";

const objections = [
  {
    icon: MessageCircle,
    objection: "\"I'm not a good speaker…\"",
    answer: "That's exactly why this book exists. It's built for people who struggle — not for those who are already good.",
  },
  {
    icon: User,
    objection: "\"I'm an introvert, this won't work for me…\"",
    answer: "This book was written BY someone who was an introvert. It's designed for people who think in silence but want to speak with power.",
  },
  {
    icon: Clock,
    objection: "\"I don't have time to read…\"",
    answer: "Each chapter is short, practical, and designed for 10-minute reads. You'll see results in your very next conversation.",
  },
  {
    icon: Youtube,
    objection: "\"Why can't I just watch free videos on YouTube?\"",
    answer: "Information is free, but Structure is expensive. YouTube gives you random tips; this book gives you an Architecture. You don't fail because you lack knowledge—you fail because you lack a framework to organize that knowledge under pressure.",
  },
  {
    icon: Globe,
    objection: "\"Is this just for improving my English?\"",
    answer: "No. This is for Articulation Mastery. Whether you speak in English, Hindi, or any language, the CMC Framework helps you organize your thoughts before you open your mouth. We fix the thinking process, not just the vocabulary.",
  },
  {
    icon: Timer,
    objection: "\"I'll buy it later, is there any rush?\"",
    answer: "Yes. The ₹1,496 in Free Bonuses (Live Q&A, Anti-Procrastination Toolkit, and Hub Access) are strictly reserved for the First 50 Buyers. Once the 30-minute timer hits zero or the 50th copy is sold, these bonuses vanish forever.",
  },
  {
    icon: Target,
    objection: "\"I've tried other courses and failed. Why is this different?\"",
    answer: "Because this isn't a 'motivation' book. It's a Field Guide. From the 30-Second Reset to Non-Verbal Authority, every chapter includes a 'Do This Now' exercise to ensure you don't just know—you Do.",
  },
];

const ObjectionSection = () => {
  return (
    <section className="py-16 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10 text-[#FFFFFF]">
          Still Not Sure?
        </h2>
        <div className="space-y-4">
          {objections.map(({ icon: Icon, objection, answer }, i) => (
            <div key={i} className="bg-[#121212] rounded-xl p-6 border border-[#FACC15]/20">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-[#FACC15] flex-shrink-0" />
                <h3 className="font-display font-bold text-lg text-white">{objection}</h3>
              </div>
              <p className="text-[#E5E7EB] pl-9">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;
