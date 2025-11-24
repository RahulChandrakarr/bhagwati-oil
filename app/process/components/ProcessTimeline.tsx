"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Seed Selection",
      subtitle: "Premium Sourcing",
      description:
        "We carefully select the finest quality seeds from trusted farmers across India, ensuring only the best raw materials for our oils.",
      details: ["40+ Years Legacy", "40+ Years Legacy", "40+ Years Legacy"],
      icon: "/images/smg/plant-01.png",
    },
    {
      number: "02",
      title: "Cold-Pressed Extraction",
      subtitle: "Temperature Control",
      description:
        "Our state-of-the-art cold-pressing technology preserves natural nutrients, flavor, and aroma without using heat or chemicals.",
      details: ["No Heat", "Chemical-Free", "Nutrient Retention"],
      icon: "/images/smg/Droplets.png",
    },
    {
      number: "03",
      title: "Quality Testing",
      subtitle: "Lab Certified",
      description:
        "Every batch undergoes rigorous laboratory testing to ensure purity, safety, and compliance with international standards.",
      details: ["Lab Certified", "Purity Tests", "Safety Standards"],
      icon: "/images/smg/FlaskConical.png",
    },
    {
      number: "04",
      title: "Natural Filtering",
      subtitle: "Pure & Clean",
      description:
        "We use natural filtration methods to remove impurities while maintaining the oil's nutritional value and authentic taste.",
      details: ["Natural Process", "Impurity Removal", "Taste Preservation"],
      icon: "/images/smg/filter.png",
    },
    {
      number: "05",
      title: "Hygienic Packaging",
      subtitle: "Food Grade",
      description:
        "Our oils are packaged in food-grade containers in a sterile environment to maintain freshness and extend shelf life.",
      details: ["Food-Grade", "Sterile Environment", "Freshness Sealed"],
      icon: "/images/smg/package.png",
    },
    {
      number: "06",
      title: "Quality Assurance",
      subtitle: "Final Check",
      description:
        "Final quality checks ensure every bottle meets our strict standards before reaching your kitchen with complete traceability.",
      details: ["Final Inspection", "Batch Tracking", "Quality Guarantee"],
      icon: "/images/smg/truck-delivery.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E2E] mb-4">
            Our Process
          </h2>
          <p className="text-[#5C6B5E] max-w-2xl mx-auto">
            From farm to table, every step is designed to deliver the purest and
            healthiest oil for your family.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl font-serif text-[#D4AF37] font-light">
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-serif text-[#2C3E2E] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#D4AF37] font-medium border-b-2 border-[#D4AF37] inline-block pb-1">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#5C6B5E] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 border border-[#556B2F] text-[#556B2F] text-xs font-medium rounded-full hover:bg-[#556B2F] hover:text-white transition-colors"
                        >
                          ✓ {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle with Icon */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-b from-[#556B2F] to-[#D4AF37] flex items-center justify-center shadow-lg z-10 p-3"
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain brightness-0 invert"
                    />
                  </motion.div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#F9F9F3] rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-[#2C3E2E] leading-relaxed">
              <span className="font-semibold">Committed to Excellence:</span> Our
              process is certified by leading food safety authorities, ensuring
              you receive only the best quality oil that meets international
              standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
