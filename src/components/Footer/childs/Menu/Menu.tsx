import React from "react";
import styles from "./Menu.style.css";
import { Link, useLocation } from "react-router-dom";
import { mainMenuItems } from "../../../../common/consts";
import { styler } from "../../../../utils/styler";

export const Menu: React.FC = () => {
    const currentPathname = useLocation().pathname;

    const onClick = (): void => {
        window.scrollTo(0, 0);
    };

    return (
        <ul className={styles.container}>
            {mainMenuItems.map(({name, route}) => (
                <li key={route}>
                    <Link
                      className={styler(styles.text, [route === currentPathname, styles.textActive])}
                      to={{ pathname: route }}
                      onClick={onClick}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
