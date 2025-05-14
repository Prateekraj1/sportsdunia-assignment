"use client";
import { useEffect, useState } from "react";
import { useNews } from "@/contexts/News";
import { useUser } from "@/contexts/User";
import DashboardCards from "./DashboardCards";
import Payout from "./Payout";
import DashboardHeader from "./DashboardHeader";
import SearchFilters from "./SearchFilters";
import ExportButtons from "./ExportButtons";
import ChartWrapper from "./ChartWrapper";
import ArticleList from "./ArticleList";
import ErrorPage from "../common/ErrorPage";

const Dashboard = () => {
  const { articles, status: articleStatus } = useNews();
  const [payoutRate, setPayoutRate] = useState(10);

  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    let result = articles;
    if (search) {
      result = result.filter(
        (a) =>
          a.title?.toLowerCase().includes(search.toLowerCase()) ||
          a.author?.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredArticles(result);
  }, [articles, search]);

  const totalPayout = filteredArticles.length * payoutRate;
  const chartData = filteredArticles.reduce((acc, item) => {
    const author = item.author || "Unknown";
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});
  const chartArray = Object.entries(chartData).map(([author, count]) => ({
    author,
    count,
  }));

  if (articleStatus === "failed") return <ErrorPage />;
  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 bg-gray-100 dark:bg-gray-900 transition-colors overflow-hidden min-h-[100dvh]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <DashboardHeader />
        </div>

        <DashboardCards
          articlesCount={filteredArticles.length}
          totalPayout={totalPayout}
        />

        <SearchFilters
          search={search}
          setSearch={setSearch}
        />

        <ChartWrapper chartArray={chartArray} />

        <ExportButtons articles={filteredArticles} />

        <ArticleList articles={filteredArticles} />

        <div className="my-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            💵 Payout Table
          </h2>
          <Payout articles={filteredArticles} setPayoutRate={setPayoutRate} payoutRate={payoutRate} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
