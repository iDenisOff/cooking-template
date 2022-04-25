import React from "react";
import styles from "./RecipesItem.style.css";
import {TimerIcon} from "./content/TimerIcon";
import {ForkIcon} from "./content/ForkIcon";
import {KnifeIcon} from "./content/KnifeIcon";

type RecipesItemProps = {
    photoUrl: string;
    name: string;
    time: number;
    type: string;
}

export const RecipesItem: React.FC<RecipesItemProps> = (props) => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container} onClick={onClick}>
            <img src={props.photoUrl} alt={props.name} style={{ width: "100%"}}/>
            <p className={styles.name}>{props.name}</p>
            <div className={styles.parameters}>
                <div className={styles.parameterContainer}>
                    <TimerIcon/>
                    <span className={styles.parameterText}>{props.time + " Minutes"}</span>
                </div>
                <div className={styles.parameterContainer}>
                    <div>
                        <ForkIcon/>
                        <KnifeIcon/>
                    </div>
                    <span className={styles.parameterText}>{props.type}</span>
                </div>
            </div>
        </div>
    );
};
