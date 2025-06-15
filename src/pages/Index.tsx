
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
  Linkedin
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Network Design", level: 95, icon: Network },
    { name: "Cisco Technologies", level: 90, icon: Router },
    { name: "Network Security", level: 85, icon: Wifi },
    { name: "Server Administration", level: 88, icon: Server },
    { name: "Wireless Networks", level: 82, icon: WifiHigh },
    { name: "Cable Management", level: 78, icon: Cable },
  ];

  const projects = [
    {
      title: "Enterprise Network Infrastructure",
      description: "Designed and implemented a complete network infrastructure for a 500+ employee company including VLANs, firewalls, and redundant connections.",
      tech: ["Cisco", "VLAN", "BGP", "OSPF"],
      status: "Completed"
    },
    {
      title: "Wireless Campus Network",
      description: "Deployed enterprise-grade wireless network across university campus with seamless roaming and high-density coverage.",
      tech: ["Wi-Fi 6", "Controller", "Heat Mapping"],
      status: "In Progress"
    },
    {
      title: "Network Security Implementation",
      description: "Implemented comprehensive network security including IPS/IDS, firewalls, and network segmentation.",
      tech: ["Firewall", "IPS/IDS", "VPN"],
      status: "Completed"
    }
  ];

  const certifications = [
    "CCNA - Cisco Certified Network Associate",
    "CompTIA Network+",
    "CWNA - Certified Wireless Network Administrator",
    "CompTIA Security+"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-8">
              <Network size={80} className="text-network-blue-400 mx-auto animate-glow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-network-blue-400 via-circuit-green-400 to-signal-orange-400 bg-clip-text text-transparent">
              Network Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
              Building the digital highways of tomorrow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="network-glow">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-network-blue-400">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-network-blue-500/20 to-circuit-green-500/20 rounded-full flex items-center justify-center network-glow">
                  <Server size={120} className="text-network-blue-400 animate-pulse-slow" />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate network engineering student with hands-on experience in designing, 
                  implementing, and maintaining complex network infrastructures. Specialized in 
                  enterprise networking solutions, wireless technologies, and network security.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently pursuing advanced certifications while working on real-world projects 
                  that involve cutting-edge technologies like SD-WAN, cloud networking, and IoT 
                  infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-network-blue-500/20 text-network-blue-400">
                    Network Design
                  </Badge>
                  <Badge variant="secondary" className="bg-circuit-green-500/20 text-circuit-green-400">
                    Security
                  </Badge>
                  <Badge variant="secondary" className="bg-signal-orange-500/20 text-signal-orange-400">
                    Wireless
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 tech-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-circuit-green-400">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <skill.icon className="h-6 w-6 text-network-blue-400" />
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                      {skill.level}% Proficiency
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-signal-orange-400">
              Projects & Experience
            </h2>
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-network-blue-400">{project.title}</CardTitle>
                          <CardDescription className="mt-2">{project.description}</CardDescription>
                        </div>
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="ml-4"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="certifications" className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-circuit-green-400 rounded-full animate-pulse"></div>
                        <span className="font-mono text-lg">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-network-blue-400">
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:network-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-network-blue-400 mx-auto mb-4" />
                  <p className="font-mono">engineer@network.dev</p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:network-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-circuit-green-400 mx-auto mb-4" />
                  <p className="font-mono">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:network-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-signal-orange-400 mx-auto mb-4" />
                  <p className="font-mono">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
