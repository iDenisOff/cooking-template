import React from "react";
import styles from "./ContactPage.style.css";
import { Header } from "../../components/Header";
import { Feedback } from "../../components/Feedback";
import { Recommendations } from "../BlogPostPage/childs/Recommendations";
import { Footer } from "../../components/Footer";
import { ContactForm } from "./childs/ContactForm";
import cook from "./content/cook.png";

export const ContactPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.title}>{"Contact us"}</p>
            <div className={styles.content}>
                <img src={cook} alt={"cook"}/>
                <ContactForm />
            </div>
            <Feedback />
            <Recommendations />
            <Footer />
        </div>
    );
};
