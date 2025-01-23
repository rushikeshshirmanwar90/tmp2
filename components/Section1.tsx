"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CircuitPattern from "./CircuitPattern";

interface Feature {
  title: string;
  description: string;
  delay: string;
  gradient: string;
}

const FeatureCard = ({
  feature,
  isVisible,
}: {
  feature: Feature;
  isVisible: boolean;
}) => (
  <div
    className={`group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
      hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]
      transition-all duration-500 transform flex-shrink-0 w-full sm:w-80
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      ${feature.delay}`}
  >
    <div
      className={`h-1 w-full bg-gradient-to-r ${feature.gradient} mb-6 rounded-full 
      transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
    />
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

const Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    {
      title: "Virtual Reality",
      description: "Immerse yourself in stunning digital environments",
      delay: "delay-[100ms]",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Augmented Reality",
      description: "Blend digital content with your physical world",
      delay: "delay-[200ms]",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Mixed Reality",
      description: "Experience seamless digital-physical integration",
      delay: "delay-[300ms]",
      gradient: "from-cyan-500 to-cyan-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSlide = (direction: string) => {
    const newSlide =
      direction === "next"
        ? Math.min(currentSlide + 1, features.length - 1)
        : Math.max(currentSlide - 1, 0);

    setCurrentSlide(newSlide);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white overflow-y-auto"
    >
      <CircuitPattern />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div
          className={`transition-all duration-700 ease-out transform
            ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        >
          <div className="flex items-center justify-start max-w-7xl mx-auto sm:mb-10  md:mb-16 lg:mb-24">
            <h1
              className="text-7xl sm:text-8xl md:text-7xl lg:text-8xl font-thin tracking-wide mb-8 
               leading-[1.2] sm:leading-[1.1] lg:leading-[1.2] 
               px-4 sm:px-8 lg:px-12 text-left"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Engage with the Future of Reality
              </span>
            </h1>
          </div>

          {/* Mobile Slider */}
          <div className="relative md:hidden mb-16">
            <div className="flex justify-center items-center">
              <FeatureCard
                feature={features[currentSlide]}
                isVisible={isVisible}
              />
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => scrollToSlide("prev")}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full ${
                  currentSlide === 0
                    ? "bg-gray-200 text-gray-400"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollToSlide("next")}
                disabled={currentSlide === features.length - 1}
                className={`p-2 rounded-full ${
                  currentSlide === features.length - 1
                    ? "bg-gray-200 text-gray-400"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/Reality"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600 rounded-full
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore the Technology
              <svg
                className="ml-2 w-5 h-5 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Section;
