import React from "react";
import styles from "./InstagramAccountDisplay.style.css";
import post_1 from "./content/post_1.png";
import post_2 from "./content/post_2.png";
import post_3 from "./content/post_3.png";
import post_4 from "./content/post_4.png";
import {InstagramIcon} from "../../../../components/Icons/InstagramIcon";

export const InstagramAccountDisplay: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>{"Check out @foodieland on Instagram"}</p>
            <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"}<br/>{"magna aliqut enim ad minim "}
            </p>
            <div className={styles.postContainer}>
                <img src={post_1} alt={"post_1"} className={styles.image} onClick={onClick}/>
                <img src={post_2} alt={"post_2"} className={styles.image} onClick={onClick}/>
                <img src={post_3} alt={"post_3"} className={styles.image} onClick={onClick}/>
                <img src={post_4} alt={"post_4"} className={styles.image} onClick={onClick}/>
            </div>
            <button className={styles.button} onClick={onClick}>
                <span className={styles.buttonText}>{"Visit Our Instagram"}</span>
                <InstagramIcon color={"#ffffff"}/>
            </button>
        </div>
    );
};
