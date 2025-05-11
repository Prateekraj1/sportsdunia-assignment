import Dashboard from "@/components/dashboard/Dashboard";
import { NewsProvider } from "@/contexts/News";

const Page = async () => {
  let articles = [];

  try {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
      next: { revalidate: 3600 }, // optional caching
    });

    if (!res.ok) throw new Error("News API failed");

    const data = await res.json();
    articles = data.articles || [];
  } catch (err) {
    // Let client decide fallback
    articles = [];
  }

  return (
    <NewsProvider initialArticles={articles}>
      <Dashboard />
    </NewsProvider>
  );
};

export default Page;
