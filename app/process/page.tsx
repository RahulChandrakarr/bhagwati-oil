import ProcessHero from "./components/ProcessHero";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyProcessMatters from "./components/WhyProcessMatters";
import CertifiedExcellence from "./components/CertifiedExcellence";
import Footer from "../components/Footer";

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <ProcessTimeline />
      <WhyProcessMatters />
      <CertifiedExcellence />
      <Footer />
    </main>
  );
}
