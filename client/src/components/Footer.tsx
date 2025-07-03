import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Zeeshan Ahmad</h3>
          <p className="text-slate-400 mb-6">ICT Specialist • System Administrator • Technical Support Expert</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:zahmad83@outlook.com" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/za83" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="tel:+212643995418" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-sm">&copy; 2024 Zeeshan Ahmad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
