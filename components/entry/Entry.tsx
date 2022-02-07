import React from "react";
import styles from "./Entry.module.css";
import Secondary from "../header/secondary/Secondary";

const Entry = () => {
  return (
    <section className={styles.container}>
      <div className={styles.secondary}>
        <Secondary />
      </div>
      <h1>Hi! My name is Oleg. I am web developer.</h1>
    </section>
  );
};

export default Entry;
