import styles from "./Spoiler.module.css";
import { FC } from "react";

interface SpoilerProps {
  text: string;
}

const Spoiler: FC<SpoilerProps> = ({ text }) => {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Description</summary>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </details>
  );
};

export default Spoiler;
