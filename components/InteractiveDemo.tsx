"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Eye, Smartphone, Zap, Crown, Gift } from "lucide-react";

const Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

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

  const demoCards = [
    {
      title: "3D Product Viewer",
      description: "Scan to view products in 3D space",
      icon: Box,
      color: "blue",
      delay: "delay-[100ms]",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Interactive Catalog",
      description: "Digital catalog with live AR previews",
      icon: Eye,
      color: "purple",
      delay: "delay-[200ms]",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Virtual Try-On",
      description: "Try products virtually before purchase",
      icon: Smartphone,
      color: "indigo",
      delay: "delay-[300ms]",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  const features = [
    {
      title: "Instant AR Launch",
      description: "No app download required - works directly from browser",
      icon: Zap,
      delay: "delay-[400ms]",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Premium Effects",
      description: "High-quality 3D models and animations",
      icon: Crown,
      delay: "delay-[500ms]",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Custom Branding",
      description: "Personalized designs for your brand",
      icon: Gift,
      delay: "delay-[600ms]",
      gradient: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Next-Gen AR/VR Cards
            </h1>
            <p className="text-xl text-gray-600">
              Bring your products to life with interactive augmented reality
              cards
            </p>
          </div>

          {/* Demo Cards Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {demoCards.map((card, index) => (
                <div
                key={card.title}
                className={`relative group cursor-pointer
                  ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }
                  ${card.delay}`}
                onMouseEnter={() => setActiveCard(index)}
                >
                <div
                  className={`
                  bg-white rounded-2xl p-8
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]
                  transition-all duration-500 transform
                  group-hover:-translate-y-2
                  ${activeCard === index ? "ring-4 ring-blue-500" : ""}
                `}
                >
                  <div
                  className={`h-1 w-full bg-gradient-to-r ${card.gradient} mb-6 rounded-full 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />

                  <card.icon className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>

                  {/* Demo Preview Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-6">
                  <button className="text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300">
                    Try Demo
                  </button>
                  </div>
                </div>
                </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]
                  transition-all duration-500 transform
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                  ${feature.delay}`}
              >
                <div
                  className={`h-1 w-full bg-gradient-to-r ${feature.gradient} mb-6 rounded-full 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
                <feature.icon className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
              bg-gradient-to-r from-blue-600 to-purple-600 rounded-full
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started with AR Cards
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
