"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/about-us-hero-sec.jpg"
          alt="Bhagwati Industries Manufacturing Facility"
          className="h-screen w-full object-cover"
          width={1920}
          height={1080}
          quality={90}
          priority
        />
        {/* Overlay - 60% opacity */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl px-4">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Crafting Purity</span>
              <br />
              <span className="yellow-theme-color">Since 1978</span>
            </h1>
          </motion.div>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              At Bhagwati Industries, we blend tradition with innovation to bring premium edible oils that enrich lives.
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link
              href="#journey"
              className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white font-semibold rounded-lg text-base md:text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:from-[#B8941F] hover:to-[#9A7A1A] cursor-pointer"
            >
              <span>Explore Our Journey</span>
              <span className="text-xl">↓</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

