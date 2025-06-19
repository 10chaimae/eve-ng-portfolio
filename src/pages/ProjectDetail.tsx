
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "enterprise-core",
      title: "Enterprise Core Network",
      description: "Multi-site MPLS network with BGP routing and redundant paths. Implemented using Cisco ASR routers and Nexus switches.",
      tech: ["MPLS", "BGP", "OSPF", "QoS"],
      fullDescription: "This project involved designing and implementing a comprehensive enterprise core network infrastructure spanning multiple geographical locations. The network utilizes MPLS technology for efficient traffic routing and includes BGP for inter-AS routing, OSPF for internal routing, and advanced QoS policies to ensure optimal performance for critical business applications.",
      challenges: "Managing traffic prioritization across diverse network segments while maintaining 99.9% uptime requirements.",
      outcomes: "Successfully reduced network latency by 35% and improved overall network reliability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    },
    {
      id: "datacenter-virtualization", 
      title: "Data Center Virtualization",
      description: "VMware vSphere environment with distributed switching and network automation using Python and Ansible.",
      tech: ["VMware", "vSphere", "Python", "Ansible"],
      fullDescription: "Complete virtualization of a data center environment using VMware vSphere with automated deployment and management through Python scripting and Ansible playbooks. The project included implementing distributed switching, storage virtualization, and automated disaster recovery procedures.",
      challenges: "Migrating legacy physical infrastructure to virtualized environment with zero downtime.",
      outcomes: "Achieved 60% reduction in hardware costs and 90% faster deployment times for new services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
    },
    {
      id: "sdwan-implementation",
      title: "SD-WAN Implementation",
      description: "Cisco SD-WAN deployment across 15 branch offices with centralized policy management and traffic optimization.",
      tech: ["SD-WAN", "vEdge", "vManage", "Orchestration"],
      fullDescription: "Large-scale SD-WAN deployment utilizing Cisco's SD-WAN solution across 15 branch offices. The implementation included centralized policy management through vManage, automated provisioning of vEdge devices, and intelligent traffic steering based on application requirements and network conditions.",
      challenges: "Coordinating simultaneous deployment across multiple locations while maintaining business continuity.",
      outcomes: "Improved application performance by 45% and reduced WAN costs by 30%.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop"
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background eve-grid flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold eve-blue-text mb-4">Project Not Found</h1>
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
            <CardTitle className="text-2xl eve-blue-text font-mono">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Project Overview</h3>
                <p className="text-muted-foreground">{project.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-primary/50 text-primary font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Challenges</h3>
                <p className="text-muted-foreground">{project.challenges}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold eve-blue-text mb-2">Outcomes</h3>
                <p className="text-muted-foreground">{project.outcomes}</p>
              </div>
              
              <Button className="eve-glow bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Project Report (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
