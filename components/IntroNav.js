import Link from "next/link";

export default function IntroNav() {
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Intro</li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/1">Welcome</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/2">The Board</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/3">The Pieces: Placement</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/4">The Pieces: Values</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/5">Quiz 1</Link>
        </li>
        <li className="navbar-lesson">
          <Link href="/lessons/intro/6">The Pieces: Movement</Link>
        </li>
      </ul>
    </div>
  );
}
