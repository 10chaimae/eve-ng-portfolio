
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "CCNA", status: "Valid", expiry: "2025-03" },
    { name: "CompTIA Network+", status: "Valid", expiry: "2025-08" },
    { name: "CWNA", status: "Valid", expiry: "2024-12" },
    { name: "CompTIA Security+", status: "Valid", expiry: "2025-11" }
  ];

  return (
    <div id="certs" className="mb-8">
      <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
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
    </div>
  );
};

export default CertificationsSection;
