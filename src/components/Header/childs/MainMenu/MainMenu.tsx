import React from "react";
import styles from "./MainMenu.style.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { mainMenuItems } from "../../../../common/consts";
import { styler } from "../../../../utils/styler";

export const MainMenu: React.FC = () => {
    const currentPathname = useLocation().pathname;

    return (
        <ul className={styles.container}>
            {mainMenuItems.map(({ name, route }) => (
                <li key={route}>
                    <Link
                      className={styler(styles.text, [route === currentPathname, styles.textActive])}
                      to={{ pathname: route }}
                    >
                      {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
