import React from "react";
import styles from "./Header.style.css";
import { MainMenu } from "./childs/MainMenu";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";

export const Header: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <span className={styles.logo} onClick={onClick}>{"Foodieland."}</span>
            <MainMenu/>
            <div className={styles.contacts}>
                <a href={"https://ru-ru.facebook.com/"}><FacebookIcon/></a>
                <a href={"https://twitter.com"}><TwitterIcon/></a>
                <a href={"https://www.instagram.com/"}><InstagramIcon/></a>
            </div>
        </div>
    );
};
