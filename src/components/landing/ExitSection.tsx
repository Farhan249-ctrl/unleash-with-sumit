import { Instagram, MessageCircle } from "lucide-react";

const ExitSection = () => {
  return (
    <section className="section-dark py-12 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-secondary-foreground/50 text-sm mb-3">Not ready to buy yet?</p>
        <h3 className="font-display text-xl font-bold mb-4 text-secondary-foreground">
          Join the <span className="text-brand-yellow">Unleash Community</span> — It's Free
        </h3>
        <p className="text-secondary-foreground/60 text-sm mb-6">
          Follow for daily tips on communication, confidence, and career growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://instagram.com/unleashwithsumit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-brand-yellow/30 text-brand-yellow px-6 py-3 rounded-lg transition-all hover:bg-brand-yellow/10 font-semibold"
          >
            <Instagram className="w-5 h-5" />
            @unleashwithsumit
          </a>
          <a
            href="https://wa.me/?text=Hi%20Sumit%2C%20I%20want%20to%20join%20the%20Unleash%20community!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/20 text-secondary-foreground/60 px-6 py-3 rounded-lg transition-all hover:bg-secondary-foreground/5 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Group
          </a>
        </div>
        <p className="text-secondary-foreground/30 text-xs mt-10">
          © {new Date().getFullYear()} Unleash with Sumit. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ExitSection;
