
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const navigate = useNavigate();

  const experience = [
    {
      id: "senior-network-engineer",
      position: "Senior Network Engineer",
      company: "TechCorp Solutions",
      period: "2022-Present",
      status: "Current",
      responsibilities: ["Design and implement enterprise network infrastructure", "Manage SD-WAN deployments", "Lead network security initiatives"]
    },
    {
      id: "network-engineer",
      position: "Network Engineer",
      company: "DataFlow Networks",
      period: "2020-2022",
      status: "Completed",
      responsibilities: ["Configure and maintain Cisco equipment", "Troubleshoot network issues", "Implement QoS policies"]
    },
    {
      id: "junior-network-technician",
      position: "Junior Network Technician",
      company: "NetSys Inc.",
      period: "2018-2020",
      status: "Completed",
      responsibilities: ["Monitor network performance", "Assist with hardware installations", "Document network configurations"]
    }
  ];

  return (
    <div id="experience" className="mb-8">
      <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
        <Briefcase className="h-5 w-5" />
        Professional Experience
      </h3>
      {experience.map((exp, index) => (
        <Card 
          key={index} 
          className="eve-terminal border-primary/30 mb-4 cursor-pointer hover:border-primary/50 transition-colors hover:eve-glow"
          onClick={() => navigate(`/experience/${exp.id}`)}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-primary font-mono">{exp.position}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {exp.company} • {exp.period}
                </CardDescription>
              </div>
              <div className={`font-mono text-sm ${exp.status === 'Current' ? 'text-green-400' : 'text-blue-400'}`}>
                ● {exp.status}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceSection;
