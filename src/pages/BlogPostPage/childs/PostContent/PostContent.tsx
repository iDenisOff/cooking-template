import React from "react";
import styles from "./PostContent.style.css";

export const PostContent: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {"How did you start out in the food industry?"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. "}
                {"Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."}
            </p>
            <p className={styles.title}>
                {"What do you like most about your job?"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. "}
                {"Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."}
            </p>
            <p className={styles.title}>
                {"Do you cook at home on your days off?"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. "}
                {"Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."}
            </p>
            <p className={styles.title}>
                {"What would your advice be to young people looking to get their foot in the door?"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. "}
                {"Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."}
            </p>
            <p className={styles.title}>
                {"What is the biggest misconception that people have about being a professional chef?"}
            </p>
            <p className={styles.text}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. "}
                {"Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."}
            </p>
        </div>
    );
};
