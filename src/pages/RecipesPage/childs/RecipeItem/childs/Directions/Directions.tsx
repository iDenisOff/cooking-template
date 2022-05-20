import React from "react";
import styles from "./Directions.style.css";
import { DirectionsItem } from "./childs";

type DirectionsProps = {
    items: { title: string, content: JSX.Element }[];
};

export const Directions: React.FC<DirectionsProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{"Directions"}</p>
            {props.items.map((item, index) => {
                const title = (index + 1) + ". " + item.title;

                return <DirectionsItem title={title} content={item.content}/>
            })}
        </div>
    );
};
