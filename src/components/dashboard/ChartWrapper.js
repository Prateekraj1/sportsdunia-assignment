import ChartComponent from "./ChartComponent";

const ChartWrapper = ({ chartArray }) => (
  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded shadow-md my-6">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
      📈 Articles per Author
    </h2>
    <ChartComponent data={chartArray} />
  </div>
);
export default ChartWrapper;
