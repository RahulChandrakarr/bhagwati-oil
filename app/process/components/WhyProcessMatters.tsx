"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyProcessMatters() {
  const reasons = [
    {
      icon: "/images/smg/symbol/Traditional_Wisdom.png",
      title: "Traditional Wisdom",
      description:
        "We honor time-tested cold-pressing methods passed down through generations, ensuring oils retain their natural nutrients and authentic flavors.",
    },
    {
      icon: "/images/smg/symbol/model_standards.png",
      title: "Modern Standards",
      description:
        "State-of-the-art testing and quality control meet international certifications, guaranteeing safety and purity in every bottle.",
    },
    {
      icon: "/images/smg/symbol/uncompromising_quality.png",
      title: "Uncompromising Quality",
      description:
        "From seed selection to final packaging, our rigorous multi-stage process ensures only premium-grade oil reaches your kitchen.",
    },
  ];

  return (
    <section className="bg-[#F9F9F3] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E2E] mb-4">
            Why Our Process Matters
          </h2>
          <p className="text-[#5C6B5E] max-w-2xl mx-auto">
            Our commitment to traditional cold-pressing ensures you get the
            healthiest, most flavorful oil possible.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Gradient bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#556B2F] via-[#8B9D42] to-[#D4AF37]"></div>
              
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#556B2F] to-[#D4AF37] flex items-center justify-center mb-6 p-2">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div className="mb-3">
                <h3 className="text-xl font-serif text-[#5C6B5E] mb-2 font-[family-name:var(--font-poppins)]">
                  {reason.title}
                </h3>
                {/* Gradient underline */}
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#556B2F] to-[#D4AF37]"></div>
              </div>
              <p className="text-[#5C6B5E] leading-relaxed text-sm font-[family-name:var(--font-poppins)]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
