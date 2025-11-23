import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faFlask,
  faHeart,
  faUsers,
  faAward,
  faLeaf,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseBhagwati() {
  const features = [
    {
      icon: faShield,
      metricNumber: "1000+",
      metricText: "CERTIFIED",
      title: "Certified Quality Standards",
      description:
        "FSSAI certified and ISO compliant processing ensures every bottle meets the highest quality benchmarks.",
      bullets: ["FSSAI Approved", "ISO 22000 Certified", "GMP Compliant"],
    },
    {
      icon: faFlask,
      metricNumber: "500+",
      metricText: "TESTS DAILY",
      title: "Rigorous Lab Testing",
      description:
        "Every batch undergoes comprehensive laboratory testing for purity, freshness, and nutritional value.",
      bullets: ["Purity Analysis", "Nutritional Testing", "Quality Control"],
    },
    {
      icon: faHeart,
      metricNumber: "1000+",
      metricText: "FARMERS",
      title: "Farm to Family",
      description:
        "Sourced directly from trusted farmers using sustainable practices, supporting local agriculture.",
      bullets: ["Direct Sourcing", "Fair Trade", "Sustainable"],
    },
    {
      icon: faUsers,
      metricNumber: "5M+",
      metricText: "FAMILIES",
      title: "Trusted by Millions",
      description:
        "Serving families across India for over 40 years with unwavering commitment to quality and health.",
      bullets: ["40+ Years Legacy", "Pan-India Presence", "Customer First"],
    },
    {
      icon: faAward,
      metricNumber: "15+",
      metricText: "AWARDS",
      title: "Industry Recognition",
      description:
        "Multiple awards for excellence in quality, innovation, and sustainable business practices.",
      bullets: ["Excellence Awards", "Innovation Leader", "Industry Pioneer"],
    },
    {
      icon: faLeaf,
      metricNumber: "ZERO",
      metricText: "WASTE",
      title: "Sustainable Practice",
      description:
        "Committed to eco-friendly processes that preserve nature while delivering premium quality.",
      bullets: ["Eco-Friendly", "Carbon Neutral", "Green Processing"],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#FFF2CE" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-serif mb-4" style={{ color: "#556B2F" }}>
            Why Choose Bhagwati?
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
            Discover the difference that four decades of expertise, unwavering quality standards, and dedication to purity make in every bottle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 md:p-8"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              {/* Icon and Metric Row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="rounded-2xl border p-3 flex items-center justify-center"
                  style={{ backgroundColor: "#556B2F", borderColor: "#556B2F" }}
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="h-6"
                    style={{ color: "#FFFFFF" }}
                  />
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className="text-xl font-normal"
                    style={{ color: "#D4AF37" }}
                  >
                    {feature.metricNumber}
                  </span>
                  <span className="text-base text-black font-thin">
                    {feature.metricText}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg md:text-xl mb-3"
                style={{ color: "#556B2F" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-center gap-2 text-slate-700 text-sm md:text-base"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: "#D4AF37" }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

