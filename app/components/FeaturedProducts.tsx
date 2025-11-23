import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedProducts() {
  const products = [
    {
      image: "/images/home-page-images/f998572ac4603c6e81b76668ff3b411a5cbb3518.png",
      category: "HEALTHY CHOICE",
      categoryColor: "bg-green-100 text-green-700",
      name: "Groundnut Oil Jar 5 L",
      description: "Rich in nutrients and heart-friendly fats.",
      price: "₹ 1,099",
    },
    {
      image: "/images/home-page-images/cbff4c565288b07a88ff3975159517c647a3cdf1.jpg",
      category: "RESTAURANT & BULK USE",
      categoryColor: "bg-orange-100 text-orange-700",
      name: "Bhagwati Khushi Tin 15 L",
      description: "Perfect for deep frying & commercial kitchens.",
      price: "₹ 2,499",
    },
    {
      image: "/images/home-page-images/1a5eb5f6842d265a37c7b76528d331d427b540cc.png",
      category: "PREMIUM COLD-PRESSED BLEND",
      categoryColor: "bg-orange-100 text-orange-700",
      name: "Anandam 15 L Tin",
      description: "Rich taste & authentic aroma for every dish.",
      price: "₹ 2,899",
    },
    {
      image: "/images/home-page-images/335a1b52b54870a4c0bdd1e5307e26ec299e172e.jpg",
      category: "DAILY FRESHNESS PACK",
      categoryColor: "bg-green-100 text-green-700",
      name: "Refined Oil Pouch",
      description: "Light & convenient for every household.",
      price: "₹ 189 (1L)",
    },
    {
      image: "/images/home-page-images/cbff4c565288b07a88ff3975159517c647a3cdf1.jpg",
      category: "HOME ESSENTIAL",
      categoryColor: "bg-orange-100 text-orange-700",
      name: "Refined Oil Bottle",
      description: "Pure taste with freshness-sealed packaging.",
      price: "₹ 199",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#FFF2CE" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-serif text-slate-800 mb-4">
            Featured Products
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
            From households to industries — Bhagwati delivers purity in every drop.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-80 bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Category */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${product.categoryColor}`}
                >
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-slate-800 font-bold text-lg md:text-xl mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  {product.description}
                </p>

                {/* Price */}
                <p className="text-slate-800 font-bold text-2xl md:text-3xl mb-4">
                  {product.price}
                </p>

                {/* Buy Now Button */}
                <Link
                  href="/buy"
                  className="yellow-theme-bg text-white font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:shadow-md transition-all w-full"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
                  <span>Buy Now</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

