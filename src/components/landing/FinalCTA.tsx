import { ShoppingCart, ArrowRight } from "lucide-react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const FinalCTA = () => {
  return (
    <section className="section-yellow py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          One Decision Away From Confidence
        </h2>
        <p className="text-lg mb-6 opacity-80 font-medium">
          You've read this far because you know you need this. The knowledge is already inside you — 
          let this book help you unleash it.
        </p>
        <a
          href={FLIPKART_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-display font-bold text-xl px-10 py-5 rounded-lg transition-transform hover:scale-105 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6" />
          Get Your Copy Now — ₹349
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-4 text-sm font-semibold opacity-70">
          + ₹1,496 in FREE bonuses (limited time)
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
