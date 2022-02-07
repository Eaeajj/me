import { useTheme } from "next-themes";
import React from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleCheck = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" onChange={handleCheck} />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};

export default ThemeToggle;
