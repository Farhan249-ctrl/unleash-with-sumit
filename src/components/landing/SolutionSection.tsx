import bookMockup from "@/assets/book-mockup.png";
import { Zap, Target, Brain } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={bookMockup}
              alt="Book"
              loading="lazy"
              width={300}
              height={375}
              className="w-48 md:w-64 drop-shadow-xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Not Another Theory Book.
              <br />
              <span className="text-gradient-brand">A Speaking Action Plan.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              "I Know the Answers But I Can't Say It" gives you battle-tested frameworks, real exercises, 
              and practical strategies that work from Day 1 — no fluff, no motivation quotes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Brain, label: "Rewire Your Thinking", desc: "Overcome the mental blocks" },
                { icon: Target, label: "Structured Frameworks", desc: "Answer any question clearly" },
                { icon: Zap, label: "Instant Application", desc: "Use it in your next interview" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-muted rounded-lg p-4 text-center">
                  <Icon className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                  <h3 className="font-display font-bold text-sm mb-1">{label}</h3>
                  <p className="text-muted-foreground text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
