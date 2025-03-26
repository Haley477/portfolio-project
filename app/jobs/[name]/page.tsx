import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define a detailed Job type
type JobDetail = {
  name: string;
  company: string;
  companyLogo: string;
  description: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
};

// Update the page props type to match Next.js 15 expectations
type JobDetailPageProps = {
  params: { name: string; };
};

// Detailed job information
const jobDetails: { [key: string]: JobDetail } = {
  "senior-web-developer-techinnovate": {
    name: "Senior Web Developer",
    company: "TechInnovate Solutions",
    companyLogo: "/tis.jpeg",
    description: "Led full-stack development of enterprise web applications, driving technological innovation and improving system efficiency.",
    startDate: "June 2022",
    endDate: "Present",
    responsibilities: [
      "Architect and develop scalable web applications",
      "Lead technical design and implementation of new features",
      "Mentor junior developers and conduct code reviews",
      "Optimize application performance and user experience"
    ],
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Implemented microservices architecture improving system reliability",
      "Led the migration of legacy systems to modern tech stack"
    ]
  },
  "frontend-engineering-manager-globalconnect": {
    name: "Frontend Engineering Manager",
    company: "GlobalConnect Media",
    companyLogo: "/gmc.jpg",
    description: "Managed a team of frontend engineers, driving innovation in user interface design and performance.",
    startDate: "January 2021",
    endDate: "May 2022",
    responsibilities: [
      "Oversee frontend development team of 8 engineers",
      "Define technical strategy and development roadmap",
      "Collaborate with product and design teams",
      "Implement best practices and coding standards"
    ],
    achievements: [
      "Improved team productivity by 35% through agile methodologies",
      "Developed comprehensive frontend component library",
      "Reduced time-to-market for new features by 25%"
    ]
  },
  "ui-ux-developer-creativetech": {
    name: "UI/UX Developer",
    company: "CreativeTech Designs",
    companyLogo: "/ctd.webp",
    description: "Designed and implemented user-centric interfaces for multiple digital products and platforms.",
    startDate: "July 2020",
    endDate: "December 2020",
    responsibilities: [
      "Create intuitive and engaging user interfaces",
      "Conduct user research and usability testing",
      "Collaborate with design and development teams",
      "Develop wireframes and interactive prototypes"
    ],
    achievements: [
      "Increased user engagement by 50% through UI/UX improvements",
      "Designed award-winning mobile application interface",
      "Implemented design system for consistent user experience"
    ]
  },
  "react-developer-startup-innovations": {
    name: "React Developer",
    company: "StartUp Innovations",
    companyLogo: "/startup.jpeg",
    description: "Developed scalable web applications using React, Redux, and modern web technologies.",
    startDate: "March 2020",
    endDate: "June 2020",
    responsibilities: [
      "Develop responsive and performant web applications",
      "Implement state management with Redux",
      "Integrate frontend with backend APIs",
      "Ensure cross-browser compatibility"
    ],
    achievements: [
      "Built complex single-page applications with React",
      "Improved application state management efficiency",
      "Implemented responsive design for multiple platforms"
    ]
  },
  "full-stack-engineer-cloudnative": {
    name: "Full Stack Software Engineer",
    company: "CloudNative Systems",
    companyLogo: "/cloud.jpg",
    description: "Built and maintained cloud-native applications with microservices architecture.",
    startDate: "September 2019",
    endDate: "February 2020",
    responsibilities: [
      "Develop microservices-based applications",
      "Implement cloud infrastructure solutions",
      "Optimize database performance",
      "Ensure application scalability and reliability"
    ],
    achievements: [
      "Designed scalable cloud-native application architecture",
      "Reduced infrastructure costs by 30%",
      "Implemented continuous integration and deployment pipeline"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(jobDetails).map((slug) => ({
    name: slug
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { name } = params;
  const job = jobDetails[name];

  if (!job) return {};

  return {
    title: `${job.name} at ${job.company}`,
    description: job.description
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const { name } = params;

  // Find the job or return 404 if not found
  const job = jobDetails[name];

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/jobs" 
          className="inline-block mb-6 text-gray-600 hover:text-gray-800 transition"
        >
          ← Back to Jobs
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Company Logo */}
          <div className="flex justify-center py-8 bg-gray-100">
            <div className="relative w-48 h-48">
              <Image
                src={job.companyLogo}
                alt={`${job.company} Logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="p-8">
            {/* Job Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {job.name}
            </h1>
            
            {/* Company Name */}
            <h2 className="text-2xl text-gray-600 mb-4">
              {job.company}
            </h2>
            
            {/* Job Dates */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="text-gray-700 font-medium">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
            </div>
            
            {/* Job Description */}
            <p className="text-lg text-gray-600 mb-6">
              {job.description}
            </p>
            
            {/* Responsibilities */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Key Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
