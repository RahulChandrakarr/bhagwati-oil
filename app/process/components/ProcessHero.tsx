export default function ProcessHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#556B2F] via-[#6B8E23] to-[#556B2F] text-white py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-[#D4AF37] text-lg">✦</span>
          <span className="text-sm font-medium">From Seed to Kitchen</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
          Our Process
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed opacity-95 mb-12">
          Discover the meticulous journey of every drop of Bhagwati oil—from
          carefully selected seeds to the pure, premium oil that reaches your
          family&apos;s table.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-[#D4AF37] text-3xl mb-2">🏆</div>
            <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
            <div className="text-xs md:text-sm opacity-80">Pure & Natural</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-[#D4AF37] text-3xl mb-2">⚙️</div>
            <div className="text-3xl md:text-4xl font-bold mb-1">6</div>
            <div className="text-xs md:text-sm opacity-80">Quality Stages</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-[#D4AF37] text-3xl mb-2">🧪</div>
            <div className="text-3xl md:text-4xl font-bold mb-1">Zero</div>
            <div className="text-xs md:text-sm opacity-80">Chemicals</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="text-[#D4AF37] text-3xl mb-2">⭐</div>
            <div className="text-3xl md:text-4xl font-bold mb-1">Premium</div>
            <div className="text-xs md:text-sm opacity-80">Cold-Pressed</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 opacity-70">
          <p className="text-xs md:text-sm">Explore the journey</p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
