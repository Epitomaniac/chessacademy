import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Header() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.leftDiv}>
        <Link href="/">
          <p className={styles.navTitle}>Chess Academy</p>
        </Link>
        <Link href="/lessons">
          <p className={styles.navTitle}>Lessons</p>
        </Link>
      </div>
    </nav>
  );
}
