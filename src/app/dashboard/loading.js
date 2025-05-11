"use client";

const DashboardShimmer = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 dark:bg-gray-900 min-h-[100dvh] animate-pulse">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="h-24 bg-gray-300 dark:bg-gray-700 rounded shadow"
            />
          ))}
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded shadow mb-6" />

      <div className="flex justify-end mb-6 gap-4">
        <div className="w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded shadow mb-6">
        <div className="w-40 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
        <ul className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <li key={i} className="p-4 bg-gray-300 dark:bg-gray-700 rounded" />
            ))}
        </ul>
      </div>

      <div className="my-6">
        <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default DashboardShimmer;
