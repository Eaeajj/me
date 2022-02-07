/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Courses from "./courses/Courses";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <h2>About</h2>
        <div className={styles.imgContainer}>
          <img src="/ya.webp" alt="" />
        </div>
        <h4>Coding experience</h4>
        <p>
          Most of the time I code in Typescript. Started with C++, then Python,
          took freecodecamp courses, and switched to JS. In my free time, I can
          go to solve problems on codewards. This is my{" "}
          <a href="https://www.codewars.com/users/Eaeajj">profile</a>. I have
          some experience in setting up webpack. Linux as a home system for over
          a year. Sometimes I watch conferences like holy.js and similar
          educational stuff.
        </p>
        <h4>Literature</h4>
        <p>
          Now I'm reading Martin Kleppmann's "Designing Data-Intensive
          Applications" and not sure I'll finish it. Want to start Andrew
          Hoffman's "Web Application Security".
        </p>
        <h4>In addition</h4>
        <p>
          Now looking toward ReScript and something like Rust or Haskell. I need
          something reliable and strongly typed. I wish to create something that
          will be of great benefit to people. So about me:
        </p>
        <div className={styles.bigFactsContainer}>
          <ul className={styles.bigFacts}>
            <li>Don't have bad habits</li>
            <li>Keep my body in shape, play sport</li>
            <li>Graduated from a music school with a degree in piano</li>
            <li>Learn to play the guitar on my own</li>
          </ul>
        </div>
      </div>
      <Courses />
    </section>
  );
};

export default About;
