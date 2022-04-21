import React from "react";
import styles from "./HomePage.style.css";
import { Header } from "./childs/Header";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
};
