import React from "react";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <section className={styles.container}>
      <h2>Сourses I took:</h2>

      <dl className={styles.list}>
        {myCourses.map((platform) => (
          <div key={platform.title}>
            <dt className={styles.title}>{platform.title}</dt>
            {platform.list.map((course) => (
              <dd key={course.name} className={styles.item}>
                <a href={course.href}>{course.name}</a>
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Courses;

const myCourses: Course[] = [
  {
    title: "PY4E",
    list: [
      {
        href: "https://www.py4e.com/",
        name: "Python for everybody",
      },
    ],
  },
  {
    title: "Set of freecodecamp courses",
    list: [
      {
        href: "https://www.freecodecamp.org/certification/eaeajj/responsive-web-design",
        name: "Responsive Web Design",
      },
      {
        href: "https://www.freecodecamp.org/certification/eaeajj/javascript-algorithms-and-data-structures",
        name: "JavaScript Algorithms and Data Structures",
      },
      {
        href: "https://www.freecodecamp.org/certification/eaeajj/front-end-development-libraries",
        name: "Front End Development Libraries",
      },
    ],
  },
  {
    title: "Courses on Stepik",
    list: [
      {
        href: "https://stepik.org/course/63054/syllabus",
        name: "Interactive SQL Trainer",
      },
    ],
  },
];

interface Course {
  title: string;
  list: MyLink[];
}

interface MyLink {
  href: string;
  name: string;
}
