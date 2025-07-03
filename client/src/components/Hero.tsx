import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/DSCF0657_1751484925640.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    window.open("mailto:zahmad83@outlook.com?subject=Resume Request&body=Hello Zeeshan, I would like to request your latest resume.", "_blank");
  };

  return (
    <section id="home" className="pt-16 gradient-bg min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Zeeshan Ahmad
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-medium mt-4">ICT Specialist</p>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              Motivated IT Professional with extensive experience in service desk operations and 
              optimizing ICT services for diverse organizations. Proven expertise in troubleshooting, 
              system configuration, and maintaining IT infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={downloadResume}
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-8">
              <div className="flex items-center text-slate-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>zahmad83@outlook.com</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>+212 6 4399 54 18</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
              <a 
                href="https://linkedin.com/in/za83" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center text-slate-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>UN MINURSO Headquarters, Laayoune, Western Sahara</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full shadow-2xl overflow-hidden ring-4 ring-primary/20">
              <img 
                src={profilePhoto} 
                alt="Zeeshan Ahmad - ICT Specialist at UN MINURSO" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
