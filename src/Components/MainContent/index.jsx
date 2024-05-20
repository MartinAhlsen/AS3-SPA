import React from "react";
import Home from "../Home";
import Recipe from "../Recipe";
import About from "../AboutMe";

const Main = ({ page }) => {
  switch (page) {
    case "Home":
      return <Home />;
    case "Recipes":
      return <Recipe />;
    case "About me":
      return <About />;
    // default:
    //   return <Home />;
  }
};

export default Main;
