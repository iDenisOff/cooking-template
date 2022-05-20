import React from "react";
import styles from "./RecipeItem.style.css";
import { TimerIcon } from "../Icons/TimerIcon";
import { ForkIcon } from "../Icons/ForkIcon";
import { KnifeIcon } from "../Icons/KnifeIcon";

type RecipeItemProps = {
    photoUrl: string;
    name: string;
    time: number;
    type: string;
}

export const RecipeItem: React.FC<RecipeItemProps> = (props) => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container} onClick={onClick}>
            <img src={props.photoUrl} alt={props.name}/>
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
