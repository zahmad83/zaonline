import { Monitor, ServerCog, Shield, Wrench, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Platforms",
    icon: Monitor,
    skills: ["Mac", "Windows", "Unix/Linux"]
  },
  {
    title: "Software",
    icon: ServerCog,
    skills: ["Office 365", "Active Directory", "VMware", "Microsoft SCCM", "Intune", "JAMF"]
  },
  {
    title: "Network & Security",
    icon: Shield,
    skills: ["WAN/LAN", "Cisco WLC", "VLAN & VPN", "TCP/IP", "SOPHOS", "Crowdstrike"]
  },
  {
    title: "Process & Tools",
    icon: Wrench,
    skills: ["ITIL", "ServiceNow", "Marval MSM", "iNeed"]
  },
  {
    title: "Core Expertise",
    icon: Star,
    skills: ["System Administration", "Project Management", "Risk Assessment", "User Support"]
  },
  {
    title: "Key Certifications",
    icon: Award,
    skills: ["ISC2 Certified", "Azure AZ-109", "VMware VCA", "ITIL V3"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Proficiencies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across platforms, software, networking, and security technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
