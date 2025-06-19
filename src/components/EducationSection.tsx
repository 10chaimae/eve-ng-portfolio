
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Network Engineering",
      institution: "San Francisco State University",
      year: "2018-2022",
      status: "Completed",
      gpa: "3.8/4.0"
    },
    {
      degree: "Associate Degree in Computer Networking",
      institution: "City College of San Francisco",
      year: "2016-2018",
      status: "Completed",
      gpa: "3.9/4.0"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold eve-blue-text flex items-center gap-2 mb-6">
        <GraduationCap className="h-5 w-5" />
        Education
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {education.map((edu, index) => (
          <Card key={index} className="eve-terminal border-primary/30">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-mono font-bold text-primary">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground">{edu.institution}</div>
                  <div className="text-sm text-muted-foreground">{edu.year}</div>
                </div>
                <div className="text-green-400 font-mono text-sm">● {edu.status}</div>
              </div>
              <div className="text-sm text-blue-400 font-mono">GPA: {edu.gpa}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
