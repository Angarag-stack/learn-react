import { ProfileImage } from "@/components/ProfileImage";
import { Name } from "../components/Name";
import { Background } from "@/components/background";
import styles from "../components/Background.module.css";
import { Job } from "@/components/Job";
import { Skills } from "@/components/Skills";
export default function Homepage() {
  return (
    <div className={styles.Background}>
      <ProfileImage />
      <Name />
      <Job />
      <Skills />
    </div>
  );
}
