import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import styles from "./Stack.module.css";
const Stack = () => {
  return (
    <>
      <h2 className={styles.h}>Technologies:</h2>
      <p>My default stack for completed and incompleted projects is:</p>
      <ul className={styles.list}>
        <li>
          <div>
            <SiTypescript size={36} />
          </div>
          Typescript
        </li>
        <li>
          <div>
            <SiNextdotjs size={36} />
            <SiReact size={36} />
          </div>
          Next.js / React.js
        </li>
        <li>
          <div>
            <SiNestjs size={36} />
          </div>
          Nest.js
        </li>

        <li>
          <div>
            <SiPostgresql size={36} />
          </div>
          PostgreSQL
        </li>
      </ul>
    </>
  );
};

export default Stack;
