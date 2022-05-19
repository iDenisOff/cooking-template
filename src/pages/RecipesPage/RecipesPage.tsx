import React from "react";
import styles from "./RecipesPage.style.css";
import { Header } from "../../components/Header";
import { Feedback } from "../../components/Feedback";
import { Footer } from "../../components/Footer";
import { RecipeItem } from "./childs/RecipeItem";

export const RecipesPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <RecipeItem />
            <Feedback />
            <Footer />
        </div>
    );
};
