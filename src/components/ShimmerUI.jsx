import React from 'react';

function ShimmerCard() {
  return (
    <div className="w-72 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm animate-pulse">
      {/* Image shimmer */}
      <div className="h-44 w-full bg-gray-200"></div>

      {/* Content shimmer */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title shimmer */}
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>

        {/* Cuisines shimmer */}
        <div className="w-1/2 h-3 bg-gray-300 rounded"></div>

        {/* Rating shimmer */}
        <div className="w-16 h-4 bg-gray-300 rounded"></div>

        {/* Footer row shimmer */}
        <div className="flex justify-between items-center mt-2">
          <div className="w-16 h-3 bg-gray-300 rounded"></div>
          <div className="w-12 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function ShimmerUI() {
  return (
    <div className="flex flex-wrap gap-6 justify-center px-4 py-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
}
