import axios from "axios";

export const fetchNews = async (category) => {
  const apiKey = "dd6339dd04604c84b5feb536e2982ddc";
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

  try {
    const { data } = await axios.get(url);
    return data.articles; 
  } catch (err) {
    console.error("Error fetching news:", err.message);
    return []; 
  }
};
