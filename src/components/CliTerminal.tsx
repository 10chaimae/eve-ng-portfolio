
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";

interface CliTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const CliTerminal = ({ isOpen, onClose, onNavigate }: CliTerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "EVE-NG Network Engineer Portfolio CLI v2.4.1",
    "Type 'help' to see available commands.",
    ""
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const skillsData = [
    { name: "Network Topology Design", status: "ONLINE", load: "0.23" },
    { name: "Cisco IOS/NX-OS", status: "ONLINE", load: "0.15" },
    { name: "Security Implementation", status: "ONLINE", load: "0.31" },
    { name: "Virtual Lab Management", status: "ONLINE", load: "0.08" },
    { name: "Wireless Controllers", status: "ONLINE", load: "0.19" },
    { name: "Physical Infrastructure", status: "MAINTENANCE", load: "0.45" }
  ];

  const commands = {
    help: () => [
      "Available commands:",
      "  skills     - Show Skills and Technologies status",
      "  projects   - Navigate to Network Projects", 
      "  education  - Navigate to Education section",
      "  experience - Navigate to Professional Experience",
      "  certs      - Show Certifications status",
      "  connect    - Navigate to Connect section",
      "  clear      - Clear terminal",
      "  exit       - Close terminal",
      ""
    ],
    skills: () => {
      const output = [
        "=== SKILLS AND TECHNOLOGIES STATUS ===",
        "",
        "Scanning network infrastructure...",
        "Loading skill modules...",
        "",
        "SKILL MODULE                 STATUS       LOAD    UPTIME",
        "─────────────────────────────────────────────────────────",
      ];
      
      skillsData.forEach(skill => {
        const statusColor = skill.status === "ONLINE" ? "●" : "◐";
        const paddedName = skill.name.padEnd(28, " ");
        const paddedStatus = skill.status.padEnd(12, " ");
        output.push(`${paddedName} ${statusColor} ${paddedStatus} ${skill.load}    99.9%`);
      });
      
      output.push("");
      output.push("Summary:");
      output.push(`  Total modules: ${skillsData.length}`);
      output.push(`  Online: ${skillsData.filter(s => s.status === "ONLINE").length}`);
      output.push(`  Maintenance: ${skillsData.filter(s => s.status === "MAINTENANCE").length}`);
      output.push(`  System health: OPTIMAL`);
      output.push("");
      
      return output;
    },
    certs: () => {
      return [
        "=== PROFESSIONAL CERTIFICATIONS STATUS ===",
        "",
        "Validating certificates...",
        "",
        "CERTIFICATION            STATUS    EXPIRY      VALIDITY",
        "─────────────────────────────────────────────────────",
        "CCNA                     ● VALID   2025-03     ACTIVE",
        "CompTIA Network+         ● VALID   2025-08     ACTIVE", 
        "CWNA                     ● VALID   2024-12     ACTIVE",
        "CompTIA Security+        ● VALID   2025-11     ACTIVE",
        "",
        "All certifications verified and current.",
        ""
      ];
    },
    projects: () => {
      onNavigate("projects");
      return ["Navigating to Network Projects section...", ""];
    },
    education: () => {
      onNavigate("education");
      return ["Navigating to Education section...", ""];
    },
    experience: () => {
      onNavigate("experience");
      return ["Navigating to Professional Experience section...", ""];
    },
    connect: () => {
      onNavigate("connect");
      return ["Navigating to Connect section...", ""];
    },
    clear: () => {
      setHistory(["Terminal cleared", ""]);
      return [];
    },
    exit: () => {
      onClose();
      return ["Terminal session ended.", ""];
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newHistory = [...history, `admin@portfolio:~$ ${cmd}`];
    
    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]();
      if (command !== "clear") {
        setHistory([...newHistory, ...output]);
      }
    } else if (command === "") {
      setHistory([...newHistory, ""]);
    } else {
      setHistory([...newHistory, `Command not found: ${command}`, "Type 'help' for available commands.", ""]);
    }
    
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure dialog is fully rendered
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when history updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[600px] eve-terminal border-primary/50 p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="eve-blue-text font-mono flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Network Lab Terminal
          </DialogTitle>
          <DialogDescription className="sr-only">
            Interactive CLI terminal for navigating the portfolio
          </DialogDescription>
        </DialogHeader>
        
        <div 
          ref={terminalRef}
          className="flex-1 p-4 pt-2 font-mono text-sm overflow-hidden cursor-text"
          onClick={handleTerminalClick}
        >
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-1 mb-4">
              {history.map((line, index) => (
                <div key={index} className={line.startsWith("admin@portfolio") ? "eve-terminal-text" : "text-muted-foreground"}>
                  {line}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 border-t border-primary/20 pt-2">
              <span className="eve-terminal-text">admin@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-primary font-mono"
                placeholder="Type a command..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CliTerminal;
