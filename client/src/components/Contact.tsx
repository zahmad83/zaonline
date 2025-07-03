import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to discuss how my ICT expertise can contribute to your organization's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-slate-50">
            <CardHeader>
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <a 
                      href="mailto:zahmad83@outlook.com" 
                      className="text-primary hover:text-blue-700 transition-colors"
                    >
                      zahmad83@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a 
                      href="tel:+212643995418" 
                      className="text-primary hover:text-blue-700 transition-colors"
                    >
                      +212 6 4399 54 18
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/za83" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700 transition-colors"
                    >
                      linkedin.com/in/za83
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">
                      UN MINURSO Headquarters<br />
                      Laayoune, Western Sahara
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-slate-200">
            <CardHeader>
              <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-700">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-slate-700">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-700 transition-colors duration-200"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
