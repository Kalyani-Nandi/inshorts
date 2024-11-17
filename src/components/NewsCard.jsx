import React from "react";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="max-w-xl mx-auto gap-6 border rounded-lg shadow-md overflow-hidden bg-white">
      <div className="flex">
        {/* Image Section */}
        <img
          src={urlToImage}
          alt={title} /* Replace with your image URL */
          className="w-1/3 object-cover"
        />
        {/* Content Section */}
        <div className="p-4 w-2/3">
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          {/* Meta Information */}
          <p className="text-xs text-gray-500 mt-1">
            short by Shalini Ojha / 11:28 am on Sunday 17 November, 2024
          </p>
          {/* Content */}
          <p className="text-sm text-gray-700 mt-2">{description}</p>
          {/* Link */}
          <a
            href="#"
            className="text-blue-600 text-sm mt-2 inline-block font-medium hover:underline"
          >
            read more at X (Formerly Twitter)
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
