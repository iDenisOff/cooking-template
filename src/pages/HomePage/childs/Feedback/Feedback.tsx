import React from "react";
import styles from "./Feedback.style.css";
import bg from "./content/bg.png";

export const Feedback: React.FC = () => {
    return (
        <div className={styles.container} style={{background: `url(${bg}) no-repeat`}}>
            <p className={styles.title}>{"Deliciousness to your inbox"}</p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor"}
                <br/>
                {"incididunt ut labore et dolore magna aliqut enim ad minim "}
            </p>
            <input type={"text"} placeholder={"Your email address..."} className={styles.input}/>
            <button className={styles.button}>{"Subscribe"}</button>
        </div>
    );
};
