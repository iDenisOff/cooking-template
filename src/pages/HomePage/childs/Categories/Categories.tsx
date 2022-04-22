import React from "react";
import styles from "./Categories.style.css";
import {CategoriesItem} from "./childs/CategoriesItem";
import breakfast from "./content/breakfast.png";
import vegan from "./content/vegan.png";
import meat from "./content/meat.png";
import dessert from "./content/dessert.png";
import lunch from "./content/lunch.png";
import chocolate from "./content/chocolate.png";

export const Categories: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return <div className={styles.container}>
        <div className={styles.titleContainer}>
            <span className={styles.titleText}>{"Categories"}</span>
            <button onClick={onClick} className={styles.button}>
                {"View All Categories"}
            </button>
        </div>
        <div className={styles.listContainer}>
            <CategoriesItem photoUrl={breakfast} name={"Breakfast"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)"}}/>
            <CategoriesItem photoUrl={vegan} name={"Vegan"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)"}}/>
            <CategoriesItem photoUrl={meat} name={"Meat"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)"}}/>
            <CategoriesItem photoUrl={dessert} name={"Dessert"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)"}}/>
            <CategoriesItem photoUrl={lunch} name={"Lunch"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"}}/>
            <CategoriesItem photoUrl={chocolate} name={"Chocolate"}
                            bgStyle={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"}}/>
        </div>
    </div>;
};
