import Link from "next/link";

export default function IntroNav() {
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Intro</li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/1">1.Welcome</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/2">2.The Board</Link>
        </li>
      </ul>
    </div>
  );
}
