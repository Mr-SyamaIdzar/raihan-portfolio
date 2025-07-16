import React, { useState } from "react";
import { cn } from "../lib/util";

const skills = [
  /* Beginner → 1–40
  Intermediate → 41–60
  Skilled (setara Proficient) → 61–80
  Expert → 81–95 */

  // Frontend
  { name: "HTML/CSS", level: 75, category: "frontend" }, // Skilled
  { name: "Javascript", level: 50, category: "frontend" }, // Intermediate
  { name: "Tailwind CSS", level: 30, category: "frontend" }, // Beginner
  { name: "React", level: 30, category: "frontend" }, // Beginner
  { name: "Vite JS", level: 30, category: "frontend" }, // Beginner
  // Backend
  { name: "PHP", level: 75, category: "backend" }, // Skilled
  { name: "MySQL", level: 70, category: "backend" }, // Skilled
  // Tools
  { name: "Git/Github", level: 70, category: "tools" }, // Skilled
  { name: "VS Code", level: 90, category: "tools" }, // Expert
  //Other
  { name: "C++", level: 30, category: "Other" }, // Expert
  { name: "Java", level: 30, category: "Other" }, // Expert
  { name: "Python", level: 30, category: "Other" }, // Expert
];

const categories = ["all", "frontend", "backend", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  /* 
  Jika tombol kategori "all" dipilih, filteredSkills akan berisi semua skill.
  Jika kategori lain dipilih, filteredSkills akan berisi hanya skill dari kategori tersebut. 
  */
  const filterdSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
