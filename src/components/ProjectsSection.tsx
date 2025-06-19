
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "enterprise-core",
      title: "Enterprise Core Network",
      description: "Multi-site MPLS network with BGP routing and redundant paths. Implemented using Cisco ASR routers and Nexus switches.",
      tech: ["MPLS", "BGP", "OSPF", "QoS"]
    },
    {
      id: "datacenter-virtualization",
      title: "Data Center Virtualization",
      description: "VMware vSphere environment with distributed switching and network automation using Python and Ansible.",
      tech: ["VMware", "vSphere", "Python", "Ansible"]
    },
    {
      id: "sdwan-implementation", 
      title: "SD-WAN Implementation",
      description: "Cisco SD-WAN deployment across 15 branch offices with centralized policy management and traffic optimization.",
      tech: ["SD-WAN", "vEdge", "vManage", "Orchestration"]
    }
  ];

  return (
    <div id="projects" className="mb-8">
      <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
        <Network className="h-5 w-5" />
        Active Network Projects
      </h3>
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className="eve-terminal border-primary/30 hover:border-primary/50 transition-colors mb-4 cursor-pointer hover:eve-glow"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <CardHeader>
            <CardTitle className="text-primary font-mono">{project.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="border-primary/50 text-primary font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;
