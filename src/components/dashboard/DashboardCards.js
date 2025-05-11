const DashboardCards = ({ articlesCount, totalPayout }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded text-center">
        <h3 className="text-sm font-bold mb-2 text-gray-700 dark:text-gray-200">Total Articles</h3>
        <p className="text-2xl text-gray-900 dark:text-white">{articlesCount}</p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded text-center">
        <h3 className="text-sm font-bold mb-2 text-gray-700 dark:text-gray-200">Total Payout</h3>
        <p className="text-2xl text-gray-900 dark:text-white">${totalPayout.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default DashboardCards;
