import { CheckCircle } from "lucide-react";

const painPoints = [
  "You know the answer but your mind goes blank when you stand up to speak",
  "You rehearse conversations in your head but freeze in real life",
  "Interviews scare you — not because you're dumb, but because you can't express",
  "You watch others speak fluently and wonder, 'Why can't I do that?'",
  "Group discussions feel like a battlefield where everyone wins except you",
  "You avoid speaking up in meetings even when you have the best idea",
];

const RelatabilitySection = () => {
  return (
    <section className="section-warm py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
          This Book Is For You If…
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          If even ONE of these hits home, keep reading.
        </p>
        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatabilitySection;
