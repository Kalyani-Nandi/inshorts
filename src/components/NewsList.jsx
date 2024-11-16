import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { fetchNews } from "../api/news";

const NewsList = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews(category).then(setNews);
  }, [category]);

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
