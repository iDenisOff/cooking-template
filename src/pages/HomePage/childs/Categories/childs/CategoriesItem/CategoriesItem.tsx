import React from "react";
import styles from "./CategoriesItem.style.css";

type CategoriesItemProps = {
    photoUrl: string;
    name: string;
    bgStyle: React.CSSProperties;
};

export const CategoriesItem: React.FC<CategoriesItemProps> = (props) => {
    const onClick = (): void => {
        window.scrollTo(0, 0);
        location.href = "/#";
    };

    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.imageContainer}>
                <img src={props.photoUrl} alt={props.name} className={styles.image}/>
                <img src={props.photoUrl} alt={props.name} className={styles.shadow}/>
            </div>
            <div className={styles.bg} style={props.bgStyle}/>
            <span className={styles.name}>{props.name}</span>
        </div>
    );
};
