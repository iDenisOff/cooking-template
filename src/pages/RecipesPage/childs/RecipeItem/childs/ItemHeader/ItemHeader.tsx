import React from "react";
import styles from "./ItemHeader.style.css";
import { PrinterIcon } from "../../../../../../components/Icons/PrinterIcon";
import { ShareIcon } from "../../../../../../components/Icons/ShareIcon";
import { RecipeParameters } from "./childs/RecipeParameters";
import { ActionItem } from "./childs/ActionItem";

type ItemHeaderProps = {
    title: string;
    authorPhotoUrl: string;
    authorName: string;
    postDate: string;
    prepTime: number;
    cookTime: number;
    mainDish: string;
};

export const ItemHeader: React.FC<ItemHeaderProps> = (props) => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.title}>{props.title}</p>
                <RecipeParameters
                  authorPhotoUrl={props.authorPhotoUrl}
                  authorName={props.authorName}
                  postDate={props.postDate}
                  prepTime={props.prepTime}
                  cookTime={props.cookTime}
                  mainDish={props.mainDish}
                />
            </div>
            <ActionItem icon={<PrinterIcon/>} text={"PRINT"} />
            <ActionItem icon={<ShareIcon/>} text={"SHARE"} />
        </div>
    );
};
