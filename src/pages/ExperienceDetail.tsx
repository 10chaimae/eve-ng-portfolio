
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = [
    {
      id: "senior-network-engineer",
      position: "Senior Network Engineer",
      company: "TechCorp Solutions",
      period: "2022-Present",
      status: "Current",
      responsibilities: ["Design and implement enterprise network infrastructure", "Manage SD-WAN deployments", "Lead network security initiatives"],
      fullDescription: "Leading network infrastructure projects for enterprise clients, focusing on scalable and secure network architectures. Responsible for the complete lifecycle of network implementations from planning to deployment and maintenance.",
      keyAchievements: [
        "Led the implementation of a city-wide fiber network serving 50,000+ users",
        "Reduced network downtime by 85% through proactive monitoring and redundancy planning",
        "Mentored junior engineers and established best practices for network documentation"
      ],
      technologies: ["Cisco ASR", "Juniper MX", "SD-WAN", "BGP", "MPLS", "Python"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
    },
    {
      id: "network-engineer",
      position: "Network Engineer", 
      company: "DataFlow Networks",
      period: "2020-2022",
      status: "Completed",
      responsibilities: ["Configure and maintain Cisco equipment", "Troubleshoot network issues", "Implement QoS policies"],
      fullDescription: "Responsible for day-to-day network operations and maintenance of enterprise network infrastructure. Specialized in Cisco technologies and network troubleshooting.",
      keyAchievements: [
        "Implemented QoS policies that improved VoIP call quality by 40%",
        "Automated routine network maintenance tasks using Python scripts",
        "Successfully migrated legacy network infrastructure to modern equipment"
      ],
      technologies: ["Cisco IOS", "OSPF", "EIGRP", "VLANs", "STP", "SNMP"],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop"
    },
    {
      id: "junior-network-technician",
      position: "Junior Network Technician",
      company: "NetSys Inc.",
      period: "2018-2020", 
      status: "Completed",
      responsibilities: ["Monitor network performance", "Assist with hardware installations", "Document network configurations"],
      fullDescription: "Entry-level position focused on learning network fundamentals and supporting senior engineers with network maintenance and documentation tasks.",
      keyAchievements: [
        "Developed comprehensive network documentation system",
        "Assisted in hardware refresh project affecting 200+ network devices",
        "Completed CCNA certification while maintaining full-time work schedule"
      ],
      technologies: ["Cisco Catalyst", "Network Monitoring", "Cable Management", "Documentation"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
    }
  ];

  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-background eve-grid flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold eve-blue-text mb-4">Experience Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background eve-grid">
      <div className="eve-header-bar"></div>
      
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-6 border-primary/50 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <Card className="eve-terminal border-primary/30 mb-6">
          <CardHeader>
            <CardTitle className="text-2xl eve-blue-text font-mono">{experience.position}</CardTitle>
            <p className="text-muted-foreground font-mono">{experience.company} • {experience.period}</p>
          </CardHeader>
          <CardContent>
            <img 
              src={experience.image} 
              alt={experience.position}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Role Overview</h3>
                <p className="text-muted-foreground">{experience.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.keyAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary/50 text-primary font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="eve-glow bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Experience Report (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceDetail;
