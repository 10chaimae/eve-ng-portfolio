
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
    { name: "Network Topology Design", level: 95, icon: Network, status: "online" },
    { name: "Cisco IOS/NX-OS", level: 90, icon: Router, status: "online" },
    { name: "Security Implementation", level: 85, icon: Wifi, status: "online" },
    { name: "Virtual Lab Management", level: 88, icon: Server, status: "online" },
    { name: "Wireless Controllers", level: 82, icon: WifiHigh, status: "online" },
    { name: "Physical Infrastructure", level: 78, icon: Cable, status: "maintenance" },
  ];

  return (
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
  );
};

export default SkillsSection;
