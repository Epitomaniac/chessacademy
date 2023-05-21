import { useRouter } from "next/router";

export default function PiecePlayNav({
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
        <li className="navbar-title">Piece Play</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/pawn/1")}
          className="navbar-lesson"
        >
          The Pawn
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/rook/1")}
          className="navbar-lesson"
        >
          The Rook
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/bishop/1")}
          className="navbar-lesson"
        >
          The Bishop
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/knight/1")}
          className="navbar-lesson"
        >
          The Knight
        </li>
        <li
          style={highlight5 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/queen/1")}
          className="navbar-lesson"
        >
          The Queen
        </li>
        <li
          style={highlight6 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/king/1")}
          className="navbar-lesson"
        >
          The King
        </li>
        <li
          style={highlight7 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/piece-play/piece-play-quiz/1")}
          className="navbar-lesson"
        >
          Quiz: Piece Play
        </li>
      </ul>
    </div>
  );
}
