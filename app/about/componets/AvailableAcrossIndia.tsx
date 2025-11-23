import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStore,
  faMap,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

const states = [
  "Chhattisgarh",
  "Madhya Pradesh",
  "Odisha",
  "Maharashtra",
];

const statistics = [
  {
    icon: faStore,
    number: "1000+",
    subtitle: "Retail Outlets",
    description: "Trusted stores across India",
  },
  {
    icon: faMap,
    number: "4",
    subtitle: "States Covered",
    description: "Trusted stores across India",
  },
  {
    icon: faIndustry,
    number: "2",
    subtitle: "Processing Units",
    description: "Rice & Oil manufacturing excellence",
  },
];

export default function AvailableAcrossIndia() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FDFDF7]">
      <div className="container">
        {/* Top Section: Heading and Description */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#556B2F] mb-4 md:mb-6">
            Available Across India
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our premium edible oils are trusted by homes across Chhattisgarh, Odisha, Maharashtra, and Madhya Pradesh – and now available on leading e-commerce platforms.
          </p>
        </div>

        {/* Middle Section: Map and State Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Left: Map of India */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 flex items-center justify-center">
            <Image
              src="/images/about-us/india-ma.png"
              alt="Map of India showing coverage areas"
              width={600}
              height={600}
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* Right: State Cards */}
          <div className="flex flex-col gap-4 md:gap-6">
            {states.map((state, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center gap-4 md:gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F5F5DC] flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#556B2F] h-8"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#556B2F]">
                  {state}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Statistics */}
        <div className="relative bg-white py-8 md:py-12">
          {/* Golden-yellow connecting line through icon centers */}
          <div className="hidden md:block absolute top-[64px] md:top-[88px] left-0 right-0 h-0.5 bg-[#D4AF37] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-center relative z-10"
              >
                {/* Icon with solid olive-green circle */}
                <div className="flex justify-center mb-4 md:mb-6 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#556B2F] flex items-center justify-center relative z-10">
                    <FontAwesomeIcon
                      icon={stat.icon}
                      className="text-white text-2xl md:text-3xl h-8"
                    />
                  </div>
                </div>
                {/* Number */}
                <div className="text-2xl font-bold text-black mb-2 md:mb-3">
                  {stat.number}
                </div>
                {/* Subtitle */}
                <h3 className="text-lg  font-semibold text-black mb-2">
                  {stat.subtitle}
                </h3>
                {/* Description */}
                <p className="text-sm  text-black">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

