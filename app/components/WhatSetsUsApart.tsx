"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faDroplet, faAward } from "@fortawesome/free-solid-svg-icons";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: faLeaf,
      title: "100% Natural Oils",
      description: "Our oils are extracted from the finest natural sources, ensuring purity and authentic taste in every drop.",
      iconBg: "bg-[#d4f4a7]",
    },
    {
      icon: faAward,
      title: "Trusted Since 1985",
      description: "Four decades of excellence and trust, serving families across India with premium quality cooking oils.",
      iconBg: "bg-[#d4f4a7]",
    },
    {
      icon: faDroplet,
      title: "Cold Pressed Process",
      description: "Traditional cold-pressed method preserves natural nutrients, vitamins, and the rich flavor of our oils.",
      iconBg: "bg-[#d4f4a7]",
    },
  ];

  return (
    <section className="bg-[#f0f9d0] py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="heading-serif text-slate-700 mb-4 text-3xl md:text-4xl lg:text-5xl">
            What Sets Us Apart
          </h2>
          <p className="text-slate-600 text-center text-base md:text-lg max-w-3xl mx-auto">
            Committed to delivering excellence through tradition, quality, and natural goodness.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8 md:p-10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-slate-700 h-7 w-7"
                />
              </div>

              {/* Title */}
              <h3 className="text-slate-700 font-semibold text-lg md:text-xl mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

