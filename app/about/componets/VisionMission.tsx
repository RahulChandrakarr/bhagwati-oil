"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function VisionMission() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative"
          >
            {/* Golden-yellow top border */}
            <div className="h-1 bg-[#D4AF37] w-full" />
            
            <div className="p-6 md:p-8">
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <FontAwesomeIcon icon={faStar} className="text-white text-lg md:text-xl h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1a4d2e] mb-3 md:mb-4">
                Our Vision
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To enrich lives with healthy, heart-friendly oils crafted with care and innovation.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative"
          >
            {/* Olive-green top border */}
            <div className="h-1 bg-[#6B8E23] w-full" />
            
            <div className="p-6 md:p-8">
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#6B8E23] flex items-center justify-center">
                  <FontAwesomeIcon icon={faStar} className="text-white text-lg md:text-xl h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1a4d2e] mb-3 md:mb-4">
                Our Mission
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To become a trusted household name for premium edible oils, embodying health, quality, and sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

