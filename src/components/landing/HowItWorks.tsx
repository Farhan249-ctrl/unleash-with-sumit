import { MousePointerClick, CreditCard, Camera, Gift } from "lucide-react";

const steps = [
  { icon: MousePointerClick, step: "1", title: "Click 'Buy Now'", desc: "Choose Flipkart or Amazon" },
  { icon: CreditCard, step: "2", title: "Purchase the Book", desc: "Complete your order (₹349)" },
  { icon: Camera, step: "3", title: "Screenshot Your Order", desc: "Send it on WhatsApp" },
  { icon: Gift, step: "4", title: "Get Bonuses Instantly", desc: "We'll send everything within 24hrs" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          How to Get Your <span className="text-gradient-brand">Bonuses</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-7 h-7 text-brand-black" />
              </div>
              <div className="text-xs font-bold text-brand-yellow mb-1">STEP {step}</div>
              <h3 className="font-display font-bold text-sm mb-1">{title}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
