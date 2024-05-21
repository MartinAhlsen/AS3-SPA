import React from "react";
import Heading from "../Heading";
import styles from "./home.module.css";

const Home = () => {
  const title = "Welcome to the Home of the Finest Baker in the Galaxy";
  return (
    <div className={styles.wrapper}>
      <Heading title={title} />
      <p>
        Darth Vader, the formidable Sith Lord known for his dark powers and
        imposing presence, has a surprising hobby: baking. In the quiet solitude
        of his personal quarters aboard the Death Star, Vader finds solace in
        the meticulous art of baking. Clad in his iconic black armor, he
        carefully measures out flour and sugar, the contrast of his dark figure
        against the light, powdery ingredients creating an almost poetic scene.
        With the precision of a lightsaber duel, he mixes the batter, the
        rhythmic motion a form of meditation. As the smell of freshly baked
        cookies fills the air, the usually menacing atmosphere of the Death Star
        softens, if only for a moment. Darth Vader, a master of the Dark Side,
        also masters the delicate balance of flavors, proving that even the
        darkest of souls can find peace in the simple joy of baking.
      </p>
    </div>
  );
};

export default Home;
