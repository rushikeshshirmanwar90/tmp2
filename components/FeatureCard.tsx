"use client";
import React, { useEffect, useState, useRef } from "react";
import { Code, Share2, BarChart3, Settings, Shield, Users } from "lucide-react";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      if (sectionRef.current && observer) {
        observer.unobserve(sectionRef.current);
        observer.disconnect();
      }
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: "Simple Setup",
      description:
        "Quickly implement AR/VR cards into your projects with minimal setup.",
      benefits: [
        "Effortless card embedding",
        "Cross-platform support",
        "Flexible integration options",
        "Comprehensive guides",
      ],
    },
    {
      icon: Share2,
      title: "Seamless Sharing",
      description:
        "Easily share AR/VR experiences with teams and users for enhanced collaboration.",
      benefits: [
        "One-click sharing",
        "Collaborative workspaces",
        "Instant preview sharing",
        "Real-time updates",
      ],
    },
    {
      icon: BarChart3,
      title: "User Engagement",
      description:
        "Track interactions with your AR/VR cards for better insights and optimization.",
      benefits: [
        "User interaction tracking",
        "Engagement metrics",
        "Performance analytics",
        "Customizable reports",
      ],
    },
    {
      icon: Settings,
      title: "Customizable Experience",
      description:
        "Adjust AR/VR cards to suit your specific needs and branding requirements.",
      benefits: [
        "Brand-specific styling",
        "Customizable animations",
        "Flexible layouts",
        "Theme support",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection",
      description:
        "Ensure the security of your AR/VR content and user interactions with enterprise-grade protection.",
      benefits: [
        "Data encryption",
        "User access controls",
        "Privacy-focused policies",
        "Frequent security updates",
      ],
    },
    {
      icon: Users,
      title: "Access Control",
      description:
        "Manage user roles and permissions to control access to your AR/VR experiences.",
      benefits: [
        "Role-based access",
        "User authentication",
        "Team management tools",
        "Activity monitoring",
      ],
    },
  ];

  function setActiveFeature(): void {
    console.log(`A feature is now active`);
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern AR Experiences
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to create, manage, and scale your AR
            applications
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform cursor-pointer
                ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }
                ${`delay-[${index * 100}ms]`}
                hover:-translate-y-2 hover:shadow-xl`}
              onMouseEnter={() => setActiveFeature()}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">{feature.description}</p>

              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
