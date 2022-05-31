import React from "react";
import styles from "./TastyRecipesItem.style.css";
import { routesPaths } from "../../../../common/consts";

type TastyRecipesItemProps = {
    photoUrl: string;
    title: string;
    author: string;
};

export const TastyRecipesItem: React.FC<TastyRecipesItemProps> = (props) => {
    const onClick = (): void => {
        window.scrollTo(0, 0);
        location.href = "/#" + routesPaths.recipesPage;
    };
  
    return (
        <div className={styles.container} onClick={onClick}>
            <img src={props.photoUrl} alt={props.title} style={{borderRadius: "20px"}}/>
            <div style={{margin: "auto"}}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.author}>{props.author}</p>
            </div>
        </div>
    );
};
