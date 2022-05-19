import React from "react";
import styles from "./ActionItem.style.css";

type ActionProps = {
    icon: JSX.Element;
    text: string;
}

export const ActionItem: React.FC<ActionProps> = (props) => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <button onClick={onClick} className={styles.button}>
                {props.icon}
            </button>
            <span className={styles.text}>{props.text}</span>
        </div>
    );
};
