import React from "react";
import styles from "./DeliciousRecipes.style.css";
import {RecipesItem} from "./childs/RecipesItem";
import fruitSalad from "./content/fruitSalad.png";
import cheeseburger from "./content/cheeseburger.png";
import friedRice from "./content/friedRice.png";
import vegetarianTaco from "./content/vegetarianTaco.png";
import chickenSalad from "./content/сhickenSalad.png";
import sandwiches from "./content/sandwiches.png";
import lettuceWraps from "./content/lettuceWraps.png";
import ramenSoup from "./content/ramenSoup.png";

export const DeliciousRecipes: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>
                    {"Try this delicious recipe"}
                    <br/>
                    {"to make your day"}
                </p>
                <p className={styles.text}>
                    {"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor"}
                    <br/>
                    {"incididunt ut labore et dolore magna aliqut enim ad minim"}
                </p>
            </div>
            <div className={styles.recipesContainer}>
                <RecipesItem photoUrl={fruitSalad} name={"Mixed Tropical Fruit Salad with Superfood Boosts "} time={30}
                             type={"Healthy"}/>
                <RecipesItem photoUrl={cheeseburger} name={"Big and Juicy Wagyu Beef Cheeseburger"} time={30}
                             type={"Western"}/>
                <RecipesItem photoUrl={friedRice} name={"Healthy Japanese Fried Rice with Asparagus"} time={30}
                             type={"Healthy"}/>
                <RecipesItem photoUrl={vegetarianTaco} name={"Cauliflower Walnut Vegetarian Taco Meat"} time={30}
                             type={"Eastern"}/>
                <RecipesItem photoUrl={chickenSalad} name={"Rainbow Chicken Salad with Almond Honey Mustard Dressing"}
                             time={30} type={"Healthy"}/>
                <RecipesItem photoUrl={sandwiches} name={"Barbeque Spicy Sandwiches with Chips "} time={30}
                             type={"Snack"}/>
                <RecipesItem photoUrl={lettuceWraps} name={"Firecracker Vegan Lettuce Wraps - Spicy! "} time={30}
                             type={"Seafood"}/>
                <RecipesItem photoUrl={ramenSoup} name={"Chicken Ramen Soup with Mushroom "} time={30}
                             type={"Japanese"}/>
            </div>
        </div>
    );
};
