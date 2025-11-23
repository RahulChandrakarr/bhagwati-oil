import ProcessHero from "./components/ProcessHero";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyProcessMatters from "./components/WhyProcessMatters";
import CertifiedExcellence from "./components/CertifiedExcellence";


export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <ProcessTimeline />
      <WhyProcessMatters />
      <CertifiedExcellence />
      
    </main>
  );
}
