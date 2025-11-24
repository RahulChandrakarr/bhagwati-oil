"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessHero() {
  const statsCards = [
    {
      icon: "/images/smg/symbol/pure&natural.png",
      value: "100%",
      label: "Pure & Natural",
      alt: "100% Pure & Natural"
    },
    {
      icon: "/images/smg/symbol/quality storage.png",
      value: "6",
      label: "Quality Stages",
      alt: "Quality Stages"
    },
    {
      icon: "/images/smg/symbol/zero-chemicals.png",
      value: "Zero",
      label: "Chemicals",
      alt: "Zero Chemicals"
    },
    {
      icon: "/images/smg/symbol/premium.png",
      value: "Premium",
      label: "Cold-Pressed",
      alt: "Premium Cold-Pressed"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#556B2F] via-[#6B8E23] to-[#556B2F] text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-[#D4AF37] text-lg">✦</span>
          <span className="text-sm font-medium">From Seed to Kitchen</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
        >
          Crafting Purity
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed opacity-95 mb-12"
        >
          Discover the meticulous journey of every drop of Bhagwati oil—from
          carefully selected seeds to the pure, premium oil that reaches your
          family&apos;s table.
        </motion.p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {statsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex justify-center mb-2">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-2xl font-bold mb-1">{card.value}</div>
              <div className="text-xs md:text-sm opacity-80">{card.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
