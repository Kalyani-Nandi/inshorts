import React from "react";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
