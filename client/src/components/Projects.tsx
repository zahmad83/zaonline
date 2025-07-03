import { Smartphone, Share, BarChart3, Cloud, Monitor, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Windows 11 Enterprise Deployment",
    icon: Monitor,
    description: "Led comprehensive Windows 11 migration project across UN MINURSO infrastructure to enhance security and operational efficiency.",
    impact: "Organization-wide",
    impactDetail: "modernization and security enhancement",
    achievements: [
      "Enterprise-grade deployment strategy implementation",
      "Enhanced security protocols and compliance standards",
      "Seamless user transition with minimal downtime",
      "Standardized desktop environment across all departments"
    ],
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100"
  },
  {
    title: "ICT Infrastructure Modernization",
    icon: Wifi,
    description: "Executed comprehensive infrastructure upgrade at WHO to align with evolving business requirements and operational standards.",
    impact: "Complete Overhaul",
    impactDetail: "of network infrastructure and connectivity",
    achievements: [
      "LAN infrastructure upgrade with enhanced bandwidth capacity",
      "Enterprise-level router and switch deployment",
      "Wireless Access Point (WAP) implementation with centralized management",
      "Wireless LAN Controller (WLC) integration for optimized network performance"
    ],
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-100"
  },
  {
    title: "Custom Power App Development",
    icon: Smartphone,
    description: "Created a comprehensive equipment tracking and management system for field offices.",
    impact: "40% Reduction",
    impactDetail: "in manual tracking processes",
    achievements: [
      "Real-time equipment availability tracking",
      "Location and maintenance status monitoring", 
      "Improved inventory management workflows"
    ],
    bgGradient: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100"
  },
  {
    title: "SharePoint Onboarding System",
    icon: Share,
    description: "Developed automated onboarding platform with Power Automate integration.",
    impact: "60% Improvement",
    impactDetail: "in leave approval process efficiency",
    achievements: [
      "Automated welcome emails and task assignments",
      "Centralized documentation and training materials",
      "Streamlined workflow management"
    ],
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-100"
  },
  {
    title: "Power BI Analytics Dashboard",
    icon: BarChart3,
    description: "Built comprehensive system performance visualization and monitoring solution.",
    impact: "3,500+ Users",
    impactDetail: "supported across DP World UAE",
    achievements: [
      "Real-time uptime and error rate monitoring",
      "Resource utilization tracking",
      "Proactive issue identification and resolution"
    ],
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-100"
  },
  {
    title: "Cloud VDI Infrastructure",
    icon: Cloud,
    description: "Designed and executed cloud-based Citrix Virtual Desktop Infrastructure deployment.",
    impact: "Multi-Department",
    impactDetail: "rollout with thin client optimization",
    achievements: [
      "Thin client machine implementation",
      "Cross-department infrastructure optimization",
      "Enhanced remote accessibility solutions"
    ],
    bgGradient: "from-slate-50 to-gray-50",
    borderColor: "border-slate-100"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Key Projects & Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions and automation projects that delivered measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${project.bgGradient} border ${project.borderColor} hover:shadow-lg transition-shadow duration-200`}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <Badge className="bg-success text-white mr-2">{project.impact}</Badge>
                    <span className="text-sm text-slate-600">{project.impactDetail}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
