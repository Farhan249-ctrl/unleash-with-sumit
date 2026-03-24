import { MessageCircle, User, Clock } from "lucide-react";

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
];

const ObjectionSection = () => {
  return (
    <section className="section-warm py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          Still Not Sure?
        </h2>
        <div className="space-y-4">
          {objections.map(({ icon: Icon, objection, answer }, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                <h3 className="font-display font-bold text-lg">{objection}</h3>
              </div>
              <p className="text-muted-foreground pl-9">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;
