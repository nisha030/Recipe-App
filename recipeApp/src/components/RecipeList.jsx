import React from "react";
import RecipeCard from "./RecipeCard";
import "../assets/style/RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes yet. Add a recipe!</p>
      ) : (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))
      )}
    </div>
  );
};

export default RecipeList;
