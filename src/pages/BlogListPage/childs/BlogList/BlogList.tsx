import React from "react";
import styles from "./BlogList.style.css";
import { BlogListItem } from "./childs/BlogListItem";

import crochetProjects from "./content/crochetProjects.png";
import wadeWarren from "./content/author/wadeWarren.png";

import vegetarianRecipes from "./content/vegetarianRecipes.png";
import robertFox from "./content/author/robertFox.png";

import professionalChefGuide from "./content/professionalChefGuide.png";
import dianneRussell from "./content/author/dianneRussell.png";

import vegetarianLasagna from "./content/vegetarianLasagna.png";
import leslieAlexander from "./content/author/leslieAlexander.png";

import stew from "./content/stew.png";
import courtneyHenry from "./content/author/courtneyHenry.png";

import communicationsAssistant from "./content/communicationsAssistant.png";
import albertFlores from "./content/author/albertFlores.png";

export const BlogList: React.FC = () => {
    return (
          <div className={styles.container}>
              <BlogListItem
                photoUrl={crochetProjects}
                title={"Crochet Projects for Noodle Lovers"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Wade Warren"}
                authorPhotoUrl={wadeWarren}
                date={"12 November 2021"}
              />
              <BlogListItem
                photoUrl={vegetarianRecipes}
                title={"10 Vegetarian Recipes To Eat This Month"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Robert Fox"}
                authorPhotoUrl={robertFox}
                date={"12 November 2021"}
              />
              <BlogListItem
                photoUrl={professionalChefGuide}
                title={"Full Guide to Becoming a Professional Chef"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Dianne Russell"}
                authorPhotoUrl={dianneRussell}
                date={"12 November 2021"}
              />
              <BlogListItem
                photoUrl={vegetarianLasagna}
                title={"Simple & Delicious Vegetarian Lasagna"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Leslie Alexander"}
                authorPhotoUrl={leslieAlexander}
                date={"12 November 2021"}
              />
              <BlogListItem
                photoUrl={stew}
                title={"Plantain and Pinto Stew with Aji Verde"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Courtney Henry"}
                authorPhotoUrl={courtneyHenry}
                date={"12 November 2021"}
              />
              <BlogListItem
                photoUrl={communicationsAssistant}
                title={"We’re Hiring a Communications Assistant!"}
                text={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "}
                author={"Albert Flores"}
                authorPhotoUrl={albertFlores}
                date={"12 November 2021"}
              />
          </div>
    );
};
