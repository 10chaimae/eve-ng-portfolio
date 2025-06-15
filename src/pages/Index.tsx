
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Network, 
  Server, 
  Wifi, 
  Cable, 
  Router, 
  EthernetPort,
  Antenna,
  WifiHigh,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Terminal,
  Activity,
  Zap,
  Settings,
  GraduationCap,
  Briefcase
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Network Topology Design", level: 95, icon: Network, status: "online" },
    { name: "Cisco IOS/NX-OS", level: 90, icon: Router, status: "online" },
    { name: "Security Implementation", level: 85, icon: Wifi, status: "online" },
    { name: "Virtual Lab Management", level: 88, icon: Server, status: "online" },
    { name: "Wireless Controllers", level: 82, icon: WifiHigh, status: "online" },
    { name: "Physical Infrastructure", level: 78, icon: Cable, status: "maintenance" },
  ];

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

  const education = [
    {
      degree: "Bachelor of Science in Network Engineering",
      institution: "San Francisco State University",
      year: "2018-2022",
      status: "Completed",
      gpa: "3.8/4.0"
    },
    {
      degree: "Associate Degree in Computer Networking",
      institution: "City College of San Francisco",
      year: "2016-2018",
      status: "Completed",
      gpa: "3.9/4.0"
    }
  ];

  const experience = [
    {
      position: "Senior Network Engineer",
      company: "TechCorp Solutions",
      period: "2022-Present",
      status: "Current",
      responsibilities: ["Design and implement enterprise network infrastructure", "Manage SD-WAN deployments", "Lead network security initiatives"]
    },
    {
      position: "Network Engineer",
      company: "DataFlow Networks",
      period: "2020-2022",
      status: "Completed",
      responsibilities: ["Configure and maintain Cisco equipment", "Troubleshoot network issues", "Implement QoS policies"]
    },
    {
      position: "Junior Network Technician",
      company: "NetSys Inc.",
      period: "2018-2020",
      status: "Completed",
      responsibilities: ["Monitor network performance", "Assist with hardware installations", "Document network configurations"]
    }
  ];

  const certifications = [
    { name: "CCNA", status: "Valid", expiry: "2025-03" },
    { name: "CompTIA Network+", status: "Valid", expiry: "2025-08" },
    { name: "CWNA", status: "Valid", expiry: "2024-12" },
    { name: "CompTIA Security+", status: "Valid", expiry: "2025-11" }
  ];

  return (
    <div className="min-h-screen bg-background eve-grid">
      {/* EVE-NG Style Header Bar */}
      <div className="eve-header-bar"></div>

      {/* Main Interface Container */}
      <div className="container mx-auto px-4 py-6">
        
        {/* Terminal Header */}
        <div className="eve-terminal rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-2">
              <div className="eve-status-dot"></div>
              <div className="eve-status-dot" style={{background: '#f59e0b', boxShadow: '0 0 10px #f59e0b'}}></div>
              <div className="eve-status-dot" style={{background: '#ef4444', boxShadow: '0 0 10px #ef4444'}}></div>
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">EVE-NG Network Engineer Portfolio v2.4.1</div>
            </div>
            <Terminal className="text-primary w-6 h-6" />
          </div>
          
          <div className="space-y-3">
            <div className="eve-terminal-text text-sm">
              admin@portfolio:~$ whoami
            </div>
            <div className="text-2xl font-bold eve-blue-text">
              Senior Network Engineer
            </div>
            <div className="text-lg text-muted-foreground font-mono">
              Building scalable network infrastructures with enterprise-grade solutions
            </div>
            <div className="eve-terminal-text text-sm">
              admin@portfolio:~$ status --system
            </div>
            <div className="flex gap-6 text-sm">
              <span className="text-green-400">● ONLINE</span>
              <span className="text-blue-400">Nodes: 47</span>
              <span className="text-green-400">Uptime: 99.9%</span>
              <span className="text-blue-400">Load: 0.45</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="eve-glow bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Settings className="mr-2 h-4 w-4" />
            Lab Access
          </Button>
        </div>

        {/* Skills and Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 eve-blue-text flex items-center gap-2">
            <Activity className="h-6 w-6" />
            Skills and Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="eve-terminal border-primary/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-mono text-sm">{skill.name}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${skill.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                  </div>
                  <Progress value={skill.level} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{skill.level}%</span>
                    <span className="font-mono">{skill.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects */}
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

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <Card key={index} className="eve-terminal border-primary/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-mono font-bold text-primary">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.year}</div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">● {edu.status}</div>
                  </div>
                  <div className="text-sm text-blue-400 font-mono">GPA: {edu.gpa}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
            <Briefcase className="h-5 w-5" />
            Professional Experience
          </h3>
          {experience.map((exp, index) => (
            <Card key={index} className="eve-terminal border-primary/30 mb-4">
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

        {/* Certifications & Connect */}
        <Tabs defaultValue="certs" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
            <TabsTrigger value="certs" className="font-mono">Certifications</TabsTrigger>
            <TabsTrigger value="connect" className="font-mono">Connect</TabsTrigger>
          </TabsList>
          
          <TabsContent value="certs" className="space-y-4 mt-6">
            <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="eve-terminal border-primary/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-mono font-bold text-primary">{cert.name}</div>
                        <div className="text-sm text-muted-foreground">Expires: {cert.expiry}</div>
                      </div>
                      <div className="text-green-400 font-mono text-sm">● {cert.status}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="connect" className="space-y-4 mt-6">
            <Card className="eve-terminal border-primary/30">
              <CardHeader>
                <CardTitle className="eve-blue-text font-mono flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Connection Parameters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="font-mono text-muted-foreground">email:</span>
                    </div>
                    <div className="font-mono text-primary">engineer@network.lab</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-mono text-muted-foreground">phone:</span>
                    </div>
                    <div className="font-mono text-primary">+1.555.NET.WORK</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-mono text-muted-foreground">location:</span>
                    </div>
                    <div className="font-mono text-primary">San Francisco, CA</div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6 pt-4 border-t border-primary/20">
                  <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 font-mono">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 font-mono">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 font-mono">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Lab Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
