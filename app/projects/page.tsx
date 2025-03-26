"use client";

import Image from "next/image";
import Link from "next/link";

// Define a Project type
type Project = {
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

// Project data
const projects: Project[] = [
  {
    name: "Eco-Tracker",
    description: "A comprehensive environmental impact tracking application that helps users monitor and reduce their carbon footprint.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "/project-eco-tracker.png"
  },
  {
    name: "HealthSync",
    description: "A telemedicine platform connecting patients with healthcare providers through seamless video consultations and health tracking.",
    technologies: ["Next.js", "TypeScript", "WebRTC", "Firebase"],
    imageUrl: "/health-sync.png"
  },
  {
    name: "Urban Forager",
    description: "A mobile app that helps urban dwellers locate and map local edible plants, community gardens, and sustainable food sources.",
    technologies: ["React Native", "GraphQL", "MapBox", "PostgreSQL"],
    imageUrl: "/urban_forager.jpeg"
  },
  {
    name: "CodeColab",
    description: "An online collaborative coding platform with real-time pair programming and integrated learning resources.",
    technologies: ["Vue.js", "Socket.io", "Docker", "Redis"],
    imageUrl: "/colab.png"
  },
  {
    name: "SkillSwap",
    description: "A community-driven skill exchange platform where users can trade knowledge, skills, and learning experiences.",
    technologies: ["Next.js", "Prisma", "TailwindCSS", "Supabase"],
    imageUrl: "/Skills_Swap.png"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.name} 
              href={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.name} Project`}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-75 transition-opacity"
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {project.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}