import Hero from "./components/Hero";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import CoreValues from "./components/CoreValues";
import WhyChooseBhagwati from "./components/WhyChooseBhagwati";
import StatsBanner from "./components/StatsBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import OurOtherProducts from "./components/OurOtherProducts";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatSetsUsApart />
      <CoreValues />
      <WhyChooseBhagwati />
      <StatsBanner />
      <FeaturedProducts />
      <OurOtherProducts />
      <Testimonials />
      <CTA />
    </main>
  );
}
