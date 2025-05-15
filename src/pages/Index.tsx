
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import TrainingSection from '@/components/TrainingSection';
import MentorSection from '@/components/MentorSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import EnrollmentForm from '@/components/EnrollmentForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-impacto-black">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <TrainingSection />
      <MentorSection />
      <CTASection />
      <FAQSection />
      <EnrollmentForm />
    </div>
  );
};

export default Index;
