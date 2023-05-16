import { useRouter } from "next/router";

export default function PiecePlayNav({
  highlight1,
  highlight2,
  highlight3,
  highlight4,
}) {
  const router = useRouter();
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Piece Play</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/pieceplay/1")}
          className="navbar-lesson"
        >
          The Pawn
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/pieceplay/2")}
          className="navbar-lesson"
        >
          The Rook
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/pieceplay/3")}
          className="navbar-lesson"
        >
          The Bishop
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/pieceplay/4")}
          className="navbar-lesson"
        >
          The Knight
        </li>
      </ul>
    </div>
  );
}
