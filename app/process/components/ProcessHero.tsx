import Image from "next/image";

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
          Crafting Purity
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
            <div className="flex justify-center mb-2">
              <Image
                src="/images/smg/symbol/pure&natural.png"
                alt="100% Pure & Natural"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-xs md:text-sm opacity-80">Pure & Natural</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/smg/symbol/quality storage.png"
                alt="Quality Stages"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl  font-bold mb-1">6</div>
            <div className="text-xs md:text-sm opacity-80">Quality Stages</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/smg/symbol/zero-chemicals.png"
                alt="Zero Chemicals"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl font-bold mb-1">Zero</div>
            <div className="text-xs md:text-sm opacity-80">Chemicals</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/smg/symbol/premium.png"
                alt="Premium Cold-Pressed"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl  font-bold mb-1">Premium</div>
            <div className="text-xs md:text-sm opacity-80">Cold-Pressed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
