import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import UnifiedViewSection from "@/components/UnifiedViewSection";
import ValuePropSection from "@/components/ValuePropSection";
import IntelligenceLayerSection from "@/components/IntelligenceLayerSection";
import ComplexSpendSection from "@/components/ComplexSpendSection";
import ContractsSection from "@/components/ContractsSection";
import StakeholderSection from "@/components/StakeholderSection";
import PioneerSection from "@/components/PioneerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* 1. Hook: What we do */}
      <HeroSection />
      {/* 2. Problem: Why current solutions fail */}
      <ProblemSection />
      {/* 3. Solution: How Sanyya fixes it (3 steps) */}
      <SolutionSection />
      {/* 4. Proof: Show the 360° view in action */}
      <UnifiedViewSection />
      {/* 5. Deep Dive: The technology behind it */}
      <ValuePropSection />
      {/* 6. Integration: How it fits your stack */}
      <IntelligenceLayerSection />
      {/* 7. Advanced: Handle complex spend types */}
      <ComplexSpendSection />
      {/* 8. Services: Contracts & milestones */}
      <ContractsSection />
      {/* 9. Benefits: Who wins */}
      <StakeholderSection />
      {/* 10. CTA: Join the waitlist */}
      <PioneerSection />
      <Footer />
    </div>
  );
};

export default Index;
