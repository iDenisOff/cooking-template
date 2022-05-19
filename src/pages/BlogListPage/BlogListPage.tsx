import React from "react";
import styles from "./BlogListPage.style.css";
import { Header } from "../../components/Header";
import { Feedback } from "../../components/Feedback";
import { Footer } from "../../components/Footer";
import { InputWithButton } from "../../components/InputWithButton";
import { BlogList } from "./childs/BlogList";
import { TastyRecipes } from "../../components/TastyRecipes";
import chickenMeatballs from "./content/chickenMeatballs.png";
import ragu from "./content/ragu.png";
import dumplings from "./content/dumplings.png";

const recipesItems = [
  { photoUrl: chickenMeatballs, title: "Chicken Meatballs with Cream Cheese", author: "By Andreas Paula"},
  { photoUrl: ragu, title: "Traditional Bolognaise Ragu", author: "By Andreas Paula"},
  { photoUrl: dumplings, title: "Pork and Chive Chinese Dumplings", author: "By Andreas Paula"},
];

export const BlogListPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.title}>{"Blog & Article"}</p>
            <p className={styles.text}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}</p>
            <InputWithButton inputPlaceholder={"Search article, news or recipe..."} buttonText={"Search"} />
            <div className={styles.main}>
              <BlogList />
              <TastyRecipes title={"Tasty Recipes"} items={recipesItems} />
            </div>
            <Feedback />
            <Footer />
        </div>
    );
};
