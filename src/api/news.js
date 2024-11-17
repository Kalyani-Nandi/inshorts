import axios from "axios";

export const fetchNews = async (category) => {
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

  try {
    const { data } = await axios.get(url);
    return data.articles; 
  } catch (err) {
    console.error("Error fetching news:", err.message);
    return []; 
  }
};
