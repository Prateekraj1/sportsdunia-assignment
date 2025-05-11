import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.author || "Unknown"),
    datasets: [
      {
        label: "Articles Count",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64 md:h-96 bg-white dark:bg-gray-800 p-4 shadow rounded">
      <Bar data={chartData} options={options} />
    </div>
  );
};
export default ChartComponent;
