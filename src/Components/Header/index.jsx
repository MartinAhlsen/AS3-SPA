import React from "react";
import Nav from "../Nav";
import styles from "./header.module.css";

const Header = ({ setPage, page }) => {
  return (
    <>
      <header>
        <span className={styles.title}>Baking with Vader</span>
        <Nav setPage={setPage} page={page} />
      </header>
    </>
  );
};

export default Header;
