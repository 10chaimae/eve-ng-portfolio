
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
  Monitor,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Settings,
  Activity,
  Zap,
  Play,
  Square,
  RotateCcw,
  Layers,
  Grid3X3
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Network Design", level: 95, icon: Network, status: "active", category: "Routing" },
    { name: "Cisco IOS", level: 90, icon: Router, status: "active", category: "Switching" },
    { name: "Security Config", level: 85, icon: Wifi, status: "active", category: "Security" },
    { name: "VLAN Management", level: 88, icon: EthernetPort, status: "active", category: "Switching" },
    { name: "Wireless Setup", level: 82, icon: Smartphone, status: "partial", category: "Wireless" },
    { name: "Physical Topology", level: 78, icon: Cable, status: "inactive", category: "Physical" },
  ];

  const projects = [
    {
      title: "Corporate Network Lab",
      description: "Multi-building campus network with VLANs, inter-VLAN routing, and redundant links using STP.",
      devices: ["2 x 2960 Switches", "1 x 1941 Router", "4 x PCs", "2 x Servers"],
      status: "Running",
      connections: 12,
      protocols: ["STP", "VTP", "OSPF", "DHCP"]
    },
    {
      title: "WAN Connectivity Simulation",
      description: "Site-to-site connectivity using Frame Relay and PPP with routing protocols and NAT configuration.",
      devices: ["3 x 1941 Routers", "2 x Cloud-PT", "6 x PCs"],
      status: "Simulating",
      connections: 8,
      protocols: ["PPP", "Frame Relay", "EIGRP", "NAT"]
    },
    {
      title: "Wireless Infrastructure",
      description: "Enterprise wireless network with centralized authentication and guest access segmentation.",
      devices: ["2 x WLC2504", "4 x Access Points", "3 x 2960 Switches"],
      status: "Testing",
      connections: 15,
      protocols: ["802.11n", "WPA2", "RADIUS", "CAPWAP"]
    }
  ];

  const certifications = [
    { name: "CCNA", status: "Valid", expiry: "2025-03", progress: 100 },
    { name: "CompTIA Network+", status: "Valid", expiry: "2025-08", progress: 100 },
    { name: "CWNA", status: "Valid", expiry: "2024-12", progress: 90 },
    { name: "CCNP Enterprise", status: "In Progress", expiry: "2025-11", progress: 65 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Packet Tracer Style Title Bar */}
      <div className="pt-title-bar">
        <span>Network Engineer Portfolio - Cisco Packet Tracer Style</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="pt-connection-status connected">
            ● Online
          </div>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="pt-menu-bar">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>File</span>
          <span>Edit</span>
          <span>Options</span>
          <span>View</span>
          <span>Tools</span>
          <span>Extensions</span>
          <span>Help</span>
        </div>
      </div>

      {/* Main Toolbar */}
      <div className="pt-toolbar p-2 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="sm" className="pt-button h-8 px-3">
              <Play className="h-4 w-4 mr-1" />
              Realtime
            </Button>
            <Button size="sm" variant="outline" className="pt-button h-8 px-3">
              <Square className="h-4 w-4 mr-1" />
              Simulation
            </Button>
            <Button size="sm" variant="outline" className="pt-button h-8 px-3">
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <div className="h-6 w-px bg-border mx-2"></div>
            <Button size="sm" variant="outline" className="pt-button h-8 px-3">
              <Grid3X3 className="h-4 w-4 mr-1" />
              Grid
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="pt-button h-8 px-4">
              <Download className="mr-2 h-4 w-4" />
              Export Portfolio
            </Button>
            <Button variant="outline" className="pt-button h-8 px-4">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-full">
        {/* Left Sidebar - Device Panel */}
        <div className="w-64 pt-panel border-r">
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-3 text-primary">Network Devices</h3>
            <div className="space-y-2">
              <div className="pt-device-icon p-2 flex items-center gap-2 text-xs hover:bg-accent/50 cursor-pointer">
                <Router className="h-4 w-4 text-blue-600" />
                <span>Routers</span>
              </div>
              <div className="pt-device-icon p-2 flex items-center gap-2 text-xs hover:bg-accent/50 cursor-pointer">
                <Network className="h-4 w-4 text-blue-600" />
                <span>Switches</span>
              </div>
              <div className="pt-device-icon p-2 flex items-center gap-2 text-xs hover:bg-accent/50 cursor-pointer">
                <Wifi className="h-4 w-4 text-blue-600" />
                <span>Wireless</span>
              </div>
              <div className="pt-device-icon p-2 flex items-center gap-2 text-xs hover:bg-accent/50 cursor-pointer">
                <Monitor className="h-4 w-4 text-blue-600" />
                <span>End Devices</span>
              </div>
              <div className="pt-device-icon p-2 flex items-center gap-2 text-xs hover:bg-accent/50 cursor-pointer">
                <Cable className="h-4 w-4 text-blue-600" />
                <span>Connections</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 pt-workspace overflow-auto">
          
          {/* Professional Summary Panel */}
          <div className="mb-6">
            <Card className="pt-panel">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="pt-device-icon p-2">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-primary">Senior Network Engineer</CardTitle>
                    <CardDescription>
                      Specialized in enterprise network design, implementation, and troubleshooting
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">47</div>
                    <div className="text-muted-foreground">Active Devices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">99.9%</div>
                    <div className="text-muted-foreground">Network Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">15</div>
                    <div className="text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">4</div>
                    <div className="text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills and Expertise */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Technical Skills & Protocol Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="pt-panel">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <div className={`pt-connection-status ${skill.status === 'active' ? 'connected' : skill.status === 'partial' ? 'partial' : 'disconnected'}`}>
                        {skill.status}
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{skill.level}% Proficiency</span>
                      <span>{skill.category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Network Topology Projects */}
          <Tabs defaultValue="projects" className="mb-6">
            <TabsList className="pt-toolbar">
              <TabsTrigger value="projects" className="pt-button">Network Topologies</TabsTrigger>
              <TabsTrigger value="certs" className="pt-button">Certifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <Network className="h-5 w-5" />
                Active Network Projects
              </h3>
              {projects.map((project, index) => (
                <Card key={index} className="pt-panel hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="text-right space-y-1">
                        <div className={`pt-connection-status ${project.status === 'Running' ? 'connected' : project.status === 'Testing' ? 'partial' : 'connected'}`}>
                          {project.status}
                        </div>
                        <div className="text-sm text-muted-foreground">{project.connections} connections</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Devices:</h4>
                        <div className="space-y-1">
                          {project.devices.map((device, deviceIndex) => (
                            <div key={deviceIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              {device}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Protocols:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.protocols.map((protocol, protocolIndex) => (
                            <Badge key={protocolIndex} variant="outline" className="text-xs border-primary/50 text-primary">
                              {protocol}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="certs" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="pt-panel">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold text-primary">{cert.name}</div>
                          <div className="text-sm text-muted-foreground">Expires: {cert.expiry}</div>
                        </div>
                        <div className={`pt-connection-status ${cert.status === 'Valid' ? 'connected' : 'partial'}`}>
                          {cert.status}
                        </div>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        {cert.progress}% Complete
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Contact Information */}
          <Card className="pt-panel">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Connection Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>Email Address:</span>
                  </div>
                  <div className="font-medium text-primary">engineer@network.lab</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Phone Number:</span>
                  </div>
                  <div className="font-medium text-primary">+1.555.NET.WORK</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Location:</span>
                  </div>
                  <div className="font-medium text-primary">San Francisco, CA</div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="pt-button">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="pt-button">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="pt-button">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lab Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Status Bar */}
      <div className="pt-status-bar p-2 border-t">
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            <span>•</span>
            <span>Devices: 47</span>
            <span>•</span>
            <span>Active Connections: 35</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Simulation Mode: Real Time</span>
            <span>•</span>
            <span>Network Status: All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
