import React from "react";
import styles from "./BlogListItem.style.css";

type BlogListItemProps = {
    photoUrl: string;
    title: string;
    text: string;
    author: string;
    authorPhotoUrl: string;
    date: string;
};

export const BlogListItem: React.FC<BlogListItemProps> = (props) => {
    return (
      <div className={styles.container}>
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
