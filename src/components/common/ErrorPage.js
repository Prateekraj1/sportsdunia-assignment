"use client";
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-red-500 mb-4">Something went wrong!</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          {error || "We couldn't load the data. Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
