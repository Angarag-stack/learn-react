import styles from "./Name.module.css";

export function Name() {
  return (
    <div className={styles.CheckName}>
      <p className={styles.Name}>ASABENEH YETAYEH</p>
      <img className={styles.Check} src="check.jpg"></img>
    </div>
  );
}
