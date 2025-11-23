import AboutUsHero from "./componets/AboutUsHero";
import VisionMission from "./componets/VisionMission";
import OurLegacyTimeline from "./componets/OurLegacyTimeline";
import AboutTheBrand from "./componets/AboutTheBrand";
import AvailableAcrossIndia from "./componets/AvailableAcrossIndia";
import AboutUsCTA from "./componets/AboutUsCTA";

export default function AboutUs() {
  return (
    <main className="w-screen overflow-x-hidden overflow-y-hidden">
      <AboutUsHero />
      <VisionMission />
      <OurLegacyTimeline />
      <AboutTheBrand />
      <AvailableAcrossIndia />
      <AboutUsCTA />
    </main>
  );
}

