import Dashboard from "@/components/dashboard/Dashboard";
import { NewsProvider } from "@/contexts/News";
import axios from "axios";

const getNews = async () => {
  try {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          country: "us",
        },
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
        },
      }
    );
    return data.articles || [];
  } catch (err) {
    console.error("News fetch error:", err);
    return [];
  }
};

const Page = async () => {
  const articles = await getNews();

  return (
    <NewsProvider initialArticles={articles}>
      <Dashboard />
    </NewsProvider>
  );
};

export default Page;
