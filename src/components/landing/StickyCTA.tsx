import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <div className="container mx-auto max-w-lg flex items-center justify-between gap-3">
        <div className="text-secondary-foreground">
          <p className="font-display font-bold text-sm">₹349 + FREE Bonuses</p>
          <p className="text-secondary-foreground/50 text-xs">Limited time offer</p>
        </div>
        <a
          href={FLIPKART_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-gradient text-brand-black font-display font-bold text-sm px-5 py-3 rounded-lg transition-transform hover:scale-105"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
