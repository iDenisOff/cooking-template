import React from "react";
import styles from "./Menu.style.css";
import {useLocation} from "react-router-dom";
import { mainMenuItems } from "../../../../common/consts";
import { styler } from "../../../../utils/styler";

export const Menu: React.FC = () => {
    const currentPathname = useLocation().pathname;

    const onClick = (): void => {
        location.reload();
    };

    return (
        <ul className={styles.container}>
            {mainMenuItems.map(({name, route}) => (
                <li key={route}>
                    <span
                        className={styler(styles.text, [route === currentPathname, styles.textActive])}
                        onClick={onClick}>
                        {name}
                    </span>
                </li>
            ))}
        </ul>
    );
};
