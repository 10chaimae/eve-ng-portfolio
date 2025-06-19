
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

  const commands = {
    help: () => [
      "Available commands:",
      "  skills     - Navigate to Skills and Technologies",
      "  projects   - Navigate to Network Projects", 
      "  education  - Navigate to Education section",
      "  experience - Navigate to Professional Experience",
      "  certs      - Navigate to Certifications",
      "  connect    - Navigate to Connect section",
      "  clear      - Clear terminal",
      "  exit       - Close terminal",
      ""
    ],
    skills: () => {
      onNavigate("skills");
      return ["Navigating to Skills and Technologies section...", ""];
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
    certs: () => {
      onNavigate("certs");
      return ["Navigating to Certifications section...", ""];
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[600px] eve-terminal border-primary/50 p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="eve-blue-text font-mono flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Network Lab Terminal
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 p-4 pt-2 font-mono text-sm overflow-hidden">
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
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent border-none outline-none text-primary font-mono"
                placeholder="Type a command..."
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CliTerminal;
