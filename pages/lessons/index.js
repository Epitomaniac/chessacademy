import Link from "next/link";
import styles from "../../styles/lessons.module.css";

export default function Lessons() {
  return (
    <div>
      <h2 style={{ marginLeft: "15px", marginTop: "15px" }}>
        <Link href="/lessons/intro/1">Intro</Link>
      </h2>
      <h2 style={{ marginLeft: "15px", marginTop: "15px" }}>
        <Link href="/lessons/basic-checkmates/1">Basic Checkmates</Link>
      </h2>
      <h2 style={{ marginLeft: "15px", marginTop: "15px" }}>
        <Link href="/lessons/basic-tactics/1">Basic Tactics</Link>
      </h2>
      <h2 style={{ marginLeft: "15px", marginTop: "15px" }}>
        <Link href="/lessons/pieceplay/1">Piece Play</Link>
      </h2>
    </div>
  );
}
