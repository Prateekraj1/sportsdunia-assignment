"use client";
import React from "react";

const LoginShimmer = () => {
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg animate-pulse">
      <div className="h-6 w-32 bg-gray-200 rounded mb-6 mx-auto"></div>

      <div className="space-y-4">
        <div>
          <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div>
          <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-4 w-40 bg-gray-200 rounded mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default LoginShimmer;
