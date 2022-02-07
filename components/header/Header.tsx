import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Secondary from "./secondary/Secondary";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#tech" scroll={true}>
              <a>Technologies</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
        </ul>

        <div className={styles.secondary}>
          <Secondary />
        </div>
      </nav>
    </header>
  );
};

export default Header;
