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
            className="inline-flex items-center justify-center gap-2 border border-[#FACC15]/30 text-[#FACC15] px-6 py-3 rounded-lg transition-all hover:bg-[#FACC15]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] font-semibold"
          >
            <Instagram className="w-5 h-5" />
            @unleashwithsumit
          </a>
          <a
            href="https://chat.whatsapp.com/DtQcuAcQz5e9WUhC3bHTav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB]/20 text-[#E5E7EB]/60 px-6 py-3 rounded-lg transition-all hover:bg-[#E5E7EB]/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:border-[#FACC15]/50 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
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
