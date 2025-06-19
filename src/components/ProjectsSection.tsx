
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Core Network",
      description: "Multi-site MPLS network with BGP routing and redundant paths. Implemented using Cisco ASR routers and Nexus switches.",
      tech: ["MPLS", "BGP", "OSPF", "QoS"],
      status: "Active",
      nodes: 24,
      uptime: "99.9%"
    },
    {
      title: "Data Center Virtualization",
      description: "VMware vSphere environment with distributed switching and network automation using Python and Ansible.",
      tech: ["VMware", "vSphere", "Python", "Ansible"],
      status: "Running",
      nodes: 18,
      uptime: "99.7%"
    },
    {
      title: "SD-WAN Implementation", 
      description: "Cisco SD-WAN deployment across 15 branch offices with centralized policy management and traffic optimization.",
      tech: ["SD-WAN", "vEdge", "vManage", "Orchestration"],
      status: "Deployed",
      nodes: 15,
      uptime: "99.8%"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
        <Network className="h-5 w-5" />
        Active Network Projects
      </h3>
      {projects.map((project, index) => (
        <Card key={index} className="eve-terminal border-primary/30 hover:border-primary/50 transition-colors mb-4">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-primary font-mono">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">
                  {project.description}
                </CardDescription>
              </div>
              <div className="text-right text-sm space-y-1">
                <div className="text-green-400 font-mono">● {project.status}</div>
                <div className="text-blue-400 font-mono">{project.nodes} nodes</div>
                <div className="text-green-400 font-mono">{project.uptime}</div>
              </div>
            </div>
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
