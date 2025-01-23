"use client";

import ScrollOverlay from "@/components/Home";
import "@/app/globals.css";

const Home = () => {
  return (
    <main className="relative min-h-screen no-scrollbar">
      {/* Content Sections */}
      <div className="relative">
        {/* ScrollOverlay Section */}
        <div className="relative">
          <ScrollOverlay />
        </div>

        <div className="relative bg-gradient-to-b from-blue-900 to-black">
          <div
            className="relative"
            style={{
              zIndex: 51,
              position: "relative",
              isolation: "isolate",
            }}
          >
            {/* add the content of the page here */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
