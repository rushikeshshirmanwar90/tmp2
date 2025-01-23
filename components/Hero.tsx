"use client";

import { ChevronDown, Monitor, Binary, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Types
interface Proficiency {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface BackgroundShape {
  type: "square" | "circle" | "triangle";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: string;
  delay: number;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Background Components
const AnimatedGrid: React.FC = () => (
  <div className="absolute inset-0 opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #4a3aff15 1px, transparent 1px),
          linear-gradient(to bottom, #4a3aff15 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "grid 6s linear infinite",
      }}
    />
  </div>
);

const Stars: React.FC = () => (
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: Math.random() * 0.7 + 0.3 }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const FloatingShapes: React.FC = () => {
  const shapes: BackgroundShape[] = [
    {
      type: "square",
      position: { top: "25%", left: "25%" },
      size: "4rem",
      delay: 0,
    },
    {
      type: "circle",
      position: { top: "33%", right: "25%" },
      size: "3rem",
      delay: 1,
    },
    {
      type: "triangle",
      position: { bottom: "33%", right: "33%" },
      size: "2rem",
      delay: 2,
    },
  ];

  return (
    <div className="absolute inset-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            ...shape.position,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [-20, 0, -20],
            rotate: shape.type === "square" ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "square" && (
            <div className="w-full h-full border-2 border-purple-500 opacity-60 transform rotate-45" />
          )}
          {shape.type === "circle" && (
            <div className="w-full h-full rounded-full border-2 border-cyan-400 opacity-60" />
          )}
          {shape.type === "triangle" && (
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-blue-500 border-r-[20px] border-r-transparent opacity-60" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Proficiency Card Component
const ProficiencyCard: React.FC<{
  proficiency: Proficiency;
  index: number;
}> = ({ proficiency, index }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: index * 0.1 }}
    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:scale-105 transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <motion.div
        className="p-3 bg-white/20 rounded-lg mr-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {proficiency.icon}
      </motion.div>
      <div>
        <h3 className="font-semibold text-lg text-white">{proficiency.name}</h3>
        <p className="text-sm text-gray-300">
          {proficiency.level}% Proficiency
        </p>
      </div>
    </div>
    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${proficiency.level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`h-full bg-gradient-to-r ${proficiency.color}`}
      />
    </div>
    <motion.p
      className="mt-3 text-sm text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {proficiency.description}
    </motion.p>
  </motion.div>
);

// Main Component
const LandingSection: React.FC = () => {
  const proficiencies: Proficiency[] = [
    {
      name: "AR/VR Technology",
      level: 95,
      icon: <Monitor className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Advanced virtual and augmented reality solutions",
    },
    {
      name: "Nanotechnology",
      level: 92,
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Cutting-edge nanoscale engineering and research",
    },
    {
      name: "AI Integration",
      level: 88,
      icon: <Binary className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "LLM API implementation and AI solutions",
    },
    {
      name: "Quantum Computing",
      level: 85,
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Next-gen computational technology",
    },
  ];

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-auto">
      <div className="absolute inset-0 w-full h-full -z-10 overflow-auto bg-gradient-to-br from-black to-purple-900">
        <AnimatedGrid />
        <Stars />
        <FloatingShapes />
      </div>

      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center text-white mb-8 lg:mb-16">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              TechFront Solutions
            </h1>
            {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Pioneering the Future of Technology
            </p> */}
          </motion.div>

          {/* <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Integrating AR/VR, Nanotechnology, and Advanced AI Solutions for
            Next-Generation Innovation
          </motion.p> */}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3  sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-thin
               transition-colors text-lg tracking:wide sm:text-base"
            >
              Explore Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white hover:bg-white hover:text-purple-900 rounded-full font-thin tracking-wide transition-colors text-sm sm:text-base"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
        >
          {proficiencies.map((prof, index) => (
            <ProficiencyCard key={index} proficiency={prof} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center left-0 bottom-8 top-0 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-white/80 tracking-wider text-sm sm:text-base">
            Transforming complex models into accessible, impactful tools for
            everyone.{" "}
          </p>
        </motion.div>
      </motion.div>

      <div className="">
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
