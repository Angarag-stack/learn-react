import styles from "./Skills.module.css";

export function Skills() {
  return (
    <>
      <p className={styles.Skills}>SKILLS</p>
      {ListItems.map((item) => {
        return <div className={styles.SkillsName}>{item}</div>;
      })}
    </>
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
