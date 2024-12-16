import React from "react";

export const ImageDisplay = ({ src, alt }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-xl py-4">
      <div className="relative w-full h-full">
        <img src={src} alt={alt} className="absolute top-0 left-0 w-full h-full object-contain rounded-lg" />
      </div>
    </div>
  );
};
