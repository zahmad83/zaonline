import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jan 2024 – Present",
    title: "IT Hardware Infrastructure Technician",
    company: "UN MINURSO – Laayoune, Western Sahara",
    current: true,
    achievements: [
      "Provide technical support across various departments ensuring high user satisfaction",
      "Manage Service Requests using iNeed application with ITIL compliance",
      "Support video conferencing with MS Surface Hub and MS Teams",
      "Design and publish SharePoint sites with user training materials"
    ]
  },
  {
    period: "May 2018 – Dec 2023",
    title: "ICT Associate",
    company: "World Health Organization – Peshawar, Pakistan",
    current: false,
    achievements: [
      "Created custom Power App reducing manual tracking by 40%",
      "Developed SharePoint onboarding site with automated workflows",
      "Managed complete lifecycle of user onboarding and asset allocation",
      "Coordinated IT procurement ensuring compliance with standards"
    ]
  },
  {
    period: "Aug 2016 – March 2018",
    title: "ICT Specialist",
    company: "Pakistan Rural Development Programme – Peshawar, Pakistan",
    current: false,
    achievements: [
      "Automated leave approval process reducing manual handling by 60%",
      "Administered Office 365 services and user account management",
      "Developed IT policies ensuring organizational compliance",
      "Led IT procurement and inventory management functions"
    ]
  },
  {
    period: "Sep 2012 – May 2016",
    title: "IT Helpdesk Support Engineer",
    company: "DP World – Jebel Ali Dubai, UAE",
    current: false,
    achievements: [
      "Supported over 3,500 users across DP World UAE region",
      "Developed Power BI reports for system performance visualization",
      "Deployed cloud-based Citrix VDI solutions across departments",
      "Created technical flowcharts streamlining ticket resolution process"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Over 12 years of experience in ICT infrastructure, system administration, 
            and technical support across international organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {exp.period}
                      </Badge>
                      {exp.current && (
                        <Badge className="bg-success text-white">Current</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span dangerouslySetInnerHTML={{
                            __html: achievement.replace(/(\d+%)/g, '<span class="text-success font-medium">$1</span>')
                              .replace(/(\d+,?\d*\+?\s*users?)/gi, '<span class="text-success font-medium">$1</span>')
                          }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index % 2 === 0 ? (
                  <div className="hidden md:block md:w-1/2"></div>
                ) : (
                  <div className="hidden md:block md:w-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
