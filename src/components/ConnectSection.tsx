
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Terminal,
  Zap
} from "lucide-react";

const ConnectSection = () => {
  const certifications = [
    { name: "CCNA", status: "Valid", expiry: "2025-03" },
    { name: "CompTIA Network+", status: "Valid", expiry: "2025-08" },
    { name: "CWNA", status: "Valid", expiry: "2024-12" },
    { name: "CompTIA Security+", status: "Valid", expiry: "2025-11" }
  ];

  return (
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
  );
};

export default ConnectSection;
