import React from 'react'

const VRHeadset = () => {
  return (
    <div>
          <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
    <path
      d="M50 80h200v70c0 16.569-13.431 30-30 30H80c-16.569 0-30-13.431-30-30V80z"
      className="fill-blue-50 stroke-blue-500"
      strokeWidth="4"
    />
    <path
      d="M90 80V60c0-16.569 13.431-30 30-30h60c16.569 0 30 13.431 30 30v20"
      className="stroke-blue-500"
      strokeWidth="4"
    />
    <circle cx="120" cy="115" r="25" className="fill-blue-100 stroke-blue-500" strokeWidth="3"/>
    <circle cx="180" cy="115" r="25" className="fill-blue-100 stroke-blue-500" strokeWidth="3"/>
    <path
      d="M110 115a2 2 0 014 0v10a2 2 0 01-4 0v-10zm16 0a2 2 0 014 0v10a2 2 0 01-4 0v-10z"
      className="fill-blue-500"
    />
    <path
      d="M170 115a2 2 0 014 0v10a2 2 0 01-4 0v-10zm16 0a2 2 0 014 0v10a2 2 0 01-4 0v-10z"
      className="fill-blue-500"
    />
  </svg>
    </div>
  )
}

export default VRHeadset