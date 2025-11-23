export default function CertifiedExcellence() {
  const certifications = [
    "No Additives",
    "ISO Compliant",
    "Lab Tested",
    "100% Natural",
    "Chemical-Free",
  ];

  return (
    <section className="bg-[#6B8E4E] text-white py-16 md:py-20 rounded-3xl mx-4 md:mx-8 mb-16 px-6 md:px-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 font-[family-name:var(--font-poppins)]">
            Certified Excellence
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed opacity-95 mb-10 font-[family-name:var(--font-poppins)]">
            Our process is backed by leading industry certifications and rigorous
            quality standards
          </p>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <span className="text-[#D4AF37] text-sm">✓</span>
                <span className="font-medium text-sm md:text-base font-[family-name:var(--font-poppins)]">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
