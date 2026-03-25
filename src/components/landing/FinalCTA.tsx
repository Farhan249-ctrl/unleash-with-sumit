import { ShoppingCart, ArrowRight } from "lucide-react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const FinalCTA = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
          One Decision Away From Confidence
        </h2>
        <p className="text-lg mb-8 opacity-80 font-medium text-white">
          You've read this far because you know you need this. The knowledge is already inside you — 
          let this book help you unleash it.
        </p>
        <div className="flex justify-center">
          <a
            href={FLIPKART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FACC15] text-black font-display font-bold text-2xl px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-2xl"
          >
            <ShoppingCart className="w-7 h-7" />
            <span>Get Your Copy Now — ₹349</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-6 text-sm font-semibold opacity-70 text-white">
          + ₹1,496 in FREE bonuses (limited time)
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
