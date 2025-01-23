"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ScanLine, Layers, PlayCircle } from "lucide-react";
import CircuitPattern from "./CircuitPattern";
import Link from "next/link";

const HeroSection = () => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full mt-9 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <CircuitPattern />
      </div>
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-700 ease-out transform delay-100
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Static Cards into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Interactive Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bring your business cards, product cards, and promotional
              materials to life with augmented reality. Create memorable
              experiences that leave a lasting impression.
            </p>

            {/* Quick Steps */}
            <div className="space-y-4 mb-8">
              {[
                { icon: ScanLine, text: "Scan any card with your smartphone" },
                { icon: Layers, text: "Watch 3D content come to life" },
                { icon: PlayCircle, text: "Interact with dynamic AR elements" },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 delay-${
                    (index + 1) * 200
                  }
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-lg text-gray-700">{step.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={"/Reality/Cards"}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600 rounded-full
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Started With AR Cards
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900
                bg-white rounded-full
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              >
                Watch Demo
                <PlayCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div
            className={`transition-all duration-700 ease-out transform delay-300
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[350px] h-[700px] bg-gray-900 rounded-[3rem] p-6 shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[3rem]" />
                {/* Screen Content */}
                <div className="relative h-full w-full bg-transparent rounded-[2rem] overflow-hidden">
                  {/* Demo AR View */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100">
                    {/* <img
                      src=""
                      alt="AR View"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    /> */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                        <Smartphone className="w-16 h-16 text-blue-600 animate-pulse" />
                        <p className="text-gray-900 mt-2 text-center">
                          Scan card to begin
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-8 flex justify-center">
                  <div className="w-48 h-full bg-gray-900 rounded-b-3xl" />
                </div>
              </div>

              {/* Floating Cards */}
              {[
                {
                  rotate: "-6deg",
                  translate: "-translate-x-32 translate-y-12",
                  image: "/card1.jpg",
                },
                {
                  rotate: "6deg",
                  translate: "translate-x-32 translate-y-24",
                  image: "/card2.jpg",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`absolute -right-10 top-1/2 w-60 h-40 bg-white rounded-xl shadow-2xl
                    transform -translate-x-1/2 -translate-y-1/2 ${
                      card.rotate
                    } ${card.translate}
                    animate-float${index + 1} overflow-hidden`}
                >
                  <img
                    src={card.image}
                    alt={`AR Card ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(-180%, -30%) rotate(-6deg) translateY(0);
          }
          50% {
            transform: translate(-180%, -30%) rotate(-6deg) translateY(-10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(-50%, 0%) rotate(6deg) translateY(0);
          }
          50% {
            transform: translate(-50%, 0%) rotate(6deg) translateY(-10px);
          }
        }
        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
