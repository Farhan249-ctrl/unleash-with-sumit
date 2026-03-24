import { ShoppingCart, Clock } from "lucide-react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";
const AMAZON_LINK = "https://amzn.in/d/0izWwgtM";

const StrongCTA = () => {
  return (
    <section className="section-dark py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Stop Waiting.
          <br />
          <span className="text-gradient-brand">Start Speaking.</span>
        </h2>
        <p className="text-secondary-foreground/70 text-lg mb-6">
          Every day you delay is another interview lost, another presentation fumbled, 
          another opportunity wasted. The bonuses won't last forever.
        </p>
        <div className="flex items-center justify-center gap-2 text-brand-yellow mb-6 text-sm font-semibold">
          <Clock className="w-4 h-4" />
          Bonuses ending soon — only for early buyers
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={FLIPKART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-brand-black font-display font-bold text-lg px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy Now — ₹349
          </a>
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-yellow text-brand-yellow font-display font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-brand-yellow hover:text-brand-black"
          >
            Buy on Amazon
          </a>
        </div>
        <p className="text-secondary-foreground/40 text-sm mt-6">
          <span className="line-through">₹299 offline</span> → ₹349 online with ₹1,496 in bonuses FREE
        </p>
      </div>
    </section>
  );
};

export default StrongCTA;
