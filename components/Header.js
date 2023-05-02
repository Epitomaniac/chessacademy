import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import styles from "../styles/navbar.module.css";

export default function Header() {
  const { data: session } = useSession();

  function Login() {
    return (
      <Link href="/login">
        <p className={styles.navLogin}>Log in</p>
      </Link>
    );
  }
  function Logout() {
    return (
      <>
        <p className={styles.navTitle}>{session.user.email}</p>
        <p
          onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
          className={styles.navLogin}
        >
          Log out
        </p>
      </>
    );
  }

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
      <div className={styles.rightDiv}>
        {session?.user ? <Logout /> : <Login />}
      </div>
    </nav>
  );
}
