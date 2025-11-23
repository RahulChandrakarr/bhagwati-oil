import Hero from "./components/Hero";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import CoreValues from "./components/CoreValues";
import WhyChooseBhagwati from "./components/WhyChooseBhagwati";
import StatsBanner from "./components/StatsBanner";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatSetsUsApart />
      <CoreValues />
      <WhyChooseBhagwati />
      <StatsBanner />
      <FeaturedProducts />
    </main>
  );
}
