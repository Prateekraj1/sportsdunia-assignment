import ErrorPage from "@/components/common/ErrorPage";
import Dashboard from "@/components/dashboard/Dashboard";
import { NewsProvider } from "@/contexts/News";
import axios from "axios";

const Page = async () => {
  try {
    var { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "us",
      },
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
  } catch {
    return <ErrorPage />;
  }
  return (
    <NewsProvider initialArticles={data.articles || []}>
      <Dashboard />
    </NewsProvider>
  );
};

export default Page;
