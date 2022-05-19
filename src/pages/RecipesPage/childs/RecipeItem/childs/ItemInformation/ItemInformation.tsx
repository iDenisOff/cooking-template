import React from "react";
import styles from "./ItemInformation.style.css";

type ItemInformationProps = {
    title: string;
    items: {title: string, value: string}[];
    text: string;
};

export const ItemInformation: React.FC<ItemInformationProps> = (props) => {
    return (
            <div className={styles.container}>
                <span className={styles.title}>{props.title}</span>
                {props.items.map((i) => {
                    return (
                        <div className={styles.item}>
                            <span className={styles.itemTitle}>{i.title}</span>
                            <span className={styles.itemValue}>{i.value}</span>
                        </div>
                    );
                })}
                <p className={styles.text}>{props.text}</p>
            </div>
    );
};
