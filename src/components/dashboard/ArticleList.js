const ArticleList = ({ articles }) => (
  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded shadow mt-6">
    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">📝 Articles</h2>
    <ul className="max-h-64 overflow-auto space-y-4">
      {articles.map((a, i) => (
        <li
          key={i}
          className="p-3 border rounded shadow-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
        >
          <p className="font-medium text-gray-900 dark:text-white">{a.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By <span className="font-semibold">{a.author || "Unknown"}</span> on{" "}
            {new Date(a.publishedAt).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
export default ArticleList;
