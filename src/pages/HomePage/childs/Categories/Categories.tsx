import React from "react";
import styles from "./Categories.style.css";

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
            {"Container"}
        </div>
    </div>;
};
