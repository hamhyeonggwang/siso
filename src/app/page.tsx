import { LandingPopup } from "@/components/layout/landing-popup";
import { CaregiverConcernsSection } from "@/components/sections/caregiver-concerns-section";
import { ConsultationStepsSection } from "@/components/sections/consultation-steps-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstitutionPartnershipSection } from "@/components/sections/institution-partnership-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesIntroSection } from "@/components/sections/services-intro-section";
import { SnsSection } from "@/components/sections/sns-section";
import { EducationSection } from "@/components/sections/education-section";
import { ApplicationHubSection } from "@/components/sections/application-hub-section";

export default function HomePage() {
  return (
    <>
      <LandingPopup />
      {/* 핵심 전환 흐름: 공감 → 이해 → 상담 연결 */}
      <HeroSection />
      <CaregiverConcernsSection />
      <ServicesIntroSection />
      <ConsultationStepsSection />
      {/* 부가 정보: 철학, 기관협력, SNS, 교육 */}
      <PhilosophySection />
      <InstitutionPartnershipSection />
      <SnsSection />
      <EducationSection />
      <ApplicationHubSection />
    </>
  );
}
