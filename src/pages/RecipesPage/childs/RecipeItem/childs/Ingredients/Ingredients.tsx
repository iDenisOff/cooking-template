import React from "react";
import styles from "./Ingredients.style.css";
import { IngredientsItem } from "./childs/IngredientsItem";

type IngredientsProps = {
    dishIngredientNames: string[];
    sauceIngredientNames: string[];
}

export const Ingredients: React.FC<IngredientsProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.header}>{"Ingredients"}</p>
            <p className={styles.title}>{"For main dish"}</p>
            {props.dishIngredientNames.map((i) => {
                return (
                    <IngredientsItem text={i}/>
                );
            })}
            <p className={styles.title}>{"For the sauce"}</p>
            {props.sauceIngredientNames.map((i) => {
                return (
                  <IngredientsItem text={i}/>
                );
            })}
        </div>
    );
};
