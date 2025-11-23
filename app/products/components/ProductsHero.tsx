import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-page-images/all-products.png"
          alt="Bhagwati Premium Products"
          className="h-screen w-full object-cover"
          width={1920}
          height={1080}
          quality={90}
          priority
        />
        {/* Overlay - 60% opacity */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl px-4">
          {/* Main Headline */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Our</span>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto my-3 md:my-4" />
              <span className="text-white">Premium Products</span>
            </h1>
          </div>

          {/* Body Text */}
          <div className="mb-8 md:mb-12">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              Discover our range of premium edible oils, crafted with care for your family's health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

