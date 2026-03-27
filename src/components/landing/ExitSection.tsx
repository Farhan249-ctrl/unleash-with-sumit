import { Instagram, MessageCircle } from "lucide-react";

const ExitSection = () => {
  return (
    <section className="py-12 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-[#E5E7EB]/50 text-sm mb-3">Not ready to buy yet?</p>
        <h3 className="font-display text-xl font-bold mb-4 text-white">
          Join the <span className="text-[#FACC15]">Unleash Community</span> — It's Free
        </h3>
        <p className="text-[#E5E7EB]/60 text-sm mb-6">
          Follow for daily tips on communication, confidence, and career growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.instagram.com/unleashwithsumit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#FACC15]/30 text-[#FACC15] px-6 py-3 rounded-xl font-semibold transition-all duration-200 bg-zinc-900/50 backdrop-blur-sm hover:bg-[#FACC15]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] active:scale-95 w-full sm:w-auto"
          >
            <Instagram className="w-5 h-5" />
            @unleashwithsumit
          </a>
          <a
            href="https://chat.whatsapp.com/DtQcuAcQz5e9WUhC3bHTav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 bg-[#25D366]/5 backdrop-blur-sm hover:bg-[#25D366]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-95 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            Join WhatsApp Group
          </a>
        </div>
        <p className="text-[#E5E7EB]/30 text-xs mt-10">
          {new Date().getFullYear()} Unleash with Sumit. All rights reserved.
          © {new Date().getFullYear()} Unleash with Sumit. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ExitSection;
