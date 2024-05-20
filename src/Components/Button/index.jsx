import React from "react";
import styles from "./button.module.css";

let i = 1;

const Button = ({ name, setPage, page }) => {
  const handleClick = () => {
    if (name !== page) setPage(name);
  };

  return (
    <div className={styles.navItem} onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};

export default Button;
