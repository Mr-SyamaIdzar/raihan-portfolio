import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities. -Pedro Machado-
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Informationn
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:muhammadraihansyamaidzar@gmail.com"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    muhammadraihansyamaidzar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+62895342666516"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    (+62) 895-3426-66561
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a className="text-foreground hover:text-primary transition-colors duration-300">
                    Sleman, D.I. Yogyakarta
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="www.linkedin.com/in/muhammadraihans" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://instagram.com/mrsidzar" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/Mrsidzar" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};
