export default function WhyProcessMatters() {
  const reasons = [
    {
      icon: "🌿",
      title: "Traditional Wisdom",
      description:
        "We honor time-tested cold-pressing methods passed down through generations, ensuring oils retain their natural nutrients and authentic flavors.",
    },
    {
      icon: "☠️",
      title: "Modern Standards",
      description:
        "State-of-the-art testing and quality control meet international certifications, guaranteeing safety and purity in every bottle.",
    },
    {
      icon: "💡",
      title: "Uncompromising Quality",
      description:
        "From seed selection to final packaging, our rigorous multi-stage process ensures only premium-grade oil reaches your kitchen.",
    },
  ];

  return (
    <section className="bg-[#F9F9F3] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2C3E2E] mb-4">
            Why Our Process Matters
          </h2>
          <p className="text-[#5C6B5E] max-w-2xl mx-auto">
            Our commitment to traditional cold-pressing ensures you get the
            healthiest, most flavorful oil possible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border-b-4 border-gradient-to-r from-[#556B2F] to-[#D4AF37] relative overflow-hidden"
              style={{
                borderImage: "linear-gradient(to right, #556B2F, #D4AF37) 1",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#556B2F] to-[#D4AF37] flex items-center justify-center text-2xl mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif text-[#5C6B5E] mb-3 font-[family-name:var(--font-poppins)]">
                {reason.title}
              </h3>
              <p className="text-[#5C6B5E] leading-relaxed text-sm font-[family-name:var(--font-poppins)]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
