import { useRouter } from "next/router";

export default function CheckmatesNav({
  highlight1,
  highlight2,
  highlight3,
  highlight4,
  highlight5,
  highlight6,
  highlight7,
  highlight8,
  highlight9,
}) {
  const router = useRouter();
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Checkmates</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/back-rank/1")}
          className="navbar-lesson"
        >
          Back Rank
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/battery/1")}
          className="navbar-lesson"
        >
          Battery
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() =>
            router.push("/lessons/basic-checkmates/mate-exercise/1")
          }
          className="navbar-lesson"
        >
          Exercise: Mate in 1
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/rook-queen/1")}
          className="navbar-lesson"
        >
          Queen & Rook vs King
        </li>
        <li
          style={highlight5 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/two-rooks/1")}
          className="navbar-lesson"
        >
          Two Rooks vs King
        </li>
        <li
          style={highlight6 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/king-queen/1")}
          className="navbar-lesson"
        >
          King & Queen vs King
        </li>
        <li
          style={highlight7 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/exercise-1/1")}
          className="navbar-lesson"
        >
          Exercise: Q + R vs K
        </li>
        <li
          style={highlight8 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/exercise-2/1")}
          className="navbar-lesson"
        >
          Exercise: R + R vs K
        </li>
        <li
          style={highlight9 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/exercise-3/1")}
          className="navbar-lesson"
        >
          Exercise: K + Q vs K
        </li>
      </ul>
    </div>
  );
}
