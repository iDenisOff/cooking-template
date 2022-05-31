import React from "react";
import styles from "./Footer.style.css";
import { Menu } from "./childs/Menu";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <p className={styles.logo}>{"Foodieland."}</p>
                    <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetuipisicing elit"}</p>
                </div>
                <Menu/>
            </div>
            <div className={styles.bottom}>
                <span className={styles.bottomText}>{"© 2020 Flowbase. Powered by Webflow"}</span>
                <div className={styles.bottomContacts}>
                    <a href={"https://ru-ru.facebook.com/"}><FacebookIcon/></a>
                    <a href={"https://twitter.com"}><TwitterIcon/></a>
                    <a href={"https://www.instagram.com/"}><InstagramIcon/></a>
                </div>
            </div>
        </div>
    );
};
