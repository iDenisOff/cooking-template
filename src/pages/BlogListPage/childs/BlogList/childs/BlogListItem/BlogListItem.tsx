import React from "react";
import styles from "./BlogListItem.style.css";
import { routesPaths } from "../../../../../../common/consts";

type BlogListItemProps = {
    photoUrl: string;
    title: string;
    text: string;
    author: string;
    authorPhotoUrl: string;
    date: string;
};

export const BlogListItem: React.FC<BlogListItemProps> = (props) => {
    const onClick = (): void => {
        window.scrollTo(0, 0);
        location.href = "/#" + routesPaths.aboutUsPage;
    };

    return (
          <div className={styles.container} onClick={onClick}>
              <img src={props.photoUrl} alt={props.title} style={{borderRadius: "20px"}}/>
              <div style={{margin: "auto"}}>
                  <p className={styles.title}>{props.title}</p>
                  <p className={styles.text}>{props.text}</p>
                  <div className={styles.postParameters}>
                      <div className={styles.authorContainer}>
                          <img src={props.authorPhotoUrl} alt={props.author}/>
                          <span className={styles.author}>{props.author}</span>
                      </div>
                      <span className={styles.date}>{props.date}</span>
                  </div>
              </div>
          </div>
    );
};
