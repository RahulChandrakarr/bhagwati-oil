"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function OurOtherProducts() {
  const products = [
    {
      image: "/images/home-page-images/our-other-products/657df9a366e4b426d1acbaa73f491a06d8961fed.png",
      name: "Boiled Rice",
      description: "Premium quality product",
    },
    {
      image: "/images/home-page-images/our-other-products/def0fa85c21688a85f70852b197c242cab5184e5 (1).png",
      name: "Boiled Swarna Rice",
      description: "Premium quality product",
    },
    {
      image: "/images/home-page-images/our-other-products/fa2d22c1cc10bfd8fcb3c7811d1a38c5f50c82d6.jpg",
      name: "White Broken Rice",
      description: "Premium quality product",
    },
    {
      image: "/images/home-page-images/our-other-products/af4ded2364ec283f2fb7ee4b07e197ac9abd37af.jpg",
      name: "White Rice",
      description: "Premium quality product",
    },
    {
      image: "/images/home-page-images/our-other-products/68460fcdbd92daf087eb8316ce68b104c3754508.jpg",
      name: "Maize",
      description: "Premium quality product",
    },
    {
      image: "/images/home-page-images/our-other-products/29c3c3a7b5cbd0d56cec5b65634059f8a8936c17.jpg",
      name: "Rice Bran Extract",
      description: "Premium quality product",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ color: "#556b2f" }}>
            Our Other Products
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Explore our complete range of quality products
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-80 bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 text-center">
                {/* Product Name */}
                <h3 className="text-slate-800 font-bold text-lg md:text-xl mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Purity Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src="/images/home-page-images/our-other-products/e6e84bb438711b208d0ee0c2184b60a725a3787d.png"
              alt="Our Purity Process - State-of-the-art food oil processing facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Title */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8" style={{ color: "#556b2f" }}>
              Our Purity Process
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                At Bhagwati Food Oil, we follow a meticulous cold-pressed extraction process that preserves the natural goodness of every seed. Our state-of-the-art facilities combine traditional wisdom with modern technology to ensure the highest quality standards.
              </p>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Every batch undergoes rigorous quality testing and is certified by leading food safety authorities. We maintain complete transparency in our sourcing and manufacturing process, ensuring that what reaches your kitchen is nothing but pure, natural oil free from any additives or chemicals.
              </p>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-white rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 shadow-md" style={{ backgroundColor: "#556b2f" }}
              >
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold">FSSAI Certified</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-white rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 shadow-md" style={{ backgroundColor: "#556b2f" }}
              >
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold">ISO Compliant</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="text-white rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 shadow-md" style={{ backgroundColor: "#556b2f" }}
              >
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold">Lab Tested</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

