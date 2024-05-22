import React from "react";
import Heading from "../Heading";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
  const title = "Darth Vader the Enigmatic Baker";
  return (
    <div className={styles.wrapper}>
      <Heading title={title} />
      <div className={styles.nonTitleWrapper}>
        <img
          className={styles.image}
          src="../assets/images/me.jpg"
          alt="An image of me"
        />
        <div className={styles.text}>
          <p>
            Greetings, I am Darth Vader, a name that resonates across the galaxy
            as a symbol of power and authority. Known primarily as a Sith Lord
            and the enforcer of the Galactic Empire, my journey has been one of
            strength, resilience, and command. However, beyond the dark cape and
            the ominous breathing, there lies a passion that is as surprising as
            it is delightful – baking. Yes, even a figure as fearsome as I finds
            solace and satisfaction in the world of flour, sugar, and yeast.
            This unexpected pursuit has provided a balance to my life, a light
            counterpoint to the dark.
          </p>
          <p>
            In the confines of my quarters aboard the Death Star, I transform
            from a formidable leader into a meticulous baker. Baking allows me
            to channel my precision and focus into something creative and
            nurturing. Whether it's the perfect batch of cookies or a
            meticulously layered cake, each recipe is a new challenge, a test of
            my skills and patience. The process of mixing ingredients, waiting
            for the dough to rise, and finally witnessing the transformation in
            the oven, is profoundly meditative. It is in these moments that I
            find a rare peace, a reminder that there is more to existence than
            power and control.
          </p>
          <p>
            My baked goods have become a small legend among the crew, a
            testament to the unexpected versatility of Darth Vader. Sharing
            these creations with my officers and soldiers has fostered a unique
            sense of camaraderie, one that transcends the usual hierarchy of
            command. It’s remarkable how a simple loaf of bread can bring
            together beings from all walks of life, even those serving on a
            space station designed for domination. Through baking, I have
            discovered a new dimension to my identity, one that proves even the
            darkest figures can have a light side, filled with the warmth of a
            well-baked treat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
