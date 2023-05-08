import { useRouter } from "next/router";

export default function IntroNav({
  highlight1,
  highlight2,
  highlight3,
  highlight4,
  highlight5,
  highlight6,
  highlight7,
}) {
  const router = useRouter();
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Intro</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/1")}
          className="navbar-lesson"
        >
          The Board
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/2")}
          className="navbar-lesson"
        >
          The Pieces: Placement
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/3")}
          className="navbar-lesson"
        >
          The Pieces: Values
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/4")}
          className="navbar-lesson"
        >
          Quiz: Piece Values
        </li>
        <li
          style={highlight5 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/5")}
          className="navbar-lesson"
        >
          The Pieces: Movement
        </li>
        <li
          style={highlight6 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/6")}
          className="navbar-lesson"
        >
          Quiz: Movement
        </li>
        <li
          style={highlight7 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/7")}
          className="navbar-lesson"
        >
          Checkmate
        </li>
      </ul>
    </div>
  );
}
