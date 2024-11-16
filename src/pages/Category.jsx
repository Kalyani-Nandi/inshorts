import React from "react";
import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";

const Category = () => {
  const { category } = useParams();
  return <NewsList category={category} />;
};

export default Category;
