import { useState, useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import LandingSection from "./Hero";

const ScrollOverlay = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      bgColor: "bg-purple-800",
      component: <Section1 />,
    },
    {
      bgColor: "bg-blue-900",
      component: <Section2 />,
    },
    {
      bgColor: "bg-indigo-900",
      component: <Section3 />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.min(
        Math.floor(scrollPosition / windowHeight),
        sections.length - 1
      );
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  return (
    <div className="relative">
      {/* Hero Section */}

      <section
        className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-900 text-white transition-opacity duration-500 z-30 ${
          activeSection === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <LandingSection />
      </section>

      {/* Spacer for scroll calculations */}
      <div className="h-screen" />

      {/* Overlay Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`min-h-screen relative ${section.bgColor} transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateY(${index <= activeSection ? "0" : "100"}%)`,
            position: "sticky",
            top: 0,
            zIndex: 30 + index,
            overflowY: "auto",
          }}
        >
          {section.component}
        </section>
      ))}

      {/* Final spacer */}
      <div className="h-screen" />
    </div>
  );
};

export default ScrollOverlay;
