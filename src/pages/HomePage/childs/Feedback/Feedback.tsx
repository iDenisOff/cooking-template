import React from "react";
import styles from "./Feedback.style.css";

export const Feedback: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{"Deliciousness to your inbox"}</p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor"}
                <br/>
                {"incididunt ut labore et dolore magna aliqut enim ad minim "}
            </p>
        </div>
    );
};
