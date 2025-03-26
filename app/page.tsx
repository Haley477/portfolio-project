"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Inline SVG Icons (unchanged)
  const icons = {
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    LinkedIn: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    Email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    Projects: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
    Jobs: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        <line x1="6" y1="11" x2="18" y2="11"/>
      </svg>
    )
  };

  // Prevent hydration mismatch by conditionally rendering transform
  const parallaxStyle = isClient
    ? {
        transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`,
        transition: 'transform 0.1s ease'
      }
    : {};

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background Effect with JPG */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={parallaxStyle}
      >
        <Image
          src="/parallax_image.jpg"
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-30 blur-sm"
        />
      </div>

      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
          {/* Rest of the component remains unchanged */}
          {/* Profile Picture */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/profile.jpg"
              alt="Your Profile Picture"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Personal Introduction */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              Haley Smith
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
            Hi there! I'm a passionate web developer with a keen eye for design, always striving to build visually stunning and user-friendly websites. Whether it's crafting sleek, responsive pages or creating seamless user experiences, I thrive on turning ideas into interactive digital experiences. My love for photography allows me to capture moments that tell compelling stories, while my travel adventures inspire fresh design perspectives. I'm constantly learning, evolving, and excited to merge my creative skills with the latest tech to bring bold, innovative projects to life!
            </p>
          </div>

          {/* Skills or Interests */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Web Development", "Design", "Photography", "Travel"].map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Projects and Jobs Links */}
          <div className="flex gap-4 items-center">
            <Link 
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              {icons.Projects}
              <span>My Projects</span>
            </Link>
            <Link 
              href="/jobs"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
            >
              {icons.Jobs}
              <span>My Jobs</span>
            </Link>
          </div>

          {/* Contact or Social Links */}
          <div className="flex gap-4">
            {[
              { name: "GitHub", url: "https://github.com/haleysmith-dev", icon: icons.GitHub },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/haleysmith-dev", icon: icons.LinkedIn },
              { name: "Email", url: "mailto:haleysmith.dev@example.com", icon: icons.Email }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-gray-700 hover:text-black"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}