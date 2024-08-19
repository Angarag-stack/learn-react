import styles from "./Skills.module.css";

export function Skills() {
  return (
    <div className={styles.flex}>
      {ListItems.map((item) => {
        return <div className={styles.SkillsName}>{item}</div>;
      })}
    </div>
  );
}
const ListItems = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "Numpy",
  "Pandas",
  "Data Analyst",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];
