import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";

const khushiSunflowerFeatures = [
  "Enriched with Omega 6 and Vitamins A, D, and E for heart health, immunity, and vitality",
  "Free from harmful argemone oil, ensuring safety for your family",
  "Light, non-sticky, and supports healthy cholesterol levels",
  "Advanced refining and antioxidant protection for premium quality and longer shelf life",
];

const khushiSunflowerPerfectFor = [
  "Everyday cooking, frying, sautéing, and baking",
  "Families seeking a balance of taste and health",
];

const anandamFeatures = [
  "Supports heart health and cholesterol management",
  "Delicate flavor that enhances any cuisine",
  "Lightweight and free from harmful fats",
];

const anandamPerfectFor = [
  "Cooking flavorful meals with a healthy twist",
  "Chefs and home cooks who value quality",
];

export default function OtherProducts() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container">
        {/* Khushi Gold Sunflower Oil Section */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
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
                  Sun Flower Oil
                </p>
              </div>

              {/* Tagline */}
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-4">
                Pure, light, and naturally enriched for your well-being
              </p>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Enriched with Omega 6 and Vitamins A, D, and E for heart health, immunity, and vitality.
              </p>

              {/* Key Features */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-gray-800 font-semibold text-lg md:text-xl mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {khushiSunflowerFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-[#556B2F] h-5 w-5 flex-shrink-0 mt-1"
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
                <h4 className="text-gray-800 font-semibold text-lg md:text-xl mb-4">
                  Perfect For
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {khushiSunflowerPerfectFor.map((item, index) => (
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
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="w-full max-w-md">
                <Image
                  src="/images/home-page-images/our-other-products/dubble-bottle.jpg"
                  alt="Khushi Gold Sunflower Oil Bottles"
                  width={600}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Anandam Rice Bran Oil Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <Image
                  src="/images/home-page-images/1a5eb5f6842d265a37c7b76528d331d427b540cc.png"
                  alt="Anandam Rice Bran Oil Tin"
                  width={600}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              {/* Product Title */}
              <div className="mb-4 md:mb-6">
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#556B2F] mb-2"
                  style={{
                    fontFamily: "var(--font-playfair-display), serif",
                  }}
                >
                  Anandam
                </h3>
                <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold">
                  Rice Bran Oil
                </p>
              </div>

              {/* Tagline */}
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-4">
                Perfect harmony of taste and health
              </p>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                With a focus on purity, it is carefully extracted and refined to preserve its natural goodness.
              </p>

              {/* Key Features */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-gray-800 font-semibold text-lg md:text-xl mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {anandamFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-[#556B2F] h-5 w-5 flex-shrink-0 mt-1"
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
                <h4 className="text-gray-800 font-semibold text-lg md:text-xl mb-4">
                  Perfect For
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {anandamPerfectFor.map((item, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

