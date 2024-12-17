import React, { useState } from "react";
import "../assets/style/RecipeForm.css";

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !image) return;
    addRecipe({ title, ingredients, image });
    setTitle("");
    setIngredients("");
    setImage("");
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
