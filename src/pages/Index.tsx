
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
  Clock,
  Shield,
  Eye,
  Skull,
  Lock,
  Unlock,
  Bug,
  Target,
  Crosshair
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Penetration Testing", level: 95, icon: Target, status: "active", category: "Offensive" },
    { name: "Network Analysis", level: 92, icon: Network, status: "active", category: "Recon" },
    { name: "Vulnerability Assessment", level: 88, icon: Bug, status: "active", category: "Assessment" },
    { name: "Wireless Hacking", level: 85, icon: Wifi, status: "active", category: "Wireless" },
    { name: "Social Engineering", level: 80, icon: Eye, status: "partial", category: "Human" },
    { name: "Forensic Analysis", level: 78, icon: Search, status: "inactive", category: "Forensics" },
  ];

  const projects = [
    {
      title: "Corporate Pentest Lab",
      description: "Full-scale penetration testing environment with multi-tier network architecture and various attack vectors.",
      tools: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "John", "Hashcat"],
      status: "Pwned",
      vulnerabilities: 47,
      severity: ["Critical", "High", "Medium", "Low"]
    },
    {
      title: "Wireless Security Assessment",
      description: "Enterprise WiFi security testing including WPA2/WPA3 cracking, evil twin attacks, and rogue AP detection.",
      tools: ["Aircrack-ng", "Reaver", "Wifite", "Kismet", "Hostapd"],
      status: "Scanning",
      vulnerabilities: 23,
      severity: ["High", "Medium", "Low"]
    },
    {
      title: "Web Application Security",
      description: "OWASP Top 10 vulnerability testing with custom exploit development and payload creation.",
      tools: ["SQLmap", "Nikto", "OWASP ZAP", "Gobuster", "Hydra"],
      status: "Exploiting",
      vulnerabilities: 31,
      severity: ["Critical", "High", "Medium"]
    }
  ];

  const certifications = [
    { name: "OSCP", status: "Valid", expiry: "2025-03", progress: 100 },
    { name: "CEH", status: "Valid", expiry: "2025-08", progress: 100 },
    { name: "CISSP", status: "Valid", expiry: "2024-12", progress: 90 },
    { name: "OSWE", status: "In Progress", expiry: "2025-11", progress: 65 }
  ];

  return (
    <div className="min-h-screen bg-background kali-workspace">
      {/* Kali Top Bar */}
      <div className="kali-topbar">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-bold kali-hacker-text">
              <Skull className="h-4 w-4 text-primary" />
              <span className="terminal-cursor">root@kali-portfolio</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs kali-hacker-text">
            <Activity className="h-3 w-3" />
            <span>{new Date().toLocaleTimeString()}</span>
            <span>•</span>
            <span className="kali-badge success">ONLINE</span>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-28px)]">
        {/* Kali Dock/Tools */}
        <div className="w-16 kali-sidebar flex flex-col items-center py-4 gap-3">
          <div className="kali-dock-item active p-3 cursor-pointer" title="Home Terminal">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="kali-dock-item p-3 cursor-pointer" title="Metasploit">
            <Target className="h-5 w-5" />
          </div>
          <div className="kali-dock-item p-3 cursor-pointer" title="Wireshark">
            <Network className="h-5 w-5" />
          </div>
          <div className="kali-dock-item p-3 cursor-pointer" title="Burp Suite">
            <Bug className="h-5 w-5" />
          </div>
          <div className="kali-dock-item p-3 cursor-pointer" title="Settings">
            <Settings className="h-5 w-5" />
          </div>
        </div>

        {/* Tool Navigation Panel */}
        <div className="w-64 kali-sidebar border-r">
          <div className="p-4">
            <h3 className="font-bold text-sm mb-3 text-primary flex items-center gap-2 kali-hacker-text">
              <Shield className="h-4 w-4" />
              HACKING TOOLS
            </h3>
            <div className="space-y-1">
              <div className="kali-sidebar-item active flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Metasploit</span>
              </div>
              <div className="kali-sidebar-item flex items-center gap-2 text-sm">
                <Network className="h-4 w-4" />
                <span>Nmap Scanner</span>
              </div>
              <div className="kali-sidebar-item flex items-center gap-2 text-sm">
                <Wifi className="h-4 w-4" />
                <span>Aircrack-ng</span>
              </div>
              <div className="kali-sidebar-item flex items-center gap-2 text-sm">
                <Bug className="h-4 w-4" />
                <span>Burp Suite</span>
              </div>
              <div className="kali-sidebar-item flex items-center gap-2 text-sm">
                <Eye className="h-4 w-4" />
                <span>Social Engineer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Main Terminal Window */}
          <div className="kali-terminal mb-6">
            <div className="kali-terminal-header">
              <div className="kali-window-controls">
                <button className="kali-window-control close"></button>
                <button className="kali-window-control minimize"></button>
                <button className="kali-window-control maximize"></button>
              </div>
              <div className="ml-4 flex-1 font-bold text-xs">
                root@kali:~/pentest-portfolio# 
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="kali-dock-item p-3 kali-glow">
                  <Skull className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary kali-text-glow kali-hacker-text">ETHICAL HACKER & PENETRATION TESTER</h1>
                  <p className="text-muted-foreground kali-hacker-text">
                    > Specialized in offensive security, vulnerability assessment, and network penetration testing
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 text-sm kali-hacker-text">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary kali-text-glow">147</div>
                  <div className="text-muted-foreground">Systems Pwned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">CVE-2024</div>
                  <div className="text-muted-foreground">Vulns Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">0-DAY</div>
                  <div className="text-muted-foreground">Exploits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 kali-pulse">CRITICAL</div>
                  <div className="text-muted-foreground">Severity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-primary flex items-center gap-2 kali-hacker-text">
              <Crosshair className="h-5 w-5" />
              ATTACK VECTORS & EXPLOIT TECHNIQUES
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="kali-panel p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-bold text-sm kali-hacker-text">{skill.name}</span>
                    </div>
                    <span className={`kali-badge ${skill.status === 'active' ? 'success' : skill.status === 'partial' ? 'warning' : 'error'}`}>
                      {skill.status}
                    </span>
                  </div>
                  <div className="kali-progress h-2 mb-2">
                    <div 
                      className="kali-progress-bar h-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground kali-hacker-text">
                    <span>{skill.level}% Mastery</span>
                    <span>{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabbed Content */}
          <div className="kali-terminal">
            <div className="kali-terminal-header">
              <div className="kali-window-controls">
                <button className="kali-window-control close"></button>
                <button className="kali-window-control minimize"></button>
                <button className="kali-window-control maximize"></button>
              </div>
              <div className="ml-4 flex-1 font-bold text-xs">
                msfconsole - Penetration Testing Framework
              </div>
            </div>
            
            <Tabs defaultValue="projects" className="p-6">
              <TabsList className="kali-panel border">
                <TabsTrigger value="projects" className="kali-button">ACTIVE OPERATIONS</TabsTrigger>
                <TabsTrigger value="certs" className="kali-button">CERTIFICATIONS</TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="space-y-4 mt-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 kali-hacker-text">
                  <Target className="h-5 w-5" />
                  CURRENT PENETRATION TESTS
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="kali-panel p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-primary text-lg font-bold kali-hacker-text">{project.title}</h4>
                        <p className="text-muted-foreground mt-2 kali-hacker-text">
                          > {project.description}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <span className={`kali-badge ${project.status === 'Pwned' ? 'success' : project.status === 'Exploiting' ? 'critical' : 'warning'}`}>
                          {project.status}
                        </span>
                        <div className="text-sm text-muted-foreground kali-hacker-text">{project.vulnerabilities} vulnerabilities</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-sm mb-2 kali-hacker-text">TOOLS USED:</h5>
                        <div className="space-y-1">
                          {project.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="text-xs text-primary flex items-center gap-2 kali-hacker-text">
                              <div className="w-2 h-2 bg-primary rounded-full kali-glow"></div>
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2 kali-hacker-text">SEVERITY LEVELS:</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.severity.map((severity, severityIndex) => (
                            <span key={severityIndex} className={`kali-badge text-xs ${severity === 'Critical' ? 'critical' : severity === 'High' ? 'error' : severity === 'Medium' ? 'warning' : 'success'}`}>
                              {severity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="certs" className="space-y-4 mt-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 kali-hacker-text">
                  <Shield className="h-5 w-5" />
                  SECURITY CERTIFICATIONS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="kali-panel p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-bold text-primary kali-hacker-text">{cert.name}</div>
                          <div className="text-sm text-muted-foreground kali-hacker-text">Expires: {cert.expiry}</div>
                        </div>
                        <span className={`kali-badge ${cert.status === 'Valid' ? 'success' : 'warning'}`}>
                          {cert.status}
                        </span>
                      </div>
                      <div className="kali-progress h-2 mb-1">
                        <div 
                          className="kali-progress-bar h-full" 
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground kali-hacker-text">
                        {cert.progress}% Complete
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Information */}
          <div className="kali-panel p-6 mt-6">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-4 kali-hacker-text">
              <Lock className="h-5 w-5" />
              SECURE CONTACT PROTOCOL
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground kali-hacker-text">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Encrypted Email:</span>
                </div>
                <div className="font-bold text-primary kali-hacker-text">hacker@kali.secure</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground kali-hacker-text">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Secure Line:</span>
                </div>
                <div className="font-bold text-primary kali-hacker-text">+1.555.HACK.3R</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground kali-hacker-text">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Location:</span>
                </div>
                <div className="font-bold text-primary kali-hacker-text">Undisclosed, VPN</div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button className="kali-button flex items-center gap-2 px-4 py-2">
                <Github className="h-4 w-4" />
                GITHUB
              </button>
              <button className="kali-button flex items-center gap-2 px-4 py-2">
                <Linkedin className="h-4 w-4" />
                LINKEDIN
              </button>
              <button className="kali-button danger flex items-center gap-2 px-4 py-2">
                <Download className="h-4 w-4" />
                DOWNLOAD PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
