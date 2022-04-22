import React from "react";
import styles from "./Recipes.style.css";
import {RecipesItem} from "./childs/RecipesItem";
import burger from "./content/burger.png";
import fish from "./content/fish.png";
import oatmealPancake from "./content/oatmealPancake.png";
import salad from "./content/salad.png";
import meatballs from "./content/meatballs.png";
import contact from "./content/contact.png";
import fruityPancake from "./content/fruityPancake.png";
import chickenAndRice from "./content/chickenAndRice.png";
import chickenAndPasta from "./content/chickenAndPasta.png";

export const Recipes: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>{"Simple and tasty recipes"}</p>
            <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"}</p>
            <div className={styles.itemsContainer}>
                <RecipesItem photoUrl={burger} name={"Big and Juicy Wagyu Beef Cheeseburger"} time={30} type={"Snack"}/>
                <RecipesItem photoUrl={fish} name={"Fresh Lime Roasted Salmon with Ginger Sauce"} time={30} type={"Fish"}/>
                <RecipesItem photoUrl={oatmealPancake} name={"Strawberry Oatmeal Pancake with Honey Syrup"} time={30} type={"Breakfast"}/>
                <RecipesItem photoUrl={salad} name={"Fresh and Healthy Mixed Mayonnaise Salad"} time={30} type={"Healthy"}/>
                <RecipesItem photoUrl={meatballs} name={"Chicken Meatballs with Cream Cheese"} time={30} type={"Meat"}/>
                <img src={contact} alt={"contact"} onClick={onClick}/>
                <RecipesItem photoUrl={fruityPancake} name={"Fruity Pancake with Orange & Blueberry"} time={30} type={"Sweet"}/>
                <RecipesItem photoUrl={chickenAndRice} name={"The Best Easy One Pot Chicken and Rice"} time={30} type={"Snack"}/>
                <RecipesItem photoUrl={chickenAndPasta} name={"The Creamiest Creamy Chicken and Bacon Pasta"} time={30} type={"Noodles"}/>
            </div>
        </div>
    );
};
