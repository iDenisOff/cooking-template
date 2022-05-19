import React from "react";
import styles from "./RecipeParameters.style.css";
import author from "../../../../../../../HomePage/childs/HotRecipes/RecipePart/content/author.png";
import { TimerIcon } from "../../../../../../../../components/Icons/TimerIcon";
import { ForkIcon } from "../../../../../../../../components/Icons/ForkIcon";
import { KnifeIcon } from "../../../../../../../../components/Icons/KnifeIcon";

type RecipeParametersProps = {
    authorPhotoUrl: string;
    authorName: string;
    postDate: string;
    prepTime: number;
    cookTime: number;
    mainDish: string;
};

export const RecipeParameters: React.FC<RecipeParametersProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer} style={{ paddingRight: "58px" }}>
                <img src={props.authorPhotoUrl} alt={"author"}/>
                <div className={styles.itemParameters}>
                    <p className={styles.parameterTitle}>{props.authorName}</p>
                    <span className={styles.parameterValue}>{props.postDate}</span>
                </div>
            </div>
            <div className={styles.itemContainer} style={{ padding: "0 32px" }}>
                <TimerIcon />
                <div className={styles.itemParameters}>
                    <p className={styles.parameterTitle}>{"PREP TIME"}</p>
                    <span className={styles.parameterValue}>{props.prepTime + " Minutes"}</span>
                </div>
            </div>
            <div className={styles.itemContainer} style={{ padding: "0 32px" }}>
                <TimerIcon />
                <div className={styles.itemParameters}>
                    <p className={styles.parameterTitle}>{"COOK TIME"}</p>
                    <span className={styles.parameterValue}>{props.cookTime + " Minutes"}</span>
                </div>
            </div>
            <div className={styles.itemContainer} style={{ paddingLeft: "36px", border: "0" }}>
                <div>
                    <ForkIcon/>
                    <KnifeIcon/>
                </div>
                <span className={styles.parameterValue} style={{ paddingLeft: "10px" }}>{props.mainDish}</span>
            </div>
        </div>
    );
};
