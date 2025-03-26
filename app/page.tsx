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

  // Rest of the code remains the same...

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Previous content */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
          Haley Smith
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Hi there! I&apos;m a passionate web developer with a keen eye for design, always striving to build visually stunning and user-friendly websites. Whether it&apos;s crafting sleek, responsive pages or creating seamless user experiences, I thrive on turning ideas into interactive digital experiences. My love for photography allows me to capture moments that tell compelling stories, while my travel adventures inspire fresh design perspectives. I&apos;m constantly learning, evolving, and excited to merge my creative skills with the latest tech to bring bold, innovative projects to life!
        </p>
      </div>
      {/* Rest of the content */}
    </div>
  );
}