"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import InputGroup from "../common/form/InputGroup";
import InputLabel from "../common/form/InputLabel";
import axios from "axios";
import { toast } from "react-toastify";
import { useNews } from "@/contexts/News";

const categoryOptions = [
  { value: "", label: "All" },
  { value: "business", label: "Business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "general", label: "General" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
];

const SearchFilters = ({ search, setSearch }) => {

  const { setArticles } = useNews();
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });
  const [selectedCategory, setSelectedCategory] = useState({
    value: "",
    label: "All",
  });

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  useEffect(() => {
    if (selectedCategory.value || dateRange.start || dateRange.end) {
      fetchFilteredArticles();
    }
  }, [selectedCategory, dateRange]);

  const fetchFilteredArticles = async () => {

    let url = `https://newsapi.org/v2/everything?q=${selectedCategory.value || "top"}&apiKey=${apiKey}`;

    if (dateRange.start) {
      url += `&from=${dateRange.start}`;
    }
    if (dateRange.end) {
      url += `&to=${dateRange.end}`;
    }

    try {
      const res = await axios.get(url);
      setArticles(res.data.articles);

    } catch (err) {
      toast.error("Failed to fetch filtered news");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-full">
      <InputGroup>
        <InputLabel id="search">Search</InputLabel>
        <input
          className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white shadow-sm"
          type="text"
          placeholder="🔍 Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <InputLabel id="start-date">Start Date</InputLabel>
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) =>
            setDateRange({ ...dateRange, start: e.target.value })
          }
          className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
        />
      </InputGroup>

      <InputGroup>
        <InputLabel id="end-date">End Date</InputLabel>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) =>
            setDateRange({ ...dateRange, end: e.target.value })
          }
          className="mt-1 border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
        />
      </InputGroup>

      <InputGroup>
        <InputLabel id="category">Category</InputLabel>
        <Select
          className="mt-1"
          options={categoryOptions}
          value={selectedCategory}
          onChange={(option) => setSelectedCategory(option)}
          placeholder="Select category"
        />
      </InputGroup>
    </div>
  );
};

export default SearchFilters;
