import React from "react";
import styles from "./HomePage.style.css";
import { Header } from "./childs/Header";
import {Categories} from "./childs/Categories";
import {Recipes} from "./childs/Recipes";
import {Summary} from "./childs/Summury";
import {InstagramAccountDisplay} from "./childs/InstagramAccountDisplay";
import {DeliciousRecipes} from "./childs/DeliciousRecipes";
import {Feedback} from "./childs/Feedback";
import {Footer} from "./childs/Footer";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
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
