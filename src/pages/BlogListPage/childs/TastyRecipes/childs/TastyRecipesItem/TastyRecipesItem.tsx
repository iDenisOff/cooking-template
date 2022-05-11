import React from "react";
import styles from "./TastyRecipesItem.style.css";

type TastyRecipesItemProps = {
    photoUrl: string;
    title: string;
    author: string;
};

export const TastyRecipesItem: React.FC<TastyRecipesItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.photoUrl} alt={props.title} style={{borderRadius: "20px"}}/>
            <div style={{margin: "auto"}}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.author}>{props.author}</p>
            </div>
        </div>
    );
};
