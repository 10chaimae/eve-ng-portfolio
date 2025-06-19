
import { Button } from "@/components/ui/button";
import { Terminal, Download, Mail, Settings } from "lucide-react";

const HeaderSection = () => {
  return (
    <>
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
    </>
  );
};

export default HeaderSection;
