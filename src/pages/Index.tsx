import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import UnifiedViewSection from "@/components/UnifiedViewSection";
import ValuePropSection from "@/components/ValuePropSection";
import IntegrationSection from "@/components/IntegrationSection";
import CompetitiveLandscape from "@/components/CompetitiveLandscape";
import IntelligenceLayerSection from "@/components/IntelligenceLayerSection";
import ComplexSpendSection from "@/components/ComplexSpendSection";
import ContractsSection from "@/components/ContractsSection";
import ROISection from "@/components/ROISection";
import PioneerSection from "@/components/PioneerSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <UnifiedViewSection />
      <ValuePropSection />
      <IntegrationSection />
      <CompetitiveLandscape />
      <IntelligenceLayerSection />
      <ComplexSpendSection />
      <ContractsSection />
      <ROISection />
      <PioneerSection />
    </div>
  );
};

export default Index;
