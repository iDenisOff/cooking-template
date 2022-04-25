import React from "react";
import styles from "./Footer.style.css";
import {Menu} from "./childs/Menu";
import {FacebookIcon} from "../../../../components/Icons/FacebookIcon";
import {TwitterIcon} from "../../../../components/Icons/TwitterIcon";
import {InstagramIcon} from "../../../../components/Icons/InstagramIcon";

export const Footer: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

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
                    <span onClick={onClick}><FacebookIcon/></span>
                    <span onClick={onClick}><TwitterIcon/></span>
                    <span onClick={onClick}><InstagramIcon/></span>
                </div>
            </div>
        </div>
    );
};
