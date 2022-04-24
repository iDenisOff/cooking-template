import React from "react";
import styles from "./Summary.style.css";
import {Content} from "./childs/Content";
import cook from "./content/cook.png";

export const Summary: React.FC = () => {
    return (
        <div className={styles.container}>
            <Content/>
            <img src={cook} alt={"cook"} />
        </div>
    );
};
