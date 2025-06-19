
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail,
  MapPin,
  Linkedin,
  Terminal
} from "lucide-react";

const ConnectSection = () => {
  return (
    <div id="connect" className="mb-8">
      <Card className="eve-terminal border-primary/30">
        <CardHeader>
          <CardTitle className="eve-blue-text font-mono flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Connection Parameters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-mono text-muted-foreground">email:</span>
              </div>
              <div className="font-mono text-primary">engineer@network.lab</div>
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
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectSection;
