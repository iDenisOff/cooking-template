import React from "react";
import styles from "./HomePage.style.css";
import { Header } from "./childs/Header";
import {Categories} from "./childs/Categories";
import {Recipes} from "./childs/Recipes";
import {Summary} from "./childs/Summury";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Categories />
            <Recipes />
            <Summary />
        </div>
    );
};
