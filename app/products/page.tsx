import ProductsHero from "./components/ProductsHero";
import FlagshipProducts from "./components/FlagshipProducts";
import OtherProducts from "./components/OtherProducts";
import OurOtherProducts from "../components/OurOtherProducts";

export default function Products() {
  return (
    <main>
      <ProductsHero />
      <FlagshipProducts />
      <OtherProducts />
      <OurOtherProducts  />
    </main>
  );
}

