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

        {/* Main Content - Logo and Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto mb-12 md:mb-16">
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
            <div>
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
          </motion.div>
        </div>

        {/* Why Switch to Khushi Gold? - Full Width Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-[#FFF9E6] border border-[#D4AF37]/30 rounded-lg p-8 md:p-12 lg:p-16">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#556B2F] mb-8 md:mb-12 text-center">
              Why Switch to Khushi Gold?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {whySwitch.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center mb-4 md:mb-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

