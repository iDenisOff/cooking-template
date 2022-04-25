import React from "react";
import styles from "./Header.style.css";
import {MainMenu} from "./childs/MainMenu";
import {FacebookIcon} from "../../../../components/Icons/FacebookIcon";
import {TwitterIcon} from "../../../../components/Icons/TwitterIcon";
import {InstagramIcon} from "../../../../components/Icons/InstagramIcon";

export const Header: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <span className={styles.logo} onClick={onClick}>{"Foodieland."}</span>
            <MainMenu/>
            <div className={styles.contacts}>
                <span onClick={onClick}><FacebookIcon/></span>
                <span onClick={onClick}><TwitterIcon/></span>
                <span onClick={onClick}><InstagramIcon/></span>
            </div>
        </div>
    );
};
