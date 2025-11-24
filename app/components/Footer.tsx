import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#2E3A29] text-[#B8C5B6] py-12 md:py-16 footer-text">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">


          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block cursor-pointer">
              <Image
                src="/images/home-page-images/bfb378934ebd7dee98e8e5cc11312636fda7bdd1.png"
                alt="Bhagwati Industries"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              <span className="text-[#D4AF37] font-semibold" style={{ color: '#D4AF37' }}>Enrich by nature, trusted by families</span>
              <br />
              <br />
              100% pure, cold-pressed oils — bringing health and authenticity to
              every kitchen.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#B8C5B6] flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#B8C5B6] flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#B8C5B6] flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-6 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors cursor-pointer">
                  Bhagwati Khushi Tin
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors cursor-pointer">
                  Anandam Tin
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors cursor-pointer">
                  Refined Oil Pouch
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors cursor-pointer">
                  Refined Oil Bottle
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-6 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors cursor-pointer">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-white transition-colors cursor-pointer">
                    Our Process
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-6 text-sm uppercase tracking-wider">
                Support
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors cursor-pointer">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-6 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>+91 9826161357</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>bhagwati.solvents@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-4 h-4 mt-1 text-[#D4AF37]"
                />
                <span>
                  Bhagwati Industries, Village- Bemsara, Mahasamund (C.G.) -
                  493445
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3D5240] mt-12 pt-8 text-center text-xs text-[#8A9A8C]">
          <p>
            © 2025 Bhagwati Food Oil. All Rights Reserved. Made with{" "}
            <span className="text-red-500">♥</span> and Purity in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
