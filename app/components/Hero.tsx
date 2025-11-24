"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative  h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-page-images/7892cf9e7319df829ff3a5612226f9e670d3eb4a.png"
          alt="Khushi Gold and Anandam Rice Bran Oil"
          className="h-screen w-full object-cover object-center md:object-cover"
          fill
          quality={90}
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Main Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2">
              <span className="text-white">Enriched by nature</span>
              <br />
              <span className="yellow-theme-color">trusted by families</span>
            </h1>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-10 flex flex-col md:flex-row gap-3 md:gap-6"
          >
            <div className="flex items-center gap-3 yellow-theme-color text-lg md:text-xl font-semibold">
              <span className="yellow-theme-color">•</span>
              <span>PURITY</span>
            </div>
            <div className="flex items-center gap-3 yellow-theme-color text-lg md:text-xl font-semibold">
              <span className="yellow-theme-color">•</span>
              <span>NUTRITION</span>
            </div>
            <div className="flex items-center gap-3 yellow-theme-color text-lg md:text-xl font-semibold">
              <span className="yellow-theme-color">•</span>
              <span>TASTE</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
          >
            <Link
              href="/products"
              className="px-6 py-3 md:px-8 md:py-4 yellow-theme-bg text-white font-semibold rounded-full text-base md:text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Products</span>
              <span>→</span>
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full text-base md:text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
              <span>Know Our Story</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            <div className="px-2 py-2 md:px-4 md:py-2 bg-[#D4AF37]/80 backdrop-blur-3xl rounded-full flex items-center gap-2">
              <span className="text-green-600 text-xs">✓</span>
              <span className="text-white font-semibold text-sm md:text-xs">100% Natural</span>
            </div>
            <div className="px-2 py-2 md:px-4 md:py-2 bg-[#D4AF37]/80 backdrop-blur-3xl rounded-full flex items-center gap-2">
              <span className="text-yellow-500 text-xs">★</span>
              <span className="text-white font-semibold text-sm md:text-xs">40+ Years Trust</span>
            </div>
            <div className="px-2 py-2 md:px-4 md:py-2 bg-[#D4AF37]/80 backdrop-blur-3xl rounded-full flex items-center gap-2">
              <span className="text-red-500 text-xs">❤️</span>
              <span className="text-white font-semibold text-sm md:text-xs">10K+ Happy Families</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

