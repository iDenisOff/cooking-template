import React from "react";
import styles from "./HomePage.style.css";
import { Header } from "./childs/Header";
import {Categories} from "./childs/Categories";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Categories />
        </div>
    );
};
