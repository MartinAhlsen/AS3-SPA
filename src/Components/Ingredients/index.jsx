import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      <h3>ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
