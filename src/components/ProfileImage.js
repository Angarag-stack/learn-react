import styles from "./ProfileImage.module.css";

export function ProfileImage() {
  return (
    <img
      className={styles.ProfileImage}
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    ></img>
  );
}
