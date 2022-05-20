import React from "react";
import styles from "./DirectionsItem.style.css";

type DirectionsItemProps = {
    title: string;
    content: JSX.Element;
};

export const DirectionsItem: React.FC<DirectionsItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <input type={"radio"} className={styles.button} />
            <div>
                <p className={styles.title}>{props.title}</p>
                {props.content}
            </div>
        </div>
    );
};
