"use client";

import { motion } from "framer-motion";

export default function CertifiedExcellence() {
  const certifications = [
    "No Additives",
    "ISO Compliant",
    "Lab Tested",
    "100% Natural",
    "Chemical-Free",
  ];

  return (
    <section className="bg-[#6B8E4E] text-white py-16 md:py-20 rounded-3xl mx-4 md:mx-8 mb-16 px-6 md:px-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 font-[family-name:var(--font-poppins)]"
          >
            Certified Excellence
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed opacity-95 mb-10 font-[family-name:var(--font-poppins)]"
          >
            Our process is backed by leading industry certifications and rigorous
            quality standards
          </motion.p>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <span className="text-[#D4AF37] text-sm">✓</span>
                <span className="font-medium text-sm md:text-base font-[family-name:var(--font-poppins)]">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
