
import HeaderSection from "@/components/HeaderSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ConnectSection from "@/components/ConnectSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background eve-grid">
      {/* EVE-NG Style Header Bar */}
      <div className="eve-header-bar"></div>

      {/* Main Interface Container */}
      <div className="container mx-auto px-4 py-6">
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <ConnectSection />
      </div>
    </div>
  );
};

export default Index;
