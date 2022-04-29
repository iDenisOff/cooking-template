import React from "react";
import styles from "./InputWithButton.style.css";

type InputWithButtonProps = {
    inputPlaceholder: string;
    buttonText: string;
}

export const InputWithButton: React.FC<InputWithButtonProps> = (props) => {
    return (
        <div className={styles.container}>
            <input type={"text"} placeholder={props.inputPlaceholder} className={styles.input}/>
            <button className={styles.button}>{props.buttonText}</button>
        </div>
    );
};
