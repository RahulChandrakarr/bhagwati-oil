"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDiamond,
  faShield,
  faStar,
  faUtensils,
  faHeart,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const keyFeatures = [
  "Heart-friendly with good cholesterol properties",
  "Rich in antioxidants and phytosterols",
  "Anti-ageing benefits for a healthy lifestyle",
  "High smoke point, ideal for all types of cooking",
];

const perfectFor = [
  "Everyday cooking, frying, sautéing, and baking",
  "Families seeking a balance of taste and health",
];

const whySwitch = [
  {
    icon: faShield,
    label: "Good Oxidative Stability",
  },
  {
    icon: faStar,
    label: "Anti-Ageing",
  },
  {
    icon: faUtensils,
    label: "Tasty Food",
  },
  {
    icon: faHeart,
    label: "Good Cholesterol",
  },
  {
    icon: faLeaf,
    label: "Good Phytosterols",
  },
];

export default function FlagshipProducts() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#556B2F] mb-4"
            style={{
              fontFamily: "var(--font-playfair-display), serif",
            }}
          >
            Our Flagship Products
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <Image
                src="/images/about-us/f22673f81fae0f643877a07c58fbe0c8b464bce0.png"
                alt="Khushi GOLD Logo"
                width={400}
                height={400}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Product Title */}
            <div className="mb-4 md:mb-6">
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#556B2F] mb-2"
                style={{
                  fontFamily: "var(--font-playfair-display), serif",
                }}
              >
                Khushi Gold
              </h3>
              <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold">
                Rice Bran Oil
              </p>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Our flagship product designed for the modern Indian kitchen. Double-refined and enriched with oryzanol (13,000 ppm), offering unmatched health benefits while enhancing the taste of every dish.
            </p>

            {/* Key Features */}
            <div className="mb-6 md:mb-8">
              <ul className="space-y-3 md:space-y-4">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#D4AF37] h-5 w-5 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-700 text-base md:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perfect For */}
            <div className="mb-6 md:mb-8">
              <ul className="space-y-3 md:space-y-4">
                {perfectFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faDiamond}
                      className="text-[#D4AF37] h-4 w-4 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-700 text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Switch to Khushi Gold? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#FFF9E6] border border-[#D4AF37]/30 rounded-lg p-6 md:p-8"
            >
              <h4 className="text-xl md:text-2xl font-semibold text-[#556B2F] mb-6 text-center">
                Why Switch to Khushi Gold?
              </h4>
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                {whySwitch.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center mb-3 md:mb-4">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-white text-xl md:text-2xl h-8"
                      />
                    </div>
                    <p className="text-sm md:text-base text-gray-700 font-medium">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

