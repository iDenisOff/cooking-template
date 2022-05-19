import React from "react";
import styles from "./TastyRecipes.style.css";
import { TastyRecipesItem } from "./childs/TastyRecipesItem";
import contact from "./content/contact.png";

type TastyRecipesProps = {
    title: string;
    items: { photoUrl: string, title: string, author: string, }[];
};

export const TastyRecipes: React.FC<TastyRecipesProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{props.title}</p>
            {props.items.map((i) => {
                return (
                    <TastyRecipesItem photoUrl={i.photoUrl} title={i.title} author={i.author} />
                );
            })}
            <div className={styles.contactContainer}>
              <img src={contact} alt={"contact"}/>
            </div>
        </div>
    );
};
