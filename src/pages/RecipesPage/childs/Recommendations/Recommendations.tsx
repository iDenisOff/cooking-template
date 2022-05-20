import React from "react";
import styles from "./Recommendations.style.css";
import { RecipeItem } from "../../../../components/RecipeItem";
import fruitSalad from "./content/fruitSalad.png";
import cheeseburger from "./content/cheeseburger.png";
import friedRice from "./content/friedRice.png";
import vegetarianTaco from "./content/vegetarianTaco.png";

export const Recommendations: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{"You may like these recipe too"}</p>
            <div className={styles.recipesContainer}>
                <RecipeItem photoUrl={fruitSalad} name={"Mixed Tropical Fruit Salad with Superfood Boosts "} time={30}
                            type={"Healthy"}/>
                <RecipeItem photoUrl={cheeseburger} name={"Big and Juicy Wagyu Beef Cheeseburger"} time={30}
                            type={"Western"}/>
                <RecipeItem photoUrl={friedRice} name={"Healthy Japanese Fried Rice with Asparagus"} time={30}
                            type={"Healthy"}/>
                <RecipeItem photoUrl={vegetarianTaco} name={"Cauliflower Walnut Vegetarian Taco Meat"} time={30}
                            type={"Eastern"}/>
            </div>
        </div>
    );
};
