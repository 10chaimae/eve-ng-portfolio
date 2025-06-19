
import { Badge } from "@/components/ui/badge";
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
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="eve-terminal border-primary/30 px-4 py-2 text-sm font-mono flex items-center gap-2 hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <div className="relative">
              <skill.icon className={`h-4 w-4 text-primary ${skill.status === 'online' ? 'animate-pulse' : 'animate-bounce'}`} />
              <div className="absolute -top-1 -right-1 w-2 h-2">
                <div className={`w-full h-full rounded-full ${skill.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              </div>
            </div>
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
