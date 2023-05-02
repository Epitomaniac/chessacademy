import Link from "next/link";
import styles from "../../styles/lessons.module.css";

export default function Lessons() {
  return (
    <div>
      <h1 className={styles.title}>Lessons page</h1>
      <Link href="/lessons/intro/1">Intro</Link>
    </div>
  );
}
