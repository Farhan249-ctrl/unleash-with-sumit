import { Gift, Video, FileText, MessageSquare, Users, ShoppingCart } from "lucide-react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const bonuses = [
  {
    icon: Video,
    title: "Live Q&A Session with Sumit",
    value: "₹499",
    desc: "Ask your personal communication questions directly",
  },
  {
    icon: FileText,
    title: "Anti-Procrastination Toolkit",
    value: "₹299",
    desc: "PDF with daily habits to beat laziness for good",
  },
  {
    icon: MessageSquare,
    title: "Communication Upgrade Cheat Sheet",
    value: "₹199",
    desc: "Quick-reference card for instant speaking confidence",
  },
  {
    icon: Users,
    title: "Community Access — Unleash Skill Hub",
    value: "₹499",
    desc: "Join a tribe of action-takers leveling up together",
  },
];

const BonusSection = () => {
  const totalValue = 499 + 299 + 199 + 499;

  return (
    <section className="section-yellow py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Gift className="w-8 h-8" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            FREE Bonuses Worth ₹{totalValue}+
          </h2>
        </div>
        <p className="text-center font-semibold mb-8 opacity-80">
          Only for online buyers — limited time offer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {bonuses.map(({ icon: Icon, title, value, desc }) => (
            <div
              key={title}
              className="bg-secondary text-secondary-foreground rounded-xl p-5 border-2 border-brand-yellow/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-6 h-6 text-brand-yellow" />
                <h3 className="font-display font-bold">{title}</h3>
              </div>
              <p className="text-secondary-foreground/70 text-sm mb-2">{desc}</p>
              <p className="text-brand-yellow font-bold text-sm">
                Value: {value} — <span className="text-secondary-foreground/50 line-through">Paid</span>{" "}
                <span className="text-brand-yellow">FREE</span>
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={FLIPKART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5" />
            Get Book + All Bonuses — ₹349
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
