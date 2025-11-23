import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/home-page-images/reviews/2e420f89204ac35d728c1828ef513c634e032f14.png",
      name: "Priya Sharma",
      location: "Bilaspur",
      quote: "Bhagwati oils have been a staple in our kitchen for over 10 years. The authentic taste and purity is unmatched.",
    },
    {
      image: "/images/home-page-images/reviews/7ceed0acfdb9d363d2abcd51ed091cc8a6f85d73.jpg",
      name: "Rajesh Sharma",
      location: "Mumbai",
      quote: "The quality speaks for itself. My family trusts Bhagwati for all our cooking needs. Highly recommended!",
    },
    {
      image: "/images/home-page-images/reviews/d056946457d46203a11b92dc3423e888d4890dc1.png",
      name: "Anjali Patel",
      location: "Bhiliai",
      quote: "Pure, natural, and healthy - exactly what every family needs. Thank you Bhagwati for maintaining such high standards.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: "#556b2f" }}>
            Loved by Families Across India
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Explore our complete range of quality products
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-lg shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Profile Picture */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 md:mb-6 rounded-full overflow-hidden border-2 border-amber-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2" style={{ color: "#556b2f" }}>
                {testimonial.name}
              </h3>

              {/* Location */}
              <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6">
                {testimonial.location}
              </p>

              {/* Quote */}
              <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

