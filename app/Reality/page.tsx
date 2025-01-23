import FeaturesSection from "@/components/FeatureCard";
import InteractiveDemo from "@/components/InteractiveDemo";
import HeroSection from "@/components/VRHero";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <InteractiveDemo />
      <FeaturesSection />
    </div>
  );
};

export default page;
