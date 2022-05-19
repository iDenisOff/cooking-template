import React from "react";
import styles from "./IngredientsItem.style.css";

type IngredientsItemProps = {
    text: string;
};

export const IngredientsItem: React.FC<IngredientsItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <input type={"radio"} className={styles.button} />
            <span className={styles.text}>{props.text}</span>
        </div>
    );
};
