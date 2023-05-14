import { useRouter } from "next/router";

export default function TacticsNav({
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
        <li className="navbar-title">Tactics</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/1")}
          className="navbar-lesson"
        >
          The Fork
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/2")}
          className="navbar-lesson"
        >
          The Pin
        </li>
        <li
          style={highlight3 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/3")}
          className="navbar-lesson"
        >
          The Skewer
        </li>
        <li
          style={highlight4 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/4")}
          className="navbar-lesson"
        >
          Discovered Attack
        </li>
        <li
          style={highlight5 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/5")}
          className="navbar-lesson"
        >
          Removing the Defender
        </li>
        <li
          style={highlight6 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/6")}
          className="navbar-lesson"
        >
          Sacrifice
        </li>
        <li
          style={highlight7 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-tactics/7")}
          className="navbar-lesson"
        >
          Exercise: Tactics
        </li>
      </ul>
    </div>
  );
}
