import React from "react";
import styles from "./Content.style.css";

export const Content: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {"Everyone can be a chef"}
                <br/>
                {"in their own kitchen"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do"}
                <br/>
                {"eiusmod tempor incididunt ut labore et dolore magna aliqut enim"}
                <br/>
                {"ad minim "}
            </p>
            <button className={styles.button} onClick={onClick}>
                {"Learn More"}
            </button>
        </div>
    );
};
