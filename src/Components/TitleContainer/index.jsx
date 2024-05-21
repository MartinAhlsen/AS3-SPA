import icon from "../../assets/images/icon.png";
import styles from "./titleContainer.module.css";

const TitleContainer = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
      <span className={styles.title}>Baking with Vader</span>
    </div>
  );
};

export default TitleContainer;
