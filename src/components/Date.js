import styles from "./Date.module.css";

export function Date() {
  return (
    <div className={styles.DateClock}>
      <img className={styles.Clock} src="clock.png"></img>
      <p className={styles.Date}> Joined on Aug 30, 2020</p>
    </div>
  );
}
