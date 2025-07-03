import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const certifications = [
  "Certified in Cybersecurity (CC) ISC2",
  "Microsoft Azure Foundation AZ-109",
  "VMware Certified Associate 6",
  "ITIL V3 Certification",
  "Management of Risk (MoR)"
];

const recentTraining = [
  "MCSA Windows 10 | Windows Server 2012/2016",
  "MS Azure Administrator AZ104",
  "CCNA | CompTIA A+",
  "Linux System Administration",
  "SharePoint Online Essential Training"
];

const conferences = [
  "GIS for Sustainable World Conference 2019 - Geneva, Switzerland",
  "CloudFest 2019 - Germany",
  "Various UN-WHO cybersecurity workshops",
  "Digital Forensics - Charles Strutt University"
];

const affiliations = [
  "Member (RE) of Pakistan Engineering Council",
  "Apple Certified Support Professional",
  "Member of ISC2"
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development in ICT and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Education</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-slate-900">Bachelor of Science in Computer System Engineering</h4>
                <p className="text-primary font-medium">University of Engineering & Technology</p>
                <p className="text-sm text-slate-600 mt-2">
                  Relevant Modules: Computer Hardware & Software, Electrical/Electronic Engineering & Management
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Certifications */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Professional Certifications</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-2 flex-shrink-0" />
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Training */}
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-slate-900">Professional Training & Conferences</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Recent Training</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  {recentTraining.map((training, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{training}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Conferences Attended</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  {conferences.map((conference, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{conference}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Affiliations */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-slate-900">Professional Affiliations</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{affiliation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
