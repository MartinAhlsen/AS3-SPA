import React from "react";
import Button from "../Button";
import styles from "./nav.module.css";

const Nav = ({ setPage, page }) => {
  return (
    <div className={styles.nav}>
      <Button name="Home" setPage={setPage} page={page} />
      <Button name="Recipes" setPage={setPage} page={page} />
      <Button name="About me" setPage={setPage} page={page} />
    </div>
  );
};

export default Nav;
