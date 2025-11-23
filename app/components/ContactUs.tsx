"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <section className="bg-[#F9F9F3] py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#8B9D42] text-white mb-6">
             <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C3E2E] mb-4">
            Let&apos;s Connect
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
             <div className="h-px w-12 bg-[#D4AF37]"></div>
             <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
             <div className="h-px w-12 bg-[#D4AF37]"></div>
          </div>
          <p className="text-[#5C6B5E] max-w-xl mx-auto text-lg">
            We&apos;re here to answer your questions and discuss how we can serve
            you better.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 max-w-6xl mx-auto">
          {/* Info Card - Left Column */}
          <div className="lg:col-span-5 bg-[#6B8E4E] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            {/* Decorative Circle */}
            <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full border-2 border-white/20"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full border-2 border-white/10"></div>

            <h2 className="text-2xl font-serif mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-1">
                    PHONE
                  </p>
                  <p className="font-medium">+91 9826161357</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-1">
                    EMAIL
                  </p>
                  <p className="font-medium">bhagwati.solvents@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-1">
                    LOCATION
                  </p>
                  <p className="font-medium leading-relaxed">
                    Bhagwati Industries, Village- Bemsara,
                    <br />
                    Mahasamund (C.G.) - 493445
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-1">
                    HOURS
                  </p>
                  <p className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm opacity-80">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-[#2C3E2E] uppercase tracking-wider mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-[#F9F9F3] border-none rounded-lg px-4 py-3 text-[#2C3E2E] placeholder-gray-400 focus:ring-2 focus:ring-[#6B8E4E] focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-[#2C3E2E] uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#F9F9F3] border-none rounded-lg px-4 py-3 text-[#2C3E2E] placeholder-gray-400 focus:ring-2 focus:ring-[#6B8E4E] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-[#2C3E2E] uppercase tracking-wider mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#F9F9F3] border-none rounded-lg px-4 py-3 text-[#2C3E2E] placeholder-gray-400 focus:ring-2 focus:ring-[#6B8E4E] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-[#2C3E2E] uppercase tracking-wider mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your inquiry..."
                  className="w-full bg-[#F9F9F3] border-none rounded-lg px-4 py-3 text-[#2C3E2E] placeholder-gray-400 focus:ring-2 focus:ring-[#6B8E4E] focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B8E4E] text-white font-semibold py-4 rounded-xl hover:bg-[#5A7A40] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#6B8E4E]/20"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E2E] mb-4">
            Visit Us
          </h2>
          <p className="text-[#5C6B5E]">
            Find us in the heart of Raipur, Chhattisgarh
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl relative bg-gray-200">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d82.097!3d21.107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzI1LjIiTiA4MsKwMDUnNDkuMiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
             ></iframe>
             {/* Overlay for custom pin look if needed, but iframe is better */}
             <div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
