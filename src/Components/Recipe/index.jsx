import React from "react";
import recipes from "../../assets/data/data.js";
import Ingredients from "../Ingredients/index.jsx";
import Instructions from "../Instructions/index.jsx";
import RecipeImage from "../RecipeImage/index.jsx";
import styles from "./recipe.module.css";
import Heading from "../Heading/index.jsx";

const Recipe = () => {
  const title = "Force Fueled Recipes!";
  return (
    <div className={styles.wrapper}>
      <Heading title={title} />
      {recipes.map((recipe, index) => (
        <>
          <div className={styles.recipeContainer} key={index}>
            <RecipeImage index={index} name={recipe.name} />
            <div className={styles.text}>
              <h2>{recipe.name}</h2>
              <Ingredients ingredients={recipe.ingredients} />
              <Instructions instructions={recipe.instructions} />
            </div>
          </div>
          <hr className={styles.separator} />
        </>
      ))}
    </div>
  );
};

export default Recipe;
