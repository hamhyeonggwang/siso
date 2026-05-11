import { LandingPopup } from "@/components/layout/landing-popup";
import { CaregiverConcernsSection } from "@/components/sections/caregiver-concerns-section";
import { ConsultationStepsSection } from "@/components/sections/consultation-steps-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstitutionPartnershipSection } from "@/components/sections/institution-partnership-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesIntroSection } from "@/components/sections/services-intro-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProgramExplorer } from "@/components/sections/program-explorer";
import { EducationSection } from "@/components/sections/education-section";
import { ApplicationHubSection } from "@/components/sections/application-hub-section";
import { YoutubeSection } from "@/components/sections/youtube-section";

export default function HomePage() {
  return (
    <>
      <LandingPopup />
      {/* 핵심 전환 흐름: 공감 → 이해 → 상담 연결 */}
      <HeroSection />
      <CaregiverConcernsSection />
      <ServicesIntroSection />
      <ConsultationStepsSection />
      {/* 부가 정보: 프로그램, 철학, 기관협력, 후기, 교육 */}
      <ProgramExplorer />
      <PhilosophySection />
      <InstitutionPartnershipSection />
      <TestimonialsSection />
      <EducationSection />
      <YoutubeSection />
      <ApplicationHubSection />
    </>
  );
}
