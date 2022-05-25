import React from "react";
import styles from "./ContactForm.style.css";

export const ContactForm: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div style={{ display: "grid" }}>
                    <p className={styles.title}>{"name"}</p>
                    <input type={"text"} placeholder={"Enter your name..."} className={styles.input}/>
                </div>
                <div style={{ display: "grid" }}>
                    <p className={styles.title}>{"email address"}</p>
                    <input type={"text"} placeholder={"Your email address..."} className={styles.input}/>
                </div>
            </div>
            <div className={styles.row}>
                <div style={{ display: "grid" }}>
                    <p className={styles.title}>{"subject"}</p>
                    <input type={"text"} placeholder={"Enter subject..."} className={styles.input}/>
              </div>
              <div style={{ display: "grid" }}>
                  <p className={styles.title}>{"enquiry type"}</p>
                  <input type={"text"} placeholder={"Advertising"} className={styles.input}/>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "max-content auto" }}>
                <p className={styles.title}>{"messages"}</p>
                <input type={"text"} placeholder={"Enter your messages..."} className={styles.input}/>
            </div>
            <button className={styles.button}>{"Submit"}</button>
        </div>
    );
};
