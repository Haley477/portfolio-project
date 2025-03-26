import Image from "next/image";
import Link from "next/link";

// Define a Job type
type Job = {
  name: string;
  company: string;
  companyLogo: string;
  shortDescription: string;
  slug: string;
};

// Job data
const jobs: Job[] = [
  {
    name: "Senior Web Developer",
    company: "TechInnovate Solutions",
    companyLogo: "/tis.jpeg",
    shortDescription: "Led full-stack development of enterprise web applications using modern JavaScript frameworks.",
    slug: "senior-web-developer-techinnovate"
  },
  {
    name: "Frontend Engineering Manager",
    company: "GlobalConnect Media",
    companyLogo: "/gmc.jpg",
    shortDescription: "Managed a team of 8 frontend engineers, driving innovation in user interface design and performance.",
    slug: "frontend-engineering-manager-globalconnect"
  },
  {
    name: "UI/UX Developer",
    company: "CreativeTech Designs",
    companyLogo: "/ctd.webp",
    shortDescription: "Designed and implemented user-centric interfaces for multiple digital products and platforms.",
    slug: "ui-ux-developer-creativetech"
  },
  {
    name: "React Developer",
    company: "StartUp Innovations",
    companyLogo: "/startup.jpeg",
    shortDescription: "Developed scalable web applications using React, Redux, and modern web technologies.",
    slug: "react-developer-startup-innovations"
  },
  {
    name: "Full Stack Software Engineer",
    company: "CloudNative Systems",
    companyLogo: "/cloud.jpg",
    shortDescription: "Built and maintained cloud-native applications with microservices architecture.",
    slug: "full-stack-engineer-cloudnative"
  }
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Professional Journey
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Link 
              key={job.slug} 
              href={`/jobs/${job.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6 flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={job.companyLogo}
                      alt={`${job.company} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                    {job.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 text-center">
                    {job.company}
                  </p>
                  
                  <p className="text-gray-500 text-sm text-center">
                    {job.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}