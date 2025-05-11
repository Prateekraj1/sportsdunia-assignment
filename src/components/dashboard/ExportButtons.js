import { exportToCSV, exportToPDF } from "@/helpers/exportFunctions";

const ExportButtons = ({ articles }) => (
  <div className="my-6 flex flex-wrap gap-4 justify-start sm:justify-between">
    <button
      onClick={() => exportToCSV(articles, "news.csv")}
      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow"
    >
      📄 Export CSV
    </button>
    <button
      onClick={() => exportToPDF(articles)}
      className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 shadow"
    >
      🧾 Export PDF
    </button>
  </div>
);
export default ExportButtons;
