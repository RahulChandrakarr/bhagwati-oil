import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faDroplet, faAward } from "@fortawesome/free-solid-svg-icons";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: faLeaf,
      title: "100% Natural Oils",
      description: "Our oils are extracted from the finest natural sources, ensuring purity and authentic taste in every drop.",
      iconBg: "bg-green-100",
    },
    {
      icon: faDroplet,
      title: "Cold Pressed Process",
      description: "Traditional cold-pressed method preserves natural nutrients, vitamins, and the rich flavor of our oils.",
      iconBg: "bg-green-100",
    },
    {
      icon: faAward,
      title: "Trusted Since 1985",
      description: "Four decades of excellence and trust, serving families across India with premium quality cooking oils.",
      iconBg: "bg-green-100",
    },
  ];

  return (
    <section className="bg-[#ECFCCB] py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <h2 className="heading-serif text-slate-800 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-slate-600 text-center text-base md:text-lg max-w-2xl mx-auto">
            Committed to delivering excellence through tradition, quality, and natural goodness.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-6`}>
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-slate-900 h-8 text-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-slate-800 font-bold text-lg md:text-xl mb-3 md:mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


