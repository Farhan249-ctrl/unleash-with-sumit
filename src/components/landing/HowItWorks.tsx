import { MousePointerClick, CreditCard, Camera, Gift } from "lucide-react";
import { motion } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/917070669435?text=Hi%20Sumit,%20I%20just%20ordered%20the%20book!%20Here%20is%20my%20screenshot%20for%20the%20bonuses";
const FLIPKART_LINK = "https://dl.flipkart.com/s/y8iqsbNNNN";

const steps = [
  { icon: MousePointerClick, step: "1", title: "Click 'Buy Now'", desc: "Choose Flipkart or Amazon", isActionable: true },
  { icon: CreditCard, step: "2", title: "Purchase the Book", desc: "Complete your order (₹349)", isActionable: false },
  { icon: Camera, step: "3", title: "Screenshot Your Order", desc: "Send it on WhatsApp", isActionable: true },
  { icon: Gift, step: "4", title: "Get Bonuses Instantly", desc: "We'll send everything within 24hrs", isActionable: false },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
          How to Get Your <span className="text-[#FACC15]">Bonuses</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, step, title, desc, isActionable }, index) => (
            <div key={step} className="text-center">
              {/* Interactive Icon Container */}
              {isActionable ? (
                <motion.div
                  className="w-14 h-14 bg-[#FACC15] rounded-2xl flex items-center justify-center mx-auto mb-3 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={() => {
                    if (index === 0) {
                      window.open(FLIPKART_LINK, '_blank');
                    } else if (index === 2) {
                      window.open(WHATSAPP_LINK, '_blank');
                    }
                  }}
                >
                  <Icon className="w-7 h-7 text-[#0A0A0A]" />
                </motion.div>
              ) : (
                <div className="w-14 h-14 bg-[#FACC15] rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-7 h-7 text-[#0A0A0A]" />
                </div>
              )}
              
              <div className="text-xs font-bold text-[#FACC15] mb-1">STEP {step}</div>
              <h3 className="font-display font-bold text-sm mb-1">
                {isActionable && index === 0 ? (
                  <motion.a
                    href={FLIPKART_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FACC15] transition-colors inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    {title}
                    <motion.div
                      className="h-0.5 bg-[#FACC15] mt-0.5 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ) : (
                  <span className="text-white">{title}</span>
                )}
              </h3>
              <p className="text-[#E5E7EB]/60 text-xs">
                {index === 2 ? (
                  <motion.a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FACC15] hover:text-[#FACC15]/80 transition-colors underline inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send it on WhatsApp
                  </motion.a>
                ) : (
                  desc
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
