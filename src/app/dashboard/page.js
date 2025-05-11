import Dashboard from "@/components/dashboard/Dashboard";
import { NewsProvider } from "@/contexts/News";
import axios from "axios";

const Page = async () => {
  let articles = [];

  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: { country: "in" },
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });

    articles = response.data.articles || [];
  } catch (error) {
    articles = [];
  }

  return (
    <NewsProvider initialArticles={articles}>
      <Dashboard />
    </NewsProvider>
  );
};

export default Page;
