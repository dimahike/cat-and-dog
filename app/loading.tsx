import React from "react";

export default function Loading() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg shadow-lg overflow-hidden"
        >
          <div className="h-64 bg-gray-300"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
