import { useRouter } from "next/router";

export default function IntroNav({ highlight1, highlight2 }) {
  const router = useRouter();
  return (
    <div className="lessons-navbar">
      <ul>
        <li className="navbar-title">Checkmates</li>
        <li
          style={highlight1 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/1")}
          className="navbar-lesson"
        >
          Back-rank Mate
        </li>
        <li
          style={highlight2 && { backgroundColor: "#201f1f", color: "white" }}
          onClick={() => router.push("/lessons/basic-checkmates/2")}
          className="navbar-lesson"
        >
          Battery
        </li>
      </ul>
    </div>
  );
}
