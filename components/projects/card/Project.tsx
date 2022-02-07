import React, { FC } from "react";
import Spoiler from "./spoiler/Spoiler";
import styles from "./Project.module.css";

export interface ProjectCardProps {
  title: string;
  img: string;
  alt: string;
  deploy: string;
  code: string;
  descr: string;
  stack: Stack[];
}
interface Stack {
  icon: JSX.Element;
  name: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  img,
  alt,
  deploy,
  code,
  descr,
  stack,
}) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.linkContainer}>
        <a href={deploy}>View deploy</a>
        <a href={code}>Source code</a>
      </div>
      <Spoiler text={descr} />
      <p className={styles.stackTitle}>Stack:</p>
      <ul className={styles.list}>
        {stack.map((obj) => (
          <li key={obj.name}>
            {obj.icon}
            <p>{obj.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
