import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = ["Technology", "Sports", "Business", "Health", "Science"];

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Inshorts Clone</h1>
        <ul className="flex space-x-4">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/category/${cat.toLowerCase()}`}
                className="hover:underline"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
