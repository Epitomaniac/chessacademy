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
          onClick={() => router.push("/lessons/intro/board/1")}
          className="navbar-lesson"
        >
          The Board
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/placement/1")}
          className="navbar-lesson"
        >
          The Pieces: Placement
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/piece-values/1")}
          className="navbar-lesson"
        >
          The Pieces: Values
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/values-quiz/1")}
          className="navbar-lesson"
        >
          Quiz: Piece Values
        </li>
        <li
          style={highlight5 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/movement/1")}
          className="navbar-lesson"
        >
          The Pieces: Movement
        </li>
        <li
          style={highlight6 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/movement-quiz/1")}
          className="navbar-lesson"
        >
          Quiz: Movement
        </li>
        <li
          style={highlight7 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/intro/checkmate/1")}
          className="navbar-lesson"
        >
          Checkmate
        </li>
      </ul>
    </div>
  );
}
