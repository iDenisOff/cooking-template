import React from "react";
import styles from "./RecipeItem.style.css";
import author from "./content/author.png";
import { RecipeParameters } from "./childs/RecipeParameters";
import { ActionItem } from "./childs/ActionItem";
import { PrinterIcon } from "../../../../components/Icons/PrinterIcon";
import { ShareIcon } from "../../../../components/Icons/ShareIcon";

export const RecipeItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div>
                    <p className={styles.title}>{"Health Japanese Fried Rice"}</p>
                    <RecipeParameters
                        authorPhotoUrl={author}
                        authorName={"John Smith"}
                        postDate={"15 March 2022"}
                        prepTime={15}
                        cookTime={15}
                        mainDish={"Chicken"}
                    />
                </div>
                <ActionItem icon={<PrinterIcon/>} text={"PRINT"} />
                <ActionItem icon={<ShareIcon/>} text={"SHARE"} />
            </div>
        </div>
    );
};
