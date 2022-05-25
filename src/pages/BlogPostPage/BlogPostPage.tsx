import React from "react";
import styles from "./BlogPostPage.style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Feedback } from "../../components/Feedback";
import { Recommendations } from "./childs/Recommendations";
import author from "./content/author.png";
import post from "./content/post.png";
import { PostContent } from "./childs/PostContent";
import { FacebookIcon } from "../../components/Icons/FacebookIcon";
import { TwitterIcon } from "../../components/Icons/TwitterIcon";
import { InstagramIcon } from "../../components/Icons/InstagramIcon";

export const BlogPostPage: React.FC = () => {
    const onClick = (): void => {
      location.reload();
    };

    return (
          <div className={styles.container}>
              <Header />
              <p className={styles.title}>{"Full Guide to Becoming a Professional Chef"}</p>
              <div className={styles.postParameters}>
                  <div className={styles.authorContainer}>
                      <div style={{ textAlign: "end" }}>
                          <img src={author} alt={"author"}/>
                      </div>
                      <span className={styles.author}>{"John Smith"}</span>
                  </div>
                  <span className={styles.date}>{"15 March 2022"}</span>
              </div>
              <div className={styles.text}>
                  {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "}
                  {"Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar."}
              </div>
              <img src={post} alt={"post"} style={{ borderRadius: "30px"}} />
              <div className={styles.block}>
                  <PostContent />
                  <div className={styles.linksContainer}>
                      <p className={styles.linksTitle}>{"SHARE THIS ON:"}</p>
                      <p className={styles.link} onClick={onClick}><FacebookIcon /></p>
                      <p className={styles.link} onClick={onClick}><TwitterIcon /></p>
                      <p className={styles.link} onClick={onClick}><InstagramIcon /></p>
                  </div>
              </div>
              <Feedback />
              <Recommendations />
              <Footer />
          </div>
      );
};
