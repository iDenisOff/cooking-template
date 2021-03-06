import React from "react";
import styles from "./HomePage.style.css";
import { Header } from "../../components/Header";
import { HotRecipes } from "./childs/HotRecipes";
import { Categories } from "./childs/Categories";
import { Recipes } from "./childs/Recipes";
import { Summary } from "./childs/Summury";
import { InstagramAccountDisplay } from "./childs/InstagramAccountDisplay";
import { DeliciousRecipes } from "./childs/DeliciousRecipes";
import { Feedback } from "../../components/Feedback";
import { Footer } from "../../components/Footer";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <HotRecipes />
            <Categories />
            <Recipes />
            <Summary />
            <InstagramAccountDisplay />
            <DeliciousRecipes />
            <Feedback />
            <Footer />
        </div>
    );
};
