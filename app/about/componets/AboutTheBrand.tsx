import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHeart, faShield } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faLeaf,
    title: "Sustainability",
    description: "Eco-friendly practices",
  },
  {
    icon: faHeart,
    title: "Health",
    description: "Heart-friendly oils",
  },
  {
    icon: faShield,
    title: "Quality",
    description: "Certified purity",
  },
];

export default function AboutTheBrand() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column: About the Brand */}
          <div className="flex flex-col">
            {/* Title with golden line */}
            <div className="mb-6 md:mb-8">
              <div className="w-16 h-1 bg-[#D4AF37] mb-4 md:mb-5" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#556B2F]">
                About the Brand
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Bhagwati Industries is built on the foundation of quality, sustainability, and trust. Our products, sourced from the best raw materials, undergo strict quality checks to ensure purity in every drop.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                From our state-of-the-art manufacturing facilities to your kitchen, every step is carefully monitored to deliver excellence that families across India have trusted for decades.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#556B2F] flex items-center justify-center mb-3 md:mb-4">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-[#556B2F] text-xl md:text-2xl h-8"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[#556B2F] mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Product Logos */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {/* First Row: Khushi GOLD Logo - Full Width */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 flex items-center justify-center">
              <Image
                src="/images/about-us/bfb378934ebd7dee98e8e5cc11312636fda7bdd1 (1).png"
                alt="Khushi GOLD Logo"
                width={400}
                height={150}
                className="object-contain max-w-full h-auto"
              />
            </div>

            {/* Second Row: Two Logos Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Bhagwati Industries Logo */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 flex items-center justify-center">
                <Image
                  src="/images/about-us/80d2283b774dda134f89b35be2f0712c0e810c8a.png"
                  alt="Bhagwati Industries Logo"
                  width={400}
                  height={150}
                  className="object-contain max-w-full h-auto"
                />
              </div>

              {/* Amrit Anandam Logo */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 flex items-center justify-center">
                <Image
                  src="/images/about-us/f22673f81fae0f643877a07c58fbe0c8b464bce0.png"
                  alt="Amrit Anandam Logo"
                  width={400}
                  height={150}
                  className="object-contain max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

