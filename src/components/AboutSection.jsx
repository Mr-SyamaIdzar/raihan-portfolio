import { Brain, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Section Kiri */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developers, Programmers, and Informatics Students
            </h3>

            <p className="text-foreground">
              With a strong foundation in web development and a passion for
              building clean, responsive, and high-performing user interfaces, I
              focus on delivering impactful digital experiences using modern
              tools and technologies.
            </p>

            <p className="text-foreground">
              I enjoy solving real-world problems through code and continuously
              expanding my skills to stay current in the fast-paced web
              development world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* CV */}
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Section Kanan */}
          <div className="grid grid-cols-1 gap-6">
            {/* Front-End Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Front-End Development
                  </h4>
                  <p className="text-foreground">
                    Building responsive, accessible, and interactive user
                    interfaces with modern front-end technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Mahasiswa UPN */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Student at UPN "Veteran" Yogyakarta
                  </h4>
                  <p className="text-foreground">
                    Actively learning and growing in the field of Informatics
                    Engineering at UPNVY.
                  </p>
                </div>
              </div>
            </div>

            {/* Anggota ITC */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Member of ITC UPNVY</h4>
                  <p className="text-foreground">
                    Contributing to a tech-driven student community and
                    participating in projects and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
