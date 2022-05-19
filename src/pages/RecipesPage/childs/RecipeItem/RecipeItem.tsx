import React from "react";
import styles from "./RecipeItem.style.css";
import dish from "./content/dish.png";
import { ItemHeader } from "./childs/ItemHeader";
import author from "./content/author.png";
import { ItemInformation } from "./childs/ItemInformation";
import { Ingredients } from "./childs/Ingredients";
import { TastyRecipes } from "../../../../components/TastyRecipes";
import chickenMeatballs from "./content/chickenMeatballs.png";
import ragu from "./content/ragu.png";
import dumplings from "./content/dumplings.png";

const informationItems = [
    { title: "Calories", value: "219.9 kcal", },
    { title: "Total Fat", value: "10.7 g", },
    { title: "Protein", value: "7.9 g", },
    { title: "Carbohydrate", value: "22.3 g", },
    { title: "Cholesterol", value: "37.4 mg", },
];

const dishIngredients = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
];

const sauceIngredients = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
];

const recipesItems = [
    { photoUrl: chickenMeatballs, title: "Chicken Meatballs with Cream Cheese", author: "By Andreas Paula"},
    { photoUrl: ragu, title: "Traditional Bolognaise Ragu", author: "By Andreas Paula"},
    { photoUrl: dumplings, title: "Pork and Chive Chinese Dumplings", author: "By Andreas Paula"},
];

export const RecipeItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <ItemHeader
                title={"Health Japanese Fried Rice"}
                authorPhotoUrl={author}
                authorName={"John Smith"}
                postDate={"15 March 2022"}
                prepTime={15}
                cookTime={15}
                mainDish={"Chicken"}
            />
            <div className={styles.block}>
                <img src={dish} alt={"dish"} style={{ borderRadius: "30px" }} />
                <ItemInformation
                  title={"Nutrition Information"}
                  items={informationItems}
                  text={"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                />
            </div>
            <p className={styles.summary}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                {"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                {"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                {"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <div className={styles.block}>
                <Ingredients dishIngredientNames={dishIngredients} sauceIngredientNames={sauceIngredients} />
                <TastyRecipes title={"Other Recipe"} items={recipesItems} />
            </div>
        </div>
    );
};
