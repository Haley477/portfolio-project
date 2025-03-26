import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';

// Define a detailed Project type
type ProjectDetail = {
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  fullDescription: string;
  startDate: string;
  endDate: string;
  githubLink?: string;
  liveLink?: string;
};

// Project data with added date information
const projectDetails: { [key: string]: ProjectDetail } = {
  "eco-tracker": {
    name: "Eco-Tracker",
    description: "A comprehensive environmental impact tracking application",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Chart.js"],
    imageUrl: "/eco-track.png",
    fullDescription: "Eco-Tracker is an innovative application designed to help individuals and organizations monitor and reduce their carbon footprint. By providing detailed insights, personalized recommendations, and tracking capabilities, the app empowers users to make more environmentally conscious decisions in their daily lives.",
    startDate: "January 2023",
    endDate: "June 2023",
    githubLink: "https://github.com/haleysmith-dev/eco-tracker",
    liveLink: "https://eco-tracker.vercel.app"
  },
  "healthsync": {
    name: "HealthSync",
    description: "A telemedicine platform connecting patients with healthcare providers",
    technologies: ["Next.js", "TypeScript", "WebRTC", "Firebase", "Tailwind CSS", "Socket.io"],
    imageUrl: "/Health.webp",
    fullDescription: "HealthSync revolutionizes healthcare access by providing a seamless telemedicine platform. Users can schedule video consultations, track their health metrics, and securely communicate with healthcare professionals from the comfort of their homes.",
    startDate: "July 2023",
    endDate: "December 2023",
    githubLink: "https://github.com/haleysmith-dev/healthsync",
    liveLink: "https://healthsync.app"
  },
  "urban-forager": {
    name: "Urban Forager",
    description: "A mobile app that helps urban dwellers locate local edible plants",
    technologies: ["React Native", "GraphQL", "MapBox", "PostgreSQL", "Apollo Client", "Expo"],
    imageUrl: "/foraging.jpg",
    fullDescription: "Urban Forager is a community-driven mobile application that helps city residents discover and map local edible plants, community gardens, and sustainable food sources.",
    startDate: "March 2023",
    endDate: "September 2023",
    githubLink: "https://github.com/haleysmith-dev/urban-forager",
    liveLink: "https://urban-forager.app"
  },
  "codecolab": {
    name: "CodeColab",
    description: "An online collaborative coding platform",
    technologies: ["Vue.js", "Socket.io", "Docker", "Redis", "Vuex", "TypeScript"],
    imageUrl: "/code-colab.jpeg",
    fullDescription: "CodeColab provides an innovative online platform for real-time collaborative coding, offering integrated learning resources and pair programming capabilities.",
    startDate: "October 2022",
    endDate: "April 2023",
    githubLink: "https://github.com/haleysmith-dev/codecolab",
    liveLink: "https://codecolab.dev"
  },
  "skillswap": {
    name: "SkillSwap",
    description: "A community-driven skill exchange platform",
    technologies: ["Next.js", "Prisma", "TailwindCSS", "Supabase", "NextAuth", "React Query"],
    imageUrl: "/skill-swap.jpeg",
    fullDescription: "SkillSwap is a unique platform that enables users to exchange knowledge, skills, and learning experiences within a vibrant community ecosystem.",
    startDate: "May 2023",
    endDate: "November 2023",
    githubLink: "https://github.com/haleysmith-dev/skillswap",
    liveLink: "https://skillswap.platform"
  }
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((name) => ({
    name: name
  }));
}

export default async function ProjectDetailPage(props: { params: Promise<{ name: string }> }) {
  const params = await props.params;
  // Convert the dynamic route parameter to match our key format
  const projectKey = params.name.toLowerCase();

  // Find the project or return 404 if not found
  const project = projectDetails[projectKey];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/projects" 
          className="inline-block mb-6 text-gray-600 hover:text-gray-800 transition"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Project Image */}
          <div className="relative h-96 w-full">
            <Image
              src={project.imageUrl}
              alt={`${project.name} Project`}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            {/* Project Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {project.name}
            </h1>
            
            {/* Project Description */}
            <p className="text-xl text-gray-600 mb-6">
              {project.description}
            </p>
            
            {/* Project Dates */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="text-gray-700 font-medium">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </div>
            
            {/* Technologies Used */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Full Project Description */}
            <div className="prose max-w-none mb-6">
              <p>{project.fullDescription}</p>
            </div>
            
            {/* Project Links */}
            <div className="flex gap-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                >
                  GitHub Repository
                </a>
              )}
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}