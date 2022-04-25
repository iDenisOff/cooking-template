import React from "react";
import styles from "./RecipePart.style.css";
import label from "./content/label.png";
import {TimerIcon} from "../../../../../components/Icons/TimerIcon";
import {ForkIcon} from "../../../../../components/Icons/ForkIcon";
import {KnifeIcon} from "../../../../../components/Icons/KnifeIcon";
import author from "./content/author.png";
import {PlayIcon} from "../../../../../components/Icons/PlayIcon";

export const RecipePart: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <img src={label} alt={"label"}/>
                <span className={styles.labelText}>{"Hot Recipes"}</span>
            </div>
            <p className={styles.title}>{"Spicy delicious chicken wings"}</p>
            <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "}</p>
            <div className={styles.parameters}>
                <div className={styles.parameterContainer}>
                    <TimerIcon/>
                    <span className={styles.parameterText}>{"30 Minutes"}</span>
                </div>
                <div className={styles.parameterContainer}>
                    <div>
                        <ForkIcon/>
                        <KnifeIcon/>
                    </div>
                    <span className={styles.parameterText}>{"Chicken"}</span>
                </div>
            </div>
            <div className={styles.contactsContainer}>
                <img src={author} alt={"author"}/>
                <div className={styles.post}>
                    <p className={styles.postAuthor}>{"John Smith"}</p>
                    <span className={styles.postDate}>{"15 March 2022"}</span>
                </div>
                <button className={styles.button} onClick={onClick}>
                    <span className={styles.buttonText}>{"View Recipes"}</span>
                    <PlayIcon />
                </button>
            </div>
        </div>
    );
};
