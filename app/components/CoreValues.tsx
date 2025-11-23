import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CoreValues() {
  const values = [
    {
      number: 1,
      title: "PURITY",
      subtitle: "Unadulterated Excellence",
      description:
        "Our oils are extracted from premium quality seeds using traditional methods, ensuring 100% purity without any artificial additives or preservatives.",
      features: ["Zero Additives", "Chemical-Free", "Lab Tested"],
      image: "/images/home-page-images/9736d35ef361acf4b0359282d60b27ce8bd103c0.jpg",
      imagePosition: "left",
    },
    {
      number: 2,
      title: "NUTRITION",
      subtitle: "Health in Every Meal",
      description:
        "Rich in essential fatty acids, vitamins E & K, and natural antioxidants, our cold-pressed oils support heart health, boost immunity, and enhance overall wellness.",
      features: ["Heart-Friendly", "Rich in Omega-3", "Vitamin Enriched"],
      image: "/images/home-page-images/4bae994a239f7c5e3b1cb367b4a43859fb811fc3.jpg",
      imagePosition: "right",
    },
    {
      number: 3,
      title: "TASTE",
      subtitle: "Authentic Flavour Profile",
      description:
        "Experience the rich, authentic taste that enhances every dish. From traditional Indian curries to modern fusion cuisine, our oils bring out the natural flavors.",
      features: ["Natural Flavor", "Rich Aroma", "Versatile Use"],
      image: "/images/home-page-images/48f2f0740a1cb30435287de5e05f39e344209bbc.jpg",
      imagePosition: "left",
    },
  ];

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Leaf Icon */}
          <div className="flex justify-center mb-3">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-green-600 text-xl h-8"
            />
          </div>
          
          {/* Our Promise to You */}
          <p className="text-slate-600 text-sm md:text-base mb-2">
            Our Promise to You
          </p>
          
          {/* Main Heading */}
          <h2 className="heading-serif text-slate-800 mb-4">
            Our Core Values
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Three pillars that define everything we do — from farm to your family's table.
          </p>
        </div>

        {/* Core Values Sections */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                value.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[800px] rounded-xl overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {/* Number Square */}
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {value.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-green-600 font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
                  {value.title}
                </h3>

                {/* Subtitle */}
                <p className="yellow-theme-color font-semibold text-base sm:text-lg md:text-xl mb-4">
                  {value.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3">
                  {value.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 sm:gap-3 text-slate-700"
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-600 flex-shrink-0 h-5 sm:h-6 md:h-8"
                      />
                      <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

