import React from "react";
import "../assets/style/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  console.log("Recipe prop:", recipe); // Debugging log

  return (
    <div className="recipe-card">
      <img
        src={recipe?.image || "https://via.placeholder.com/300"}
        alt={recipe?.title || "Recipe Image"}
        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
      />
      <h2>{recipe?.title || "Untitled Recipe"}</h2>
      <p>
        <strong>Ingredients:</strong> {recipe?.ingredients || "No ingredients available."}
      </p>
    </div>
  );
};

export default RecipeCard;
