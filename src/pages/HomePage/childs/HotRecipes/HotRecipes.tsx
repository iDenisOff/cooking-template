import React from "react";
import styles from "./HotRecipes.style.css";
import { RecipePart } from "./RecipePart";
import bg from "./content/bg.png";
import badge from "./content/badge.png";

export const HotRecipes: React.FC = () => {
  return (
      <div className={styles.container}>
          <RecipePart />
          <img src={bg} alt={"bg"} />
          <img src={badge} alt={"badge"} className={styles.badge} />
      </div>
  );
};
