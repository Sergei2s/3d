import React from 'react';
// import Lottie from "lottie-react";
// import logoAnimation from "../assets/logo-animation.json"; // You need to create this file

const LottieLogo: React.FC = () => {
  // --- INSTRUCTIONS FOR USER ---
  // 1. Place your JSON animation file in the folder (e.g., src/assets/logo.json or public/Image/logo.json)
  // 2. Uncomment the import Lottie above
  // 3. Uncomment the code below and remove the placeholder <div>
  
  /*
  return (
    <div className="w-16 h-16">
      <Lottie animationData={logoAnimation} loop={true} />
    </div>
  );
  */

  // Placeholder until you insert your Lottie code
  return (
    <div className="w-14 h-14 flex items-center justify-center bg-blue-100/10 rounded-full border border-blue-500/30 shadow-inner">
      <span className="text-[8px] text-center leading-tight text-gray-500">Lottie<br/>Place<br/>holder</span>
    </div>
  );
};

export default LottieLogo;