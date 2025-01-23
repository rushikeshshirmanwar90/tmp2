import React from "react";

const CircuitPattern = () => {
  return (
    <div>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 100 100"
      >
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 10h8v1h-8v-1zm12 0h8v1h-8v-1zm12 0h8v1h-8v-1z "
            fill="currentColor"
          />
          <path
            d="M10 0v8h1v-8h-1zm0 12v8h1v-8h-1zm0 12v8h1v-8h-1z"
            fill="currentColor"
          />
          <path
            d="M20 0v8h1v-8h-1zm0 12v8h1v-8h-1zm0 12v8h1v-8h-1z"
            fill="currentColor"
          />
          <path
            d="M30 0v8h1v-8h-1zm0 12v8h1v-8h-1zm0 12v8h1v-8h-1z"
            fill="currentColor"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
