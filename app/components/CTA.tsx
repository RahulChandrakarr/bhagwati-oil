"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #D4AF37, #C9A55D)"
      }}
    >
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-white mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0px",
              textAlign: "center"
            }}
          >
            Bring Home the Purity of Bhagwati
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-base md:text-lg lg:text-xl mb-10 md:mb-12 leading-relaxed"
          >
            Experience the difference that quality makes. Choose health, choose tradition, choose Bhagwati.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            {/* Shop Now Button */}
            <Link
              href="/products"
              className="bg-white text-base md:text-lg font-semibold rounded-full px-8 py-4 md:px-10 md:py-5 flex items-center justify-center gap-3 hover:shadow-lg transition-all w-full sm:w-auto cursor-pointer"
              style={{ color: "#556b2f" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" style={{ color: "#556b2f" }} />
              <span>Shop Now</span>
            </Link>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white text-base md:text-lg font-semibold rounded-full px-8 py-4 md:px-10 md:py-5 flex items-center justify-center gap-3 hover:bg-white/10 transition-all w-full sm:w-auto cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

