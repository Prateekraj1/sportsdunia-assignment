import { useState, useEffect } from "react";

const Payout = ({ articles, payoutRate, setPayoutRate }) => {
  const [localArticles, setLocalArticles] = useState([]);

  useEffect(() => {
    const savedRate = localStorage.getItem("payoutRate");
    if (savedRate) setPayoutRate(parseFloat(savedRate));
  }, []);

  useEffect(() => {
    localStorage.setItem("payoutRate", payoutRate);
  }, [payoutRate]);

  useEffect(() => {
    const authorMap = {};
    articles.forEach((article) => {
      const authorName = article.author || "Unknown";
      authorMap[authorName] = (authorMap[authorName] || 0) + 1;
    });
    const summary = Object.entries(authorMap).map(([author, count]) => ({
      author,
      count,
    }));
    setLocalArticles(summary);
  }, [articles]);

  return (
    <div className="overflow-x-auto w-full bg-white dark:bg-gray-800 rounded shadow p-4">
      <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <label className="font-bold text-gray-800 dark:text-white">
          Payout Rate:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="border border-gray-300 rounded p-1 w-24 dark:bg-gray-700 dark:text-white"
            value={payoutRate}
            onChange={(e) => setPayoutRate(parseFloat(e.target.value) || 0)}
          />
          <span className="dark:text-white">$/article</span>
        </div>
      </div>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
          <tr>
            <th className="px-4 py-2 text-left">Author</th>
            <th className="px-4 py-2 text-left">Articles</th>
            <th className="px-4 py-2 text-left">Payout</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-100">
          {localArticles.map((item) => (
            <tr key={item.author} className="border-b dark:border-gray-600">
              <td className="px-4 py-2">{item.author}</td>
              <td className="px-4 py-2">{item.count}</td>
              <td className="px-4 py-2">
                ${(item.count * payoutRate).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Payout;
