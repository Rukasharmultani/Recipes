import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading recipe: {error.message}</p>;
  }

  if (!recipe) {
    return <p>No recipe found.</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{recipe.name}</h1>

      {/* Additional Details */}
      <div className="d-flex justify-content-center mb-4">
        <div className="me-3 d-flex align-items-center">
          <i className="bi bi-clock text-primary me-2"></i>
          <span>{recipe.prepTimeMinutes || "N/A"} mins</span>
        </div>
        <div className="me-3 d-flex align-items-center">
          <i className="bi bi-people-fill text-success me-2"></i>
          <span>Serves: {recipe.servings || "N/A"}</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-bar-chart text-warning me-2"></i>
          <span>Difficulty: {recipe.difficulty}</span>
        </div>
      </div>

      <div className="row">
        
        <div className="col-md-6 mb-4">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

      
        <div className="col-md-6">
          <h2>Ingredients</h2>
          <ul className="list-unstyled">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                <i className="bi bi-check-circle-fill text-danger"></i> {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      <div className="mt-4">
        <h2>Instructions</h2>
        {Array.isArray(recipe.instructions) ? (
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">
                <i className="bi bi-play-circle text-danger me-2"></i>
                {step}
              </li>
            ))}
          </ol>
        ) : (
          <p>{recipe.instructions || "No instructions available."}</p>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-4">
        <h2>Additional Information</h2>
        <h5>
          <strong>Category:</strong> <b>{recipe.cuisine}</b>
        </h5>
        <h5 className="d-flex align-items-center">
          <strong>Rating:</strong><b>{recipe.rating}</b>
          <i className="bi bi-star-fill text-warning mx-2"></i>
          
        </h5>
        <h5>
          <strong>Type of Meal:</strong> <b>{recipe.mealType}</b>
        </h5>
      </div>
    </div>
  );
};

export default RecipeDetails;
