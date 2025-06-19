
import { Card, CardContent } from "@/components/ui/card";
import { 
  Network, 
  Server, 
  Wifi, 
  Cable, 
  Router, 
  WifiHigh,
  Activity
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Network Topology Design", icon: Network, status: "online" },
    { name: "Cisco IOS/NX-OS", icon: Router, status: "online" },
    { name: "Security Implementation", icon: Wifi, status: "online" },
    { name: "Virtual Lab Management", icon: Server, status: "online" },
    { name: "Wireless Controllers", icon: WifiHigh, status: "online" },
    { name: "Physical Infrastructure", icon: Cable, status: "maintenance" },
  ];

  return (
    <div id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-6 eve-blue-text flex items-center gap-2">
        <Activity className="h-6 w-6" />
        Skills and Technologies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="eve-terminal border-primary/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <skill.icon className={`h-6 w-6 text-primary ${skill.status === 'online' ? 'animate-pulse' : 'animate-bounce'}`} />
                    <div className="absolute -top-1 -right-1 w-3 h-3">
                      <div className={`w-full h-full rounded-full ${skill.status === 'online' ? 'bg-green-400 animate-ping' : 'bg-yellow-400 animate-pulse'}`}></div>
                    </div>
                  </div>
                  <span className="font-mono text-sm">{skill.name}</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${skill.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span className="font-mono">{skill.status}</span>
                <span className="font-mono text-primary">ACTIVE</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
