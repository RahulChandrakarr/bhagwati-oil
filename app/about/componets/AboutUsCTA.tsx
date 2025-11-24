"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const statistics = [
  {
    number: "45+",
    label: "Years Legacy",
  },
  {
    number: "100%",
    label: "Pure & Natural",
  },
  {
    number: "1M+",
    label: "Happy Customers",
  },
];

export default function AboutUsCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#6B8E23" }}>
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 md:mb-3">
              Experience the Purity of{" "}
              <span className="text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl font-bold">
                Bhagwati
              </span>
            </h2>
          </motion.div>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-base md:text-lg mb-8 md:mb-10 leading-relaxed"
          >
            Join thousands of families who trust Bhagwati for their daily cooking needs
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16"
          >
            {/* Shop Now Button */}
            <Link
              href="/products"
              className="bg-white border border-gray-300 text-gray-800 text-base md:text-lg font-semibold rounded-lg px-6 md:px-8 py-3 md:py-4 flex items-center justify-center gap-3 hover:shadow-lg transition-all w-full sm:w-auto cursor-pointer"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 text-gray-800" />
              <span>Shop Now</span>
            </Link>

            {/* View Products Button */}
            <Link
              href="/products"
              className="bg-transparent border-2 border-[#D4AF37] text-white text-base md:text-lg font-semibold rounded-lg px-6 md:px-8 py-3 md:py-4 flex items-center justify-center gap-3 hover:bg-[#D4AF37]/10 transition-all w-full sm:w-auto cursor-pointer"
            >
              <span>View Products</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Statistics Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/90">
                  {stat.label}
                </div>
                {/* Vertical Divider */}
                {index < statistics.length - 1 && (
                  <div className="hidden md:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-px h-12 bg-white/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

