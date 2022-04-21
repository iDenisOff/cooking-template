import React from "react";
import styles from "./Header.style.css";
import { MainMenu } from "./childs/MainMenu";
import facebook from "./content/facebook.png";
import twitter from "./content/twitter.png";
import instagram from "./content/instagram.png";

export const Header: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <span className={styles.logo}>{"Foodieland."}</span>
            <MainMenu />
            <div className={styles.contacts}>
                <img src={facebook} alt={"facebook"} onClick={onClick} />
                <img src={twitter} alt={"twitter"} onClick={onClick} />
                <img src={instagram} alt={"instagram"} onClick={onClick} />
            </div>
        </div>
    );
};
