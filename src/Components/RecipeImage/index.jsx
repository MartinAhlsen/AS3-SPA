import recipeImages from "../../assets/data/recipeImages.js";
import styles from "./recipeImage.module.css";

const RecipeImage = ({ index, name }) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.img} src={recipeImages[index]} alt={name} />
    </div>
  );
};

export default RecipeImage;
