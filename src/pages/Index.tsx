
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
  Terminal,
  Folder,
  FileText,
  Search,
  Grid3X3,
  Minimize2,
  Square,
  X,
  Menu,
  Home,
  Calendar,
  Clock
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
    <div className="min-h-screen bg-background ubuntu-workspace">
      {/* Ubuntu Top Bar */}
      <div className="ubuntu-topbar">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Activity className="h-4 w-4 text-orange-400" />
              <span>Network Engineer Portfolio</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs">
            <Clock className="h-3 w-3" />
            <span>{new Date().toLocaleTimeString()}</span>
            <span>•</span>
            <span className="ubuntu-badge success">Online</span>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-32px)]">
        {/* Ubuntu Sidebar/Dock */}
        <div className="w-16 ubuntu-sidebar flex flex-col items-center py-4 gap-3">
          <div className="ubuntu-dock-item active p-3 cursor-pointer" title="Portfolio">
            <Home className="h-5 w-5 text-white" />
          </div>
          <div className="ubuntu-dock-item p-3 cursor-pointer" title="Projects">
            <Folder className="h-5 w-5 text-white" />
          </div>
          <div className="ubuntu-dock-item p-3 cursor-pointer" title="Terminal">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div className="ubuntu-dock-item p-3 cursor-pointer" title="Files">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <div className="ubuntu-dock-item p-3 cursor-pointer" title="Settings">
            <Settings className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Main Navigation Panel */}
        <div className="w-64 ubuntu-sidebar border-r">
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-3 text-primary flex items-center gap-2">
              <Grid3X3 className="h-4 w-4" />
              Applications
            </h3>
            <div className="space-y-1">
              <div className="ubuntu-sidebar-item active flex items-center gap-2 text-sm">
                <Router className="h-4 w-4" />
                <span>Network Tools</span>
              </div>
              <div className="ubuntu-sidebar-item flex items-center gap-2 text-sm">
                <Network className="h-4 w-4" />
                <span>Topology Designer</span>
              </div>
              <div className="ubuntu-sidebar-item flex items-center gap-2 text-sm">
                <Wifi className="h-4 w-4" />
                <span>Wireless Manager</span>
              </div>
              <div className="ubuntu-sidebar-item flex items-center gap-2 text-sm">
                <Monitor className="h-4 w-4" />
                <span>Device Monitor</span>
              </div>
              <div className="ubuntu-sidebar-item flex items-center gap-2 text-sm">
                <Cable className="h-4 w-4" />
                <span>Cable Tester</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Main Window */}
          <div className="ubuntu-window mb-6">
            <div className="ubuntu-window-header">
              <div className="ubuntu-window-controls">
                <button className="ubuntu-window-control close"></button>
                <button className="ubuntu-window-control minimize"></button>
                <button className="ubuntu-window-control maximize"></button>
              </div>
              <div className="ml-4 flex-1 font-medium text-sm">
                Senior Network Engineer - Portfolio Overview
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="ubuntu-dock-item p-3">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">Senior Network Engineer</h1>
                  <p className="text-muted-foreground">
                    Specialized in enterprise network design, implementation, and troubleshooting
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">47</div>
                  <div className="text-muted-foreground">Active Devices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-muted-foreground">Network Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Technical Skills & Protocol Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="ubuntu-panel p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className={`ubuntu-badge ${skill.status === 'active' ? 'success' : skill.status === 'partial' ? 'warning' : 'error'}`}>
                      {skill.status}
                    </span>
                  </div>
                  <div className="ubuntu-progress h-2 mb-2">
                    <div 
                      className="ubuntu-progress-bar h-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{skill.level}% Proficiency</span>
                    <span>{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabbed Content */}
          <div className="ubuntu-window">
            <div className="ubuntu-window-header">
              <div className="ubuntu-window-controls">
                <button className="ubuntu-window-control close"></button>
                <button className="ubuntu-window-control minimize"></button>
                <button className="ubuntu-window-control maximize"></button>
              </div>
              <div className="ml-4 flex-1 font-medium text-sm">
                Project Manager - Network Topologies
              </div>
            </div>
            
            <Tabs defaultValue="projects" className="p-6">
              <TabsList className="ubuntu-panel border">
                <TabsTrigger value="projects" className="ubuntu-button">Network Topologies</TabsTrigger>
                <TabsTrigger value="certs" className="ubuntu-button">Certifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Active Network Projects
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="ubuntu-panel p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-primary text-lg font-semibold">{project.title}</h4>
                        <p className="text-muted-foreground mt-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <span className={`ubuntu-badge ${project.status === 'Running' ? 'success' : project.status === 'Testing' ? 'warning' : 'success'}`}>
                          {project.status}
                        </span>
                        <div className="text-sm text-muted-foreground">{project.connections} connections</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-sm mb-2">Devices:</h5>
                        <div className="space-y-1">
                          {project.devices.map((device, deviceIndex) => (
                            <div key={deviceIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {device}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-2">Protocols:</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.protocols.map((protocol, protocolIndex) => (
                            <span key={protocolIndex} className="ubuntu-badge text-xs">
                              {protocol}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="certs" className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Professional Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="ubuntu-panel p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold text-primary">{cert.name}</div>
                          <div className="text-sm text-muted-foreground">Expires: {cert.expiry}</div>
                        </div>
                        <span className={`ubuntu-badge ${cert.status === 'Valid' ? 'success' : 'warning'}`}>
                          {cert.status}
                        </span>
                      </div>
                      <div className="ubuntu-progress h-2 mb-1">
                        <div 
                          className="ubuntu-progress-bar h-full" 
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {cert.progress}% Complete
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Information */}
          <div className="ubuntu-panel p-6 mt-6">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
              <Settings className="h-5 w-5" />
              Contact Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Email Address:</span>
                </div>
                <div className="font-medium text-primary">engineer@ubuntu.network</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Phone Number:</span>
                </div>
                <div className="font-medium text-primary">+1.555.UBUNTU.1</div>
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
              <button className="ubuntu-button flex items-center gap-2 px-4 py-2">
                <Github className="h-4 w-4" />
                GitHub
              </button>
              <button className="ubuntu-button flex items-center gap-2 px-4 py-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </button>
              <button className="ubuntu-button primary flex items-center gap-2 px-4 py-2">
                <Download className="h-4 w-4" />
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
