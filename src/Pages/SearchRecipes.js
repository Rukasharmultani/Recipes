import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);
    setRecipes([]);

    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.recipes.length === 0) {
          throw new Error("No recipes found.");
        }
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      

      <div className="container text-center my-5">
        <h1>Search Recipe Details</h1>
      </div>

      <div className="container text-center my-5">
        <h4>Check Our Yummy Recipes</h4>
      </div>

      <div className="container my-4 text-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter recipe name"
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            borderRadius: "20%",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "#e67e22",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <i className="fa fa-search">Search</i>
        </button>
      </div>

      <div className="container text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="container">
        <div className="row gy-5">
          {recipes.map((recipe) => (
            <div className="col-lg-4 col-md-6 col-sm-12 menu-item text-center" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`} className="glightbox">
                <img
                  src={recipe.image}
                  className="menu-img img-fluid"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s",
                  }}
                  alt={recipe.name}
                />
              </Link>
              <h4 className="mt-3">{recipe.name}</h4>
              <p className="ingredients">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>

    
      
    </div>
  );
};

export default SearchRecipes;
