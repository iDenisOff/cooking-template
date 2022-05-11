import React from "react";
import styles from "./TastyRecipes.style.css";
import { TastyRecipesItem } from "./childs/TastyRecipesItem";
import chickenMeatballs from "./content/chickenMeatballs.png";
import ragu from "./content/ragu.png";
import dumplings from "./content/dumplings.png";
import contact from "./content/contact.png";

export const TastyRecipes: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{"Tasty Recipes"}</p>
            <TastyRecipesItem photoUrl={chickenMeatballs} title={"Chicken Meatballs with Cream Cheese"} author={"By Andreas Paula"} />
            <TastyRecipesItem photoUrl={ragu} title={"Traditional Bolognaise Ragu"} author={"By Andreas Paula"} />
            <TastyRecipesItem photoUrl={dumplings} title={"Pork and Chive Chinese Dumplings"} author={"By Andreas Paula"} />
            <div className={styles.contactContainer}>
              <img src={contact} alt={"contact"}/>
            </div>
        </div>
    );
};
