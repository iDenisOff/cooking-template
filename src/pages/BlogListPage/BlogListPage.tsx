import React from "react";
import styles from "./BlogListPage.style.css";
import { Header } from "../../components/Header";
import { Feedback } from "../../components/Feedback";
import { Footer } from "../../components/Footer";
import { InputWithButton } from "../../components/InputWithButton";

export const BlogListPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.title}>{"Blog & Article"}</p>
            <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}</p>
            <InputWithButton inputPlaceholder={"Search article, news or recipe..."} buttonText={"Search"} />
            <Feedback />
            <Footer />
        </div>
    );
};
