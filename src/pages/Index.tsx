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
import Footer from "@/components/Footer";

const Index = () => {
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
      <Footer />
    </div>
  );
};

export default Index;
