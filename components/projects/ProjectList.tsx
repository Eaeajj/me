/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectCard, { ProjectCardProps } from "./card/Project";
import { FaReact, FaDocker, FaSass } from "react-icons/fa";
import { SiRedux, SiNestjs, SiVercel, SiNextdotjs } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import styles from "./ProjectList.module.css";

const iconSize = 24;

const ProjectList = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div>
          <h2>Projects:</h2>
        </div>
        <div className={styles.list}>
          <div className={styles.column1}>
            <ProjectCard
              title={card1.title}
              img={card1.img}
              alt={card1.alt}
              deploy={card1.deploy}
              code={card1.code}
              descr={card1.descr}
              stack={card1.stack}
            />
          </div>
          <div className={styles.column2}>
            <ProjectCard
              title={card2.title}
              img={card2.img}
              alt={card2.alt}
              deploy={card2.deploy}
              code={card2.code}
              descr={card2.descr}
              stack={card2.stack}
            />
          </div>
        </div>
      </div>
      These were projects for which it is not a shame. I'll add more when I
      write something worthwhile.
    </section>
  );
};

export default ProjectList;

const card1: ProjectCardProps = {
  title: "Online school",
  img: "/silcode.webp",
  alt: "online school project image",
  deploy: "https://silcode-client-6pc7tj78a-silcode.vercel.app/",
  code: "https://github.com/someOrganiz/silcode-client",
  descr: `This is an educational project that I wrote on one
   of the disciplines at the institute. I wrote all the css 
   and sass myself. Added i18n. I used redux and axios to implement authorization by access & refresh tokens, <a href="https://github.com/someOrganiz/silcode-server">here</a>
   is the source code of the backend on Nest.js. Deployed 
   only client part to Versel. If there is no my deploy, then 
   I forgot to abuse their site. Tried a little bit of testing on Cypress in this project.`,
  stack: [
    { icon: <SiNextdotjs size={iconSize} />, name: "Next.js" },
    { icon: <SiRedux size={iconSize} />, name: "Redux.js" },
    { icon: <FaSass size={iconSize} />, name: "Sass" },

    { icon: <SiNestjs size={iconSize} />, name: "Nest.js" },
    { icon: <SiVercel size={iconSize} />, name: "Vercel" },
  ],
};

const card2: ProjectCardProps = {
  title: "Book search app",
  img: "/book.webp",
  alt: "book search app image",
  deploy: "https://find-a-book-test.herokuapp.com/",
  code: "https://github.com/Eaeajj/find-a-book",
  descr: `This app works with google book api. 
  Deployed on heroku with docker. Implemented skeleton loading, 
  pagination, sortings, responsive design.`,
  stack: [
    { icon: <FaReact size={iconSize} />, name: "React.js" },
    { icon: <SiRedux size={iconSize} />, name: "Redux.js" },
    { icon: <FaDocker size={iconSize} />, name: "Docker" },
    { icon: <DiHeroku size={iconSize} />, name: "Heroku" },
  ],
};
