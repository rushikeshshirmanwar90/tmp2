import React, { useState, useEffect } from "react";
import { Layers, Sparkles, Brain, LucideIcon } from "lucide-react";

interface StageConfig {
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  title: string;
  description: string;
}

const AICardEvolution: React.FC = () => {
  const [transformStage, setTransformStage] = useState<number>(0);

  useEffect(() => {
    const stages = [0, 1, 2];
    const intervalId = setInterval(() => {
      setTransformStage((prev) => (prev + 1) % stages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const stageConfigs: StageConfig[] = [
    {
      icon: Layers,
      iconColor: "text-gray-400",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      title: "Static Interface",
      description: "Traditional two-dimensional data visualization",
    },
    {
      icon: Brain,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "AI Processing",
      description: "Intelligent data transformation and analysis",
    },
    {
      icon: Sparkles,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      title: "AR-Enhanced Interface",
      description: "Immersive, interactive multi-dimensional experience",
    },
  ];

  const renderCard = (
    stage: number,
    isMobile: boolean = false
  ): React.ReactNode => {
    const currentStage = stageConfigs[stage];
    const Icon = currentStage.icon;

    return (
      <div
        className={`
          absolute w-full h-full ${currentStage.bgColor} rounded-2xl shadow-2xl 
          transition-all duration-1000 flex flex-col justify-center items-center
          ${
            stage === transformStage
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }
          p-8 ${currentStage.borderColor}
          ${isMobile ? "max-w-sm" : ""}
        `}
      >
        <Icon
          className={`
            w-16 h-16 ${currentStage.iconColor} mb-4 
            ${
              stage === 1
                ? "animate-pulse"
                : stage === 2
                ? "animate-bounce"
                : ""
            }
          `}
        />
        <h2
          className={`
            text-2xl font-semibold mb-4 
            ${
              stage === 0
                ? "text-gray-800"
                : stage === 1
                ? "text-blue-900"
                : "text-purple-900"
            }
          `}
        >
          {currentStage.title}
        </h2>
        <p
          className={`
            text-center 
            ${
              stage === 0
                ? "text-gray-600"
                : stage === 1
                ? "text-blue-700"
                : "text-purple-800"
            }
          `}
        >
          {currentStage.description}
        </p>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="text-blue-100"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Mobile & Tablet View */}
        <div className="block md:hidden relative w-full h-[500px] flex justify-center items-center">
          <div className="relative w-full max-w-sm h-96">
            {stageConfigs.map((_, index) => renderCard(index, true))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-6">
            {stageConfigs.map((stage, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl p-6 shadow-xl
                  ${transformStage === index ? "opacity-100" : "opacity-50"}
                `}
              >
                <h3
                  className={`
                    text-2xl font-semibold mb-4 
                    ${
                      index === 0
                        ? "text-gray-800"
                        : index === 1
                        ? "text-blue-800"
                        : "text-purple-800"
                    }
                  `}
                >
                  {stage.title}
                </h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[600px] flex justify-center items-center">
            <div className="relative w-full max-w-sm h-96">
              {stageConfigs.map((_, index) => renderCard(index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICardEvolution;
