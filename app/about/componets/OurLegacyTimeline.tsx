"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right" | "center";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1978",
    title: "Established in Excellence",
    description: "Bhagwati Industry begins as a family-run business, founded on principles of purity and quality.",
    side: "left",
  },
  {
    year: "1987",
    title: "First Manufacturing Unit",
    description: "Started rice manufacturing & processing in Raipur, marking the beginning of large-scale operations.",
    side: "right",
  },
  {
    year: "1998",
    title: "Export Milestone",
    description: "Began international rice exports via containers & bulk, bringing Indian quality to the world.",
    side: "left",
  },
  {
    year: "2002",
    title: "Takeover & Expansion",
    description: "Acquired PD Rice Udyog, significantly expanding our production capacity and market reach.",
    side: "right",
  },
  {
    year: "2018",
    title: "Market Leader",
    description: "Became the biggest non-basmati rice player after acquiring Dainik Bhaskar's mill, redefining industry standards.",
    side: "left",
  },
  {
    year: "2024",
    title: "Today – Global Reach",
    description: "Set new efficiency standards with Solvent Extraction & Refinery Plants, embracing sustainable innovation and expanding our global footprint with premium quality products.",
    side: "center",
  },
];

export default function OurLegacyTimeline() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FDFDF7]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-3 md:mb-4"
            style={{
              fontFamily: "var(--font-playfair-display), serif",
            }}
          >
            Our Legacy
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A heritage of excellence spanning over four decades
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 bg-[#D4AF37] top-0 bottom-0  hidden md:block" />

          {/* Timeline Cards */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => {
              const isLeft = event.side === "left";
              const isRight = event.side === "right";
              const isCenter = event.side === "center";
              const isLast = index === timelineEvents.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isCenter
                      ? "justify-center"
                      : isLeft
                      ? "md:justify-end md:pr-8 lg:pr-12"
                      : "md:justify-start md:pl-8 lg:pl-12"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D4AF37] z-10 hidden md:block ${
                      isLast ? "md:block" : ""
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`relative w-full md:w-[45%] lg:w-[48%] overflow-hidden ${
                      isCenter ? "md:w-[90%] lg:w-[85%] max-w-2xl" : ""
                    } bg-white rounded-lg shadow-sm p-6 md:p-8 ${
                      isLeft && !isCenter
                        ? "md:mr-auto"
                        : isRight && !isCenter
                        ? "md:ml-auto"
                        : ""
                    }`}
                  >

                   
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute -top-10 ${
                        isLeft && !isCenter
                          ? "-right-10"
                          : isRight && !isCenter
                          ? "-left-10"
                          : "right-0"
                      } w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full pointer-events-none`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Year */}
                      <div
                        className="mb-3 md:mb-4 text-[36px] md:text-[48px] lg:text-[72px] leading-[36px] md:leading-[48px] lg:leading-[72px]"
                        style={{
                          fontFamily: "var(--font-playfair-display), serif",
                          fontWeight: 400,
                          letterSpacing: "0px",
                        }}
                      >
                        <span className="text-[#D4AF37]">{event.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold text-[#556B2F] mb-2 md:mb-3">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-[#556B2F]/80 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

