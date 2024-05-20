import React from "react";
import Home from "../Home";
import Recipe from "../Recipe";
import About from "../AboutMe";
import styles from "./maincontent.module.css";

const Main = ({ page }) => {
  switch (page) {
    case "Recipes":
      return (
        <div className={styles.mainContent}>
          <Recipe />
        </div>
      );
    case "About me":
      return (
        <div className={styles.mainContent}>
          <About />
        </div>
      );
    default:
      return (
        <div className={styles.mainContent}>
          <Home />
        </div>
      );
  }
};

export default Main;
